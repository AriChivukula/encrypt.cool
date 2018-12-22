/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/server.ts::encrypt>>
 * BESPOKE<<custom>>
 * SIGNED<<J9FCy5Eb9w0afcgAaRFGr3gxQY8sbFhMkYnvR4PLOLGutLf1jQN3nT49Pgi/UgT8KqpaBJanNZoyEo3inVMTZQ==>>
 */

/* BESPOKE START <<custom>> */

import Encrypter from "simple-encryptor";

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

const HMAC_PASSWORD = "0123456789ABCDEF";

export function encryptContent(hint: string, message: string, password: string, ip: string): ECMetaData {
  const data = {
    created: (new Date()).toUTCString(),
    ip,
    message,
  };
  const metaData = {
    data: Encrypter(password).encrypt(data),
    hash: "",
    hint,
    version: 0,
  };
  metaData.hash = Encrypter(HMAC_PASSWORD).hmac(JSON.stringify(metaData));
  return metaData;
}

export function decryptContent(metaData: ECMetaData, password: string): ECData {
  if (metaData.version !== 0) {
    throw new Error("BAD_VERSION");
  }
  const hash = metaData.hash;
  metaData.hash = "";
  if (Encrypter(HMAC_PASSWORD).hmac(JSON.stringify(metaData)) !== hash) {
    throw new Error("BAD_HASH");
  }
  return Encrypter(password).decrypt(metaData.data)
}

/* BESPOKE END <<custom>> */
