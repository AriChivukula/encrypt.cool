terraform {
  backend "s3" {}
}

variable "DOMAIN" {}

provider "aws" {}

data "aws_vpc" "ob_vpc" {
  tags = {
    Name = "aol"
  }
}

resource "aws_security_group" "ob_security" {
  name = "${var.DOMAIN}"
  vpc_id = "${data.aws_vpc.ob_vpc.id}"

  ingress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_acm_certificate" "ob_certificate" {
  domain_name = "${var.DOMAIN}"
  subject_alternative_names = ["*.${var.DOMAIN}"]
  validation_method = "DNS"

  tags = {
    Name = "${var.DOMAIN}"
  }
}

resource "aws_s3_bucket" "ob_bucket" {
  bucket = "${var.DOMAIN}"
  force_destroy = true

  tags = {
    Name = "${var.DOMAIN}"
  }

  versioning {
    enabled = true
  }
}

resource "aws_route53_zone" "ob_zone" {
  name = "${var.DOMAIN}."

  tags = {
    Name = "${var.DOMAIN}"
  }
}

resource "aws_route53_record" "ob_record" {
  depends_on = [
    "aws_acm_certificate.ob_certificate",
  ]

  count = "${length(aws_acm_certificate.ob_certificate.domain_validation_options)}"
  name = "${lookup(aws_acm_certificate.ob_certificate.domain_validation_options[count.index], "resource_record_name")}"
  records = ["${lookup(aws_acm_certificate.ob_certificate.domain_validation_options[count.index], "resource_record_value")}"]
  ttl = 60
  type = "${lookup(aws_acm_certificate.ob_certificate.domain_validation_options[count.index], "resource_record_type")}"
  zone_id = "${aws_route53_zone.ob_zone.zone_id}"
}

resource "aws_acm_certificate_validation" "ob_validation" {
  certificate_arn = "${aws_acm_certificate.ob_certificate.arn}"
  validation_record_fqdns = aws_route53_record.ob_record.*.fqdn
}

resource "aws_iam_role" "ob_iam" {
  name = "${var.DOMAIN}"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "ob_permission_lambda" {
  role = "${aws_iam_role.ob_iam.name}"
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy_attachment" "ob_permission_vpc" {
  role = "${aws_iam_role.ob_iam.name}"
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole"
}
