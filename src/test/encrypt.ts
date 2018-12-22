/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/test.ts::encrypt>>
 * BESPOKE<<custom>>
 * SIGNED<<J9FCy5Eb9w0afcgAaRFGr3gxQY8sbFhMkYnvR4PLOLGutLf1jQN3nT49Pgi/UgT8KqpaBJanNZoyEo3inVMTZQ==>>
 */

/* BESPOKE START <<custom>> */
import "mocha";

import * as chai from "chai";

import {
  encryptContent,
  ECMetaData,
} from "../server/encrypt";

it(
  "encryptContent",
  async (): Promise<void> => {
    const metaData = encryptContent("HINT", "MESSAGE", "PASSWORDPASSWORDPASSWORDPASSWORD", "192.168.0.1")
    chai.expect(metaData.hint).to.equal("HINT");
    chai.expect(metaData.version).to.equal(0);
    chai.expect(metaData.hash).to.equal("");
  },
);
/* BESPOKE END <<custom>> */
