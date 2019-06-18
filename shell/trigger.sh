export TF_VAR_BRANCH=$TRAVIS_BRANCH
terraform init -backend-config="bucket=${TF_VAR_DOMAIN}" -backend-config="key=tfstate/trigger.tfstate" infra/trigger
terraform apply -auto-approve infra/trigger
