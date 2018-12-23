/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type GenerateQRCodeImageInput = {
    readonly hint: string;
    readonly message: string;
    readonly password: string;
};
export type ContentGenerateQRCodeImageMutationVariables = {
    readonly input?: GenerateQRCodeImageInput | null;
};
export type ContentGenerateQRCodeImageMutationResponse = {
    readonly generateQRCodeImage: {
        readonly data: string;
    };
};
export type ContentGenerateQRCodeImageMutation = {
    readonly response: ContentGenerateQRCodeImageMutationResponse;
    readonly variables: ContentGenerateQRCodeImageMutationVariables;
};



/*
mutation ContentGenerateQRCodeImageMutation(
  $input: GenerateQRCodeImageInput
) {
  generateQRCodeImage(input: $input) {
    data
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "GenerateQRCodeImageInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "generateQRCodeImage",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "GenerateQRCodeImageInput"
      }
    ],
    "concreteType": "GenerateQRCodeImageOutput",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "data",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "ContentGenerateQRCodeImageMutation",
  "id": null,
  "text": "mutation ContentGenerateQRCodeImageMutation(\n  $input: GenerateQRCodeImageInput\n) {\n  generateQRCodeImage(input: $input) {\n    data\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ContentGenerateQRCodeImageMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "ContentGenerateQRCodeImageMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node as any).hash = '4b959533d49a84c6ffb761be19733b19';
export default node;
