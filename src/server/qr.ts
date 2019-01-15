/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/server.ts::qr>>
 * BESPOKE<<custom>>
 * SIGNED<<J9FCy5Eb9w0afcgAaRFGr3gxQY8sbFhMkYnvR4PLOLGutLf1jQN3nT49Pgi/UgT8KqpaBJanNZoyEo3inVMTZQ==>>
 */

/* BESPOKE START <<custom>> */

import {
  toString,
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
  let data_img = await toString(url);
  let color_img = await sharp({
    create: {
      width: 370,
      height: 370,
      channels: 3,
      background: {
        r: data_img.charCodeAt(0) % 256,
        g: data_img.charCodeAt(1) % 256,
        b: data_img.charCodeAt(2) % 256,
      },
    },
  })
    .png()
    .toBuffer();
  let final_img = await sharp({
    create: {
      width: 400,
      height: 400,
      channels: 3,
      background: {
        r: 255,
        g: 255,
        b: 255,
      },
    },
  })
    .overlayWith(
      color_img,
      {
        top: 15,
        left: 15,
      },
    )
    .overlayWith(
      Buffer.from(data_img, 'utf-8');,
      {
        top: 30,
        left: 30,
      },
    )
    .png()
    .toBuffer();
  return "data:image/png;base64," + final_img.toString('base64');
}

export function decodeQR(url: string, password: string): ECData {
  const content = url.replace(URI_PREFIX, "");
  const metaData = JSON.parse(decodeURIComponent(content));
  return decryptContent(metaData, password);
}

/* BESPOKE END <<custom>> */
