import * as React from "react";

import * as cookie from "js-cookie";

import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from "@material/react-top-app-bar";
import MaterialIcon from "@material/react-material-icon";
import {
  Url,
} from "url";

import {
  goto,
} from "../utility";

export interface ITopBarProps {
}

class _TopBar extends React.Component<ITopBarProps> {

  public render(
  ): JSX.Element {
    return (
      <>
        <TopAppBar fixed>
          <TopAppBarRow>
            <TopAppBarSection align='start'>
              <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon
                  onClick={(): void => goto("https://github.com/AriChivukula/encrypt.cool/")}
                  icon="code"
                />
              </TopAppBarIcon>
              <TopAppBarTitle>{document.title}</TopAppBarTitle>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
      </>
    );
  }
}

export { _TopBar as TopBar };
