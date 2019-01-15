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
export const IMG_PREFIX = "data:image/png;base64,";

export async function encodeQR(hint: string, message: string, password: string, ip: string): Promise<string> {
  const metaData = await encryptContent(hint, message, password, ip);
  const url = URI_PREFIX + encodeURIComponent(JSON.stringify(metaData));
  let data_url = await toDataURL(url);
  let data_img = Buffer.from(data_url.replace(IMG_PREFIX, ""), "base64");
  let white_img = await sharp({
    create: {
      width: 370,
      height: 370,
      channels: 3,
      background: {
        r: 255,
        g: 255,
        b: 255,
      },
    },
  })
    .png()
    .toBuffer();
  let color_img = await sharp({
    create: {
      width: 400,
      height: 400,
      channels: 3,
      background: {
        r: metaData.hash.charCodeAt(0) % 256,
        g: metaData.hash.charCodeAt(1) % 256,
        b: metaData.hash.charCodeAt(2) % 256,
      },
    },
  })
    .png()
    .toBuffer();
  let final_img = await sharp(color_img)
    .overlayWith(
      white_img,
      {
        top: 15,
        left: 15,
      },
    )
    .png()
    .toBuffer();
  final_img = await sharp(final_img)
    .overlayWith(
      data_img,
      {
        top: 30,
        left: 30,
      },
    )
    .png()
    .toBuffer();
  return IMG_PREFIX + final_img.toString('base64');
}

export function decodeQR(url: string, password: string): ECData {
  const content = url.replace(URI_PREFIX, "");
  const metaData = JSON.parse(decodeURIComponent(content));
  return decryptContent(metaData, password);
}

/* BESPOKE END <<custom>> */
