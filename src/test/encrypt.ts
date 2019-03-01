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
  decryptContent,
  encryptContent,
} from "../server/encrypt";

it(
  "encryptContent",
  async (): Promise<void> => {
    const metaData = await encryptContent("HINT", "MESSAGE", "PASSWORDPASSWORDPASSWORDPASSWORD", "192.168.0.1");
    chai.expect(metaData.data).to.not.be.empty;
    chai.expect(metaData.hash).to.not.be.empty;
    chai.expect(metaData.hint).to.equal("HINT");
    chai.expect(metaData.version).to.equal(0);
  },
);

it(
  "encryptContentFailure",
  async (): Promise<void> => {
    chai.expect(async () => await encryptContent("HINT", "MESSAGE", "SHORT_PASSWORD", "192.168.0.1")).to.throw("BAD_PASSWORD");
  },
);

it(
  "decryptContent",
  async (): Promise<void> => {
    const password = "PASSWORDPASSWORDPASSWORDPASSWORD";
    const metaData = await encryptContent("HINT", "MESSAGE", password, "192.168.0.1");
    const data = await decryptContent(metaData, password);
    chai.expect(data.created).to.not.be.empty;
    chai.expect(data.ip).to.equal("192.168.0.1");
    chai.expect(data.message).to.equal("MESSAGE");
  },
);

it(
  "decryptContentFailure",
  async (): Promise<void> => {
    const metaData = await encryptContent("HINT", "MESSAGE", "PASSWORDPASSWORDPASSWORDPASSWORD", "192.168.0.1");
    chai.expect(async () => await decryptContent(metaData, "BAD_PASSWORD_BAD_PASSWORD_BAD_PASSWORD_")).to.throw("BAD_PASSWORD");
    metaData.hash = "BADHASH";
    chai.expect(async () => await decryptContent(metaData, "PASSWORDPASSWORDPASSWORDPASSWORD")).to.throw("BAD_HASH");
    metaData.version = 1;
    chai.expect(async () => await decryptContent(metaData, "PASSWORDPASSWORDPASSWORDPASSWORD")).to.throw("BAD_VERSION");
  },
);
/* BESPOKE END <<custom>> */
