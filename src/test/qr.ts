/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/test.ts::qr>>
 * BESPOKE<<custom>>
 * SIGNED<<J9FCy5Eb9w0afcgAaRFGr3gxQY8sbFhMkYnvR4PLOLGutLf1jQN3nT49Pgi/UgT8KqpaBJanNZoyEo3inVMTZQ==>>
 */

/* BESPOKE START <<custom>> */
import "mocha";

import * as chai from "chai";


import {
  encryptContent,
} from "../server/encrypt";
import {
  encodeQR,
  decodeQR,
  URI_PREFIX,
} from "../server/qr";

it(
  "encodeQR",
  async (): Promise<void> => {
    const qr = await encodeQR("HINT", "MESSAGE", "PASSWORDPASSWORDPASSWORDPASSWORD", "192.168.0.1");
    chai.expect(qr).to.not.be.empty;
  },
);

it(
  "decodeQR",
  async (): Promise<void> => {
    const password = "PASSWORDPASSWORDPASSWORDPASSWORD";
    const metaData = await encryptContent("HINT", "MESSAGE", password, "192.168.0.1");
    const url = URI_PREFIX + encodeURIComponent(JSON.stringify(metaData));
    const data = await decodeQR(url, password);
    chai.expect(data.created).to.not.be.empty;
    chai.expect(data.ip).to.equal("192.168.0.1");
    chai.expect(data.message).to.equal("MESSAGE");
  },
);
/* BESPOKE END <<custom>> */
