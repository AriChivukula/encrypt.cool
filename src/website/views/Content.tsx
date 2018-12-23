/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/website.ts::Content>>
 * BESPOKE<<imports, state, render, implementation>>
 * SIGNED<<1lWZ10wS/j/STV53n5L0Uj6jfQRGvZZ198AklErYyuBVG17o1Kg3YqpOvTAnTI6ZH8fcInNczNEwtel2FsbrGw==>>
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
  Environment,
} from "relay-runtime";

import {
  goto,
} from "../utility";
/* BESPOKE END <<imports>> */

export interface IContentProps {
  environment: Environment;
}

export interface IContentState {
  hint?: string;
  message?: string;
  password?: string;
}

class _Content extends React.Component<IContentProps, IContentState> {

  public constructor(
    props: IContentProps,
  ) {
    super(props);
    this.state = {
      /* BESPOKE START <<state>> */
      /* BESPOKE END <<state>> */
    };
  }

  public render(
  ): JSX.Element {
    /* BESPOKE START <<render>> */
    return (
      <Grid>
        <GridCell span={12}>
          <Typography use="headline2" tag="div">
            Encrypt cool things
          </Typography>
        </GridCell>
      </Grid>
    );
    /* BESPOKE END <<render>> */
  }

  /* BESPOKE START <<implementation>> */
  private generateQRCodeImage(
    hint: string,
    message: string,
    password: string,
  ): void {
      // TODO
  }
  /* BESPOKE END <<implementation>> */
}

export { _Content as Content };
