/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/website.ts::TopBar>>
 * BESPOKE<<imports, render, implementation>>
 * SIGNED<<kHq6yzfWokPWNCMfURWlsAo7OaNhM+PwwwMO6Te6t8SJLQwaTPwqNT1Wxn/7796cljUiKz+Kte+BHsjRUX9YnQ==>>
 */

import * as React from "react";

/* BESPOKE START <<imports>> */
import * as cookie from "js-cookie";

import TopAppBar, {TopAppBarFixedAdjust} from "@material/react-top-app-bar";
import MaterialIcon from "@material/react-material-icon";
import {
  Url,
} from "url";

import {
  goto,
} from "../utility";
/* BESPOKE END <<imports>> */

export interface ITopBarProps {
}

class _TopBar extends React.Component<ITopBarProps> {

  public render(
  ): JSX.Element {
    /* BESPOKE START <<render>> */
    return (
      <>
        <TopAppBar
          title={document.title}
          fixed={true}
          navigationIcon={<MaterialIcon
            onClick={(): void => goto("https://github.com/AriChivukula/encrypt.cool/")}
            icon="code"
          />}
        />
        <TopAppBarFixedAdjust />
      </>
    );
    /* BESPOKE END <<render>> */
  }

  /* BESPOKE START <<implementation>> */
  /* BESPOKE END <<implementation>> */
}

export { _TopBar as TopBar };
