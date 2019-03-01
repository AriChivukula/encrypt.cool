/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/server.ts::encrypt>>
 * BESPOKE<<custom>>
 * SIGNED<<J9FCy5Eb9w0afcgAaRFGr3gxQY8sbFhMkYnvR4PLOLGutLf1jQN3nT49Pgi/UgT8KqpaBJanNZoyEo3inVMTZQ==>>
 */

/* BESPOKE START <<custom>> */

import Encrypter from "simple-encryptor";
import vault from "node-vault";

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

async function genVaultClient(
): Promise<vault.client> {
  return vault({
    apiVersion: 'v1',
    endpoint: "https://nomoresecrets.chivuku.la:443",
    token: process.env.TF_VAR_VAULT_TOKEN,
  });
}

export async function encryptContent(hint: string, message: string, password: string, ip: string): Promise<ECMetaData> {
  const client = await genVaultClient();
  if (password.length < 16) {
    throw new Error("BAD_PASSWORD");
  }
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
  const hmac_password = await client.read("encrypt.cool/data/TF_VAR_HMAC_PASSWORD");
  metaData.hash = Encrypter(hmac_password[""]).hmac(JSON.stringify(metaData));
  return metaData;
}

export async function decryptContent(metaData: ECMetaData, password: string): Promise<ECData> {
  const client = await genVaultClient();
  if (metaData.version !== 0) {
    throw new Error("BAD_VERSION");
  }
  const hash = metaData.hash;
  metaData.hash = "";
  const hmac_password = await client.read("encrypt.cool/data/TF_VAR_HMAC_PASSWORD");
  if (Encrypter(hmac_password[""]).hmac(JSON.stringify(metaData)) !== hash) {
    throw new Error("BAD_HASH");
  }
  const data = Encrypter(password).decrypt(metaData.data);
  if (data === null) {
    throw new Error("BAD_PASSWORD");
  }
  return data
}

/* BESPOKE END <<custom>> */
