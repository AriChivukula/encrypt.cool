/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type ContentQuery$ref = any;
type TopBarQuery$ref = any;
export type RootQueryVariables = {};
export type RootQueryResponse = {
    readonly " $fragmentRefs": ContentQuery$ref & TopBarQuery$ref;
};
export type RootQuery = {
    readonly response: RootQueryResponse;
    readonly variables: RootQueryVariables;
};



/*
query RootQuery {
  ...ContentQuery
  ...TopBarQuery
}

fragment ContentQuery on Query {
  me {
    id
  }
}

fragment TopBarQuery on Query {
  me {
    id
  }
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "operationKind": "query",
  "name": "RootQuery",
  "id": null,
  "text": "query RootQuery {\n  ...ContentQuery\n  ...TopBarQuery\n}\n\nfragment ContentQuery on Query {\n  me {\n    id\n  }\n}\n\nfragment TopBarQuery on Query {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RootQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ContentQuery",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "TopBarQuery",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RootQuery",
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
  }
};
(node as any).hash = '898a746646efa3681f41bb5bd6931460';
export default node;
