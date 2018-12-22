/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/server.ts::encrypt>>
 * BESPOKE<<custom>>
 * SIGNED<<J9FCy5Eb9w0afcgAaRFGr3gxQY8sbFhMkYnvR4PLOLGutLf1jQN3nT49Pgi/UgT8KqpaBJanNZoyEo3inVMTZQ==>>
 */

/* BESPOKE START <<custom>> */

import Encrypter from "simple-encryptor";
import {
  Request,
} from "express";
import {
  getClientIp,
} from "request-ip";

export type ECData = {
  created: string;
  ip: string;
  message: string;
}

export type ECMetaData = {
  data: string;
  hash: string;
  hint: string;
  version: number;
}

export function encryptContent(hint: string, message: string, password: string, request: Request): ECMetaData {
  const data = {
    created: (new Date()).toUTCString(),
    ip: getClientIp(request)
    message,
  };
  const encrypter = Encrypter(password);
  const metaData = {
    data: encrypter.encrypt(data),
    hash: "",
    hint,
    version: 0,
  };
  const hash = encryptor.hmac(metaData);
  metaData.hash = hash;
  return metaData;
}

/* BESPOKE END <<custom>> */
