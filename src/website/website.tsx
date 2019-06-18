import * as cookie from "js-cookie";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  RelayNetworkLayer,
  urlMiddleware,
// @ts-ignore
} from "react-relay-network-modern";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from "relay-runtime";

import {
  FourOhFour,
} from "./views/FourOhFour";
import {
  Root,
} from "./views/Root";

export function render(
  apiURL: string,
): void {
  const environment: Environment = new Environment({
    network: new RelayNetworkLayer([
      urlMiddleware({ url: apiURL }),
    ]) as Network,
    store: new Store(new RecordSource()),
  });
  const renderer: () => JSX.Element = (): JSX.Element => <Root environment={environment} />;
  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={renderer} />
        <Route path="/index.html" render={renderer} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>,
    document.getElementById("root"),
  );
}
