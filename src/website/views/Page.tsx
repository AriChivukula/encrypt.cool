/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/website.ts::Page>>
 * BESPOKE<<imports, render, implementation>>
 * SIGNED<<ED3FU4uBK8YRwXFiGLPvj4bzV5Er6yFlu/omFcZAvt8I4B/+qYZ3R7mHo2PfE+lWONecQVi+87DCgWGcoJlj8w==>>
 */

import * as React from "react";

/* BESPOKE START <<imports>> */
import {
  Url,
} from "url";

import {
  Content,
} from "./Content";
import {
  TopBar,
} from "./TopBar";
/* BESPOKE END <<imports>> */

export interface IPageProps {
  environment: Environment;
}

class _Page extends React.Component<IPageProps> {

  public render(
  ): JSX.Element {
    /* BESPOKE START <<render>> */
    return <>
        <TopBar />
        <Content environment={this.props.environment} />
    </>
    /* BESPOKE END <<render>> */
  }

  /* BESPOKE START <<implementation>> */
  /* BESPOKE END <<implementation>> */
}

export { _Page as Page };
