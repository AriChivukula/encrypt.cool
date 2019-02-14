/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type DecodeQRCodeURLInput = {
    readonly url: string;
    readonly password: string;
};
export type ContentDecodeQRCodeURLMutationVariables = {
    readonly input?: DecodeQRCodeURLInput | null;
};
export type ContentDecodeQRCodeURLMutationResponse = {
    readonly decodeQRCodeURL: {
        readonly message: string;
    };
};
export type ContentDecodeQRCodeURLMutation = {
    readonly response: ContentDecodeQRCodeURLMutationResponse;
    readonly variables: ContentDecodeQRCodeURLMutationVariables;
};



/*
mutation ContentDecodeQRCodeURLMutation(
  $input: DecodeQRCodeURLInput
) {
  decodeQRCodeURL(input: $input) {
    message
  }
}
*/
// @ts-ignore
const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DecodeQRCodeURLInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "decodeQRCodeURL",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "DecodeQRCodeURLInput"
      }
    ],
    "concreteType": "DecodeQRCodeURLOutput",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "message",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ContentDecodeQRCodeURLMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ContentDecodeQRCodeURLMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ContentDecodeQRCodeURLMutation",
    "id": null,
    "text": "mutation ContentDecodeQRCodeURLMutation(\n  $input: DecodeQRCodeURLInput\n) {\n  decodeQRCodeURL(input: $input) {\n    message\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'b938a8c1d2c06cfdb190b625c337354c';
export default node;
