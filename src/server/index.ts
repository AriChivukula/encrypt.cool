import "core-js/stable";
import "regenerator-runtime/runtime";

import lambda from "aws-serverless-express";
import {
  json,
  urlencoded,
} from "body-parser";
import cors from "cors";
import express from "express";
import bearer from "express-bearer-token";
import helmet from "helmet";

import {
  graphQL,
} from "./server";

const app: express.Express = express();

let didSetup: boolean = false;

app.use(cors(), helmet(), bearer(), json(), urlencoded({ extended: true }));

app.use((req: express.Request, res: express.Response, next: () => void): void => {
  if (!didSetup) {
    didSetup = true;
  }
  next();
});

app.use("/graphql", graphQL);

export function handler(
  event: object,
  context: object,
): void {
  lambda.proxy(
    lambda.createServer(
      app,
      undefined,
      [
        "application/octet-stream",
        "font/eot",
        "font/opentype",
        "font/otf",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
      ],
    ),
    event,
    // @ts-ignore
    context,
  );
}
