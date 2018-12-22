/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/server.ts::root>>
 * BESPOKE<<custom>>
 * SIGNED<<J9FCy5Eb9w0afcgAaRFGr3gxQY8sbFhMkYnvR4PLOLGutLf1jQN3nT49Pgi/UgT8KqpaBJanNZoyEo3inVMTZQ==>>
 */

/* BESPOKE START <<custom>> */
import * as express from "express";
import {
  getClientIp,
} from "request-ip";

import {
  encodeQR,
  decodeQR,
} from "./qr";
import {
  genNullOnThrow,
} from "./utility";

export async function genRoot(
  req: express.Request,
  res: express.Response,
): Promise<object> {
  return {
    me: async (): Promise<object | null> => await genNullOnThrow(
      // @ts-ignore
      async (): Promise<object | null> => null,
    ),
    generateQRCodeImage: async ({ input }: { input: { hint: string, message: string, password: string } }): Promise<{ data: string }> => {
      const data = await encodeQR(hint, message, password, getClientIp(req));
      return { data };
    },
    decodeQRCodeURL: async ({ input }: { input: { url: string, password: string } }): Promise<{ message: string }> => {
      const data = decodeQR(url, password);
      return { message: data.message };
    },
  };
}
/* BESPOKE END <<custom>> */
