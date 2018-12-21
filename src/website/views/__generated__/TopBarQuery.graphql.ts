/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type TopBarQuery$ref = any;
export type TopBarQuery = {
    readonly me: ({
        readonly id: string;
    }) | null;
    readonly " $refType": TopBarQuery$ref;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "TopBarQuery",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "me",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = '0f61080b9cf2ff4b537d9df6958fe705';
export default node;
