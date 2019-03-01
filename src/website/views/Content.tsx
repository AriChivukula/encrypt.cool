/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/website.ts::Content>>
 * BESPOKE<<imports, state, render, implementation>>
 * SIGNED<<seSd0V7tlRsuDlrJjvcCOGedLoLzSaj4uGe/hnj4z4+pcMqnBbLm1zw/OnzYDwXCQTxnzyanQaEC1mDBPYFAnQ==>>
 */

import * as React from "react";
import {
  commitMutation,
  graphql,
} from "react-relay";

/* BESPOKE START <<imports>> */
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
/* BESPOKE END <<imports>> */

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
      /* BESPOKE START <<state>> */
      hint: "",
      message: "",
      password: "",
      image: "",
      url: window.location.href,
      error: "",
      loading: false,
      /* BESPOKE END <<state>> */
    };
  }

  public render(
  ): JSX.Element {
    /* BESPOKE START <<render>> */
    var progress = <span />;
    if (this.state.loading) {
      progress = <LinearProgress />;
    }
    if (window.location.search === "") {
      return <Grid>
        <Row>
          <Cell columns={12}>
            <TextField fullwidth label="Hint (unsecured)" onChange={(e: any) => this.setState({loading: false, error: "", image: "", hint: e.target.value})} />
            <br />
            <br />
            <TextField textarea fullwidth label="Message (secured)" onChange={(e: any) => this.setState({loading: false, error: "", image: "", message: e.target.value})} />
            <br />
            <br />
            <TextField fullwidth label="Password (16 character minimum)" onChange={(e: any) => this.setState({loading: false, error: "", image: "", password: e.target.value})} />
            <br />
            <br />
            <Button onClick={() => this.generateQRCodeImage()}>Generate</Button>
            <br />
            <br />
            {progress}
            <img src={this.state.image} />
            <Typography use="overline">{this.state.error}</Typography>
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
            <TextField fullwidth label={metadata.hint} onChange={(e: any) => this.setState({loading: false, error: "", message: "", password: e.target.value})} />
            <br />
            <br />
            <Button onClick={() => this.decodeQRCodeURL()}>Decrypt</Button>
            <br />
            <br />
            {progress}
            <Typography use="body1">{this.state.message}</Typography>
            <Typography use="overline">{this.state.error}</Typography>
          </Cell>
        </Row>
      </Grid>;
    }
    /* BESPOKE END <<render>> */
  }

  /* BESPOKE START <<implementation>> */
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
        onCompleted: (response: ContentGenerateQRCodeImageMutationResponse): void => {
          this.setState({
            image: response.generateQRCodeImage.data,
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
        onCompleted: (response: ContentDecodeQRCodeURLMutationResponse): void => {
          this.setState({
            message: response.decodeQRCodeURL.message,
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
  /* BESPOKE END <<implementation>> */
}

export { _Content as Content };
