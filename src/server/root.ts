import {
  IncomingMessage,
  ServerResponse,
} from "http";
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
  req: IncomingMessage,
  res: ServerResponse,
): Promise<object> {
  return {
    dummy: async (): Promise<{ id: number }> => {
      return { id: 0 };
    },
    generateQRCodeImage: async ({ input }: { input: { hint: string, message: string, password: string } }): Promise<{ data: string }> => {
      const data = await encodeQR(input.hint, input.message, input.password, getClientIp(req));
      return { data };
    },
    decodeQRCodeURL: async ({ input }: { input: { url: string, password: string } }): Promise<{ message: string }> => {
      const data = await decodeQR(input.url, input.password);
      return { message: data.message };
    },
  };
}
