/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/website.ts::Content>>
 * BESPOKE<<imports, render, implementation, relay>>
 * SIGNED<<0LZX0PmRN5L/T0xOoPH2438jXkgZ4eFMq+XtZ/pyVuEFIyfNW/jjsRGPiF+eSVU1UPvW03SLl2ce1lV48AiGHw==>>
 */

import * as React from "react";
import {
  createFragmentContainer,
  graphql,
  MappedFragmentProps,
  RemoveRelayProp,
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
  data: ContentQuery;
}

class __Content extends React.Component<IContentProps> {

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

const _Content: React.ComponentType<MappedFragmentProps<RemoveRelayProp<IContentProps>>> = createFragmentContainer(
  __Content,
  /* BESPOKE START <<relay>> */
  graphql`
    fragment ContentQuery on Query {
      me {
        id
      }
    }
  `,
  /* BESPOKE END <<relay>> */
);

export { _Content as Content };
