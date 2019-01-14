/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/server.ts::qr>>
 * BESPOKE<<custom>>
 * SIGNED<<J9FCy5Eb9w0afcgAaRFGr3gxQY8sbFhMkYnvR4PLOLGutLf1jQN3nT49Pgi/UgT8KqpaBJanNZoyEo3inVMTZQ==>>
 */

/* BESPOKE START <<custom>> */

import {
  toDataURL,
} from "qrcode";
import sharp from "sharp";

import {
  decryptContent,
  encryptContent,
  ECData,
} from "./encrypt";

export const URI_PREFIX = "https://encrypt.cool/?metadata=";

export async function encodeQR(hint: string, message: string, password: string, ip: string): Promise<string> {
  const metaData = await encryptContent(hint, message, password, ip);
  const url = URI_PREFIX + encodeURIComponent(JSON.stringify(metaData));
  return await toDataURL(url);
}

export function decodeQR(url: string, password: string): ECData {
  const content = url.replace(URI_PREFIX, "");
  const metaData = JSON.parse(decodeURIComponent(content));
  return decryptContent(metaData, password);
}

/* BESPOKE END <<custom>> */
