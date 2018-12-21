/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/website.ts::TopBar>>
 * BESPOKE<<imports, render, implementation, relay>>
 * SIGNED<<fznzArZlUDYhf0Irty2mNWYJZotkpUrVequEbyJVDOU4i1tWcgfuWA4eWq9G6nsed6pD2/mjQfdKfTHC+gIniw==>>
 */

import * as React from "react";
import {
  commitMutation,
  createFragmentContainer,
  graphql,
  MappedFragmentProps,
  RemoveRelayProp,
} from "react-relay";

/* BESPOKE START <<imports>> */
import * as cookie from "js-cookie";

import {
  SimpleTopAppBar,
  TopAppBarFixedAdjust,
} from "rmwc/TopAppBar";
import {
  Url,
} from "url";

import {
  goto,
} from "../utility";
import {
  TopBarLoginMutationResponse,
} from "./__generated__/TopBarLoginMutation.graphql";
import {
  TopBarLogoutMutationResponse,
} from "./__generated__/TopBarLogoutMutation.graphql";
import {
  TopBarQuery,
} from "./__generated__/TopBarQuery.graphql";
/* BESPOKE END <<imports>> */

export interface ITopBarProps {
  data: TopBarQuery;
}

class __TopBar extends React.Component<ITopBarProps> {

  public render(
  ): JSX.Element {
    /* BESPOKE START <<render>> */
    return (
      <>
        <SimpleTopAppBar
          title={document.title}
          fixed={true}
          navigationIcon={{
            onClick: (): void => goto("https://github.com/AriChivukula/encrypt.cool/"),
            icon: "code",
          }}
        />
        <TopAppBarFixedAdjust />
      </>
    );
    /* BESPOKE END <<render>> */
  }

  /* BESPOKE START <<implementation>> */
  /* BESPOKE END <<implementation>> */
}

const _TopBar: React.ComponentType<MappedFragmentProps<RemoveRelayProp<ITopBarProps>>> = createFragmentContainer(
  __TopBar,
  /* BESPOKE START <<relay>> */
  graphql`
    fragment TopBarQuery on Query {
      me {
        id
      }
    }
  `,
  /* BESPOKE END <<relay>> */
);

export { _TopBar as TopBar };
