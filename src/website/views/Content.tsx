/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/website.ts::Content>>
 * BESPOKE<<imports, state, render, implementation>>
 * SIGNED<<LMNHinarMteTDziIN3fEI/7GIV7199EwszIOAO4HcFeEH0bC+3yCvQu+loP4aIq/OjEhqIUSUEaDF4fJ4tGqTA==>>
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
      /* BESPOKE END <<state>> */
    };
  }

  public render(
  ): JSX.Element {
    /* BESPOKE START <<render>> */
    if (window.location.search === "")
      return <Grid>
        <GridCell span={12}>
          <TextField label="Hint (unsecured)" onChange={(e: any) => this.onFieldChange("hint", e.target.value)} />
          <br />
          <TextField label="Message (secured)" onChange={(e: any) => this.onFieldChange("message", e.target.value)} />
          <br />
          <TextField label="Password (16 chars)" onChange={(e: any) => this.onFieldChange("password", e.target.value)} />
          <br />
          <Button onClick={() => this.generateQRCodeImage()}>Generate</Button>
          <br />
          <img src={this.state.image} />
        </GridCell>
      </Grid>;
    } else {
      const encodedMetadata = window.location.search.replace("?metadata=", "");
      const stringMetadata = decodeURIComponent(encodedMetadata);
      const metadata = JSON.parse(stringMetadata);
      return <Grid>
        <GridCell span={12}>
          <TextField label={metadata.hint} onChange={(e: any) => this.setState({password: e.target.value})} />
          <br />
          {this.state.message}
        </GridCell>
      </Grid>;
    }
    /* BESPOKE END <<render>> */
  }

  /* BESPOKE START <<implementation>> */
  private onFieldChange(field: string, value: string) {
    const newState = {
      image: "",
    };
    // @ts-ignore
    newState[field] = value;
    this.setState(newState);
  }

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
        onCompleted: (response: ContentGenerateQRCodeImageMutationResponse, errors: Error[]): void => {
          this.setState({image: response.generateQRCodeImage.data});
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
  /* BESPOKE END <<implementation>> */
}

export { _Content as Content };
