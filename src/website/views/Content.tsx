import * as React from "react";
import {
  commitMutation,
  graphql,
} from "react-relay";

import {
  Cell,
  Grid,
  Row,
} from "@material/react-layout-grid";
import {
  Body1,
  Overline,
} from "@material/react-typography";
import TextField, {HelperText, Input} from '@material/react-text-field';
import Button from '@material/react-button';
import LinearProgress from "@material/react-linear-progress";
import {
  Environment,
} from "relay-runtime";

import {
  goto,
} from "../utility";
import {
  ContentGenerateQRCodeImageMutationResponse,
} from "./__generated__/ContentGenerateQRCodeImageMutation.graphql";
import {
  ContentDecodeQRCodeURLMutationResponse,
} from "./__generated__/ContentDecodeQRCodeURLMutation.graphql";

export interface IContentProps {
  environment: Environment;
}

export interface IContentState {
  hint?: string;
  message?: string;
  password?: string;
  image?: string;
  url?: string;
  error?: string;
  loading?: boolean;
}

class _Content extends React.Component<IContentProps, IContentState> {

  public constructor(
    props: IContentProps,
  ) {
    super(props);
    this.state = {
      hint: "",
      message: "",
      password: "",
      image: "",
      url: window.location.href,
      error: "",
      loading: false,
    };
  }

  public render(
  ): JSX.Element {
    var progress = <span />;
    if (this.state.loading) {
      progress = <LinearProgress indeterminate />;
    }
    if (window.location.search === "") {
      return <Grid>
        <Row>
          <Cell columns={12}>
            <TextField
              fullWidth
              label="Hint (unsecured)"
              helperText={<HelperText>Hint (unsecured)</HelperText>}
            >
              <Input
               value={this.state.hint}
               onChange={(e: any) => this.setState({loading: false, error: "", image: "", hint: e.target.value})}
              />
            </TextField>
            <br />
            <br />
            <TextField
              textarea
              fullWidth
              label="Message (secured)"
              helperText={<HelperText>Message (secured)</HelperText>}
            >
              <Input
               value={this.state.message}
               onChange={(e: any) => this.setState({loading: false, error: "", image: "", message: e.target.value})}
              />
            </TextField>
            <br />
            <br />
            <TextField
              fullWidth
              label="Password (16 character minimum)"
              helperText={<HelperText>Password (16 character minimum)</HelperText>}
            >
              <Input
               value={this.state.password}
               onChange={(e: any) => this.setState({loading: false, error: "", image: "", password: e.target.value})}
              />
            </TextField>
            <br />
            <br />
            <Button onClick={() => this.generateQRCodeImage()}>Generate</Button>
            <br />
            <br />
            {progress}
            <img src={this.state.image} />
            <Overline>{this.state.error}</Overline>
          </Cell>
        </Row>
      </Grid>;
    } else {
      const encodedMetadata = window.location.search.replace("?metadata=", "");
      const stringMetadata = decodeURIComponent(encodedMetadata);
      const metadata = JSON.parse(stringMetadata);
      return <Grid>
        <Row>
          <Cell columns={12}>
            <TextField
              fullWidth
              label={metadata.hint}
              helperText={<HelperText>{metadata.hint}</HelperText>}
            >
              <Input
               value={this.state.password}
               onChange={(e: any) => this.setState({loading: false, error: "", message: "", password: e.target.value})}
              />
            </TextField>
            <br />
            <br />
            <Button onClick={() => this.decodeQRCodeURL()}>Decrypt</Button>
            <br />
            <br />
            {progress}
            <Body1>{this.state.message}</Body1>
            <Overline>{this.state.error}</Overline>
          </Cell>
        </Row>
      </Grid>;
    }
  }

  private generateQRCodeImage(): void {
    this.setState({
      loading: true,
    });
    commitMutation(
      this.props.environment,
      {
        mutation: graphql`
          mutation ContentGenerateQRCodeImageMutation($input: GenerateQRCodeImageInput) {
            generateQRCodeImage(input: $input) {
              data
            }
          }
        `,
        onCompleted: (response: unknown): void => {
          this.setState({
            image: (response as ContentGenerateQRCodeImageMutationResponse).generateQRCodeImage.data,
            error: "",
            loading: false,
          });
        },
        onError: (e: Error): void => {
          this.setState({
            image: "",
            error: e.message,
            loading: false,
          });
        },
        variables: {
          input: {
            hint: this.state.hint,
            message: this.state.message,
            password: this.state.password,
          },
        },
      },
    );
  }

  private decodeQRCodeURL(): void {
    this.setState({
      loading: true,
    });
    commitMutation(
      this.props.environment,
      {
        mutation: graphql`
          mutation ContentDecodeQRCodeURLMutation($input: DecodeQRCodeURLInput) {
            decodeQRCodeURL(input: $input) {
              message
            }
          }
        `,
        onCompleted: (response: unknown): void => {
          this.setState({
            message: (response as ContentDecodeQRCodeURLMutationResponse).decodeQRCodeURL.message,
            error: "",
            loading: false,
          });
        },
        onError: (e: Error): void => {
          this.setState({
            message: "",
            error: e.message,
            loading: false,
          });
        },
        variables: {
          input: {
            url: this.state.url,
            password: this.state.password,
          },
        },
      },
    );
  }
}

export { _Content as Content };
