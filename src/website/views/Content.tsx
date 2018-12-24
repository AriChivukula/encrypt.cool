/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/website.ts::Content>>
 * BESPOKE<<imports, state, render, implementation>>
 * SIGNED<<RTu5bQ3dtFX/RwzQ78h0F/5iY864LU7GWxNK7dPZLnDJuzDT4UejJrti+tazGgOOhTqmH6HUiIfu9H3DwApXBw==>>
 */

import * as React from "react";
import {
  commitMutation,
  graphql,
} from "react-relay";

/* BESPOKE START <<imports>> */
import {
  Card,
  CardMedia,
  CardMediaContent,
  CardPrimaryAction,
} from "rmwc/Card";
import {
  Grid,
  GridCell,
} from "rmwc/Grid";
import {
  List,
  SimpleListItem,
} from "rmwc/List";
import {
  Typography,
} from "rmwc/Typography";
import {
  TextField,
} from '@rmwc/textfield';
import {
  Button,
} from '@rmwc/button';
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
      /* BESPOKE END <<state>> */
    };
  }

  public render(
  ): JSX.Element {
    /* BESPOKE START <<render>> */
    if (window.location.search === "") {
      return <Grid>
        <GridCell span={12}>
          <TextField fullwidth label="Hint (unsecured)" onChange={(e: any) => this.setState({error: "", image: "", hint: e.target.value})} />
          <br />
          <br />
          <TextField textarea fullwidth label="Message (secured)" onChange={(e: any) => this.setState({error: "", image: "", message: e.target.value})} />
          <br />
          <br />
          <TextField fullwidth label="Password (16 character minimum)" onChange={(e: any) => this.setState({error: "", image: "", password: e.target.value})} />
          <br />
          <br />
          <Button onClick={() => this.generateQRCodeImage()}>Generate</Button>
          <br />
          <br />
          <img src={this.state.image} />
          <Typography use="overline">{this.state.error}</Typography>
        </GridCell>
      </Grid>;
    } else {
      const encodedMetadata = window.location.search.replace("?metadata=", "");
      const stringMetadata = decodeURIComponent(encodedMetadata);
      const metadata = JSON.parse(stringMetadata);
      return <Grid>
        <GridCell span={12}>
          <TextField fullwidth label={metadata.hint} onChange={(e: any) => this.setState({error: "", message: "", password: e.target.value})} />
          <br />
          <br />
          <Button onClick={() => this.decodeQRCodeURL()}>Decrypt</Button>
          <br />
          <br />
          <Typography use="body1">{this.state.message}</Typography>
          <Typography use="overline">{this.state.error}</Typography>
        </GridCell>
      </Grid>;
    }
    /* BESPOKE END <<render>> */
  }

  /* BESPOKE START <<implementation>> */
  private generateQRCodeImage(): void {
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
          });
        },
        onError: (e: Error): void => {
          this.setState({
            image: "",
            error: e.message,
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
          });
        },
        onError: (e: Error): void => {
          this.setState({
            message: "",
            error: e.message,
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
