/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/website.ts::Content>>
 * BESPOKE<<imports, state, render, implementation>>
 * SIGNED<<wHhga/f8WWA0n0LvoEPWacDgIkXwsiQa3HpbQS4EBpm/wH3Wm96bnKYkL1IiHONxHrK46l7WhFbt3eRMrBqyXg==>>
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
} from 'rmwc/textfield';
import {
  Button,
} from 'rmwc/button';
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
      /* BESPOKE END <<state>> */
    };
  }

  public render(
  ): JSX.Element {
    /* BESPOKE START <<render>> */
    return <Grid>
      <GridCell span={12}>
        <TextField label="Hint (unsecured)" onChange={(event) => this.onFieldChange("hint", e.target.value)} />
        <TextField label="Message (secured)" onChange={(event) => this.onFieldChange("message", e.target.value)} />
        <TextField label="Password (16 chars)" onChange={(event) => this.onFieldChange("password", e.target.value)} />
        <Button onclick={() => this.generateQRCodeImage()}>Generate</Button>
      </GridCell>
    </Grid>;
    /* BESPOKE END <<render>> */
  }

  /* BESPOKE START <<implementation>> */
  private onFieldChange(field: string, value: string) {
    const newState = {};
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
