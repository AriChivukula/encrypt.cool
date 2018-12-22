/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/website.ts::Content>>
 * BESPOKE<<imports, render, implementation>>
 * SIGNED<<EPKHcY/ruhFuvY0+EvoKqN1QLmmmZF4u4zM4FvhttKcFVCgjQmhKcIaAD+ZtFB3NTEE8TBaAS/pJDqALOQXFJg==>>
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
  goto,
} from "../utility";
/* BESPOKE END <<imports>> */

export interface IContentProps {
  environment: Environment;
}

class _Content extends React.Component<IContentProps> {

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
  /* BESPOKE END <<implementation>> */
}

export { _Content as Content };
