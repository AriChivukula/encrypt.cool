/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/website.ts::Page>>
 * BESPOKE<<imports, render, implementation>>
 * SIGNED<<70OzGx3k9jU70J1TfE8zTYk+sMEbqpfVGh7Q5s3YjBT7d+nRLVvFCwXlAPGOupx9aarIQGahvyelLV6TY0shog==>>
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
}

class _Page extends React.Component<IPageProps> {

  public render(
  ): JSX.Element {
    /* BESPOKE START <<render>> */
    // @ts-ignore
    const TopBarJSX = <TopBar {...this.props} />;
    // @ts-ignore
    const ContentJSX = <Content {...this.props} />;
    return (
      <>
        {TopBarJSX}
        {ContentJSX}
      </>
    );
    /* BESPOKE END <<render>> */
  }

  /* BESPOKE START <<implementation>> */
  /* BESPOKE END <<implementation>> */
}

export { _Page as Page };
