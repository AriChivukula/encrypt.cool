/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type ContentQuery$ref = any;
export type ContentQuery = {
    readonly me: ({
        readonly id: string;
    }) | null;
    readonly " $refType": ContentQuery$ref;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "ContentQuery",
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
(node as any).hash = '76855928ad23d434e0e98dee5630f81d';
export default node;
