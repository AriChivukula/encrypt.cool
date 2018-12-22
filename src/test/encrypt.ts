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
    const metaData = encryptContent("HINT", "MESSAGE", "PASSWORDPASSWORDPASSWORDPASSWORD", "192.168.0.1");
    chai.expect(metaData.data).to.equal("d732306867bcee96e7fb3b1c0c636b05fa3ee1474eba3d4375eb4bda7fa6c66e16d1138846effceb389290f86f66e380cTSWDBaDf4vtW4mcdRAMFZYK5E16/tDizJ/GoZAM9wu3tutnriWs3i7ebq1GwBnUv11m3T5JfvPXiFNBYenXg2LWpFO0US9+JFcQfDAs0+w6yMDTY3KHyBh6Qi0St5pc");
    chai.expect(metaData.hash).to.equal("d2323d29e3f460a525c9827d9fdc0fbc1eab896857c22a2f952277504be55a9e");
    chai.expect(metaData.hint).to.equal("HINT");
    chai.expect(metaData.version).to.equal(0);
  },
);

it(
  "encryptContentFailure",
  async (): Promise<void> => {
    chai.expect(() => encryptContent("HINT", "MESSAGE", "SHORT_PASSWORD", "192.168.0.1")).to.throw("BAD_PASSWORD");
  },
);

it(
  "decryptContent",
  async (): Promise<void> => {
    const password = "PASSWORDPASSWORDPASSWORDPASSWORD";
    const metaData = encryptContent("HINT", "MESSAGE", password, "192.168.0.1");
    const data = decryptContent(metaData, password);
    chai.expect(data.created).should.not.be.empty;
    chai.expect(data.ip).to.equal("192.168.0.1");
    chai.expect(data.message).to.equal("MESSAGE");
  },
);

it(
  "decryptContentFailure",
  async (): Promise<void> => {
    const metaData = encryptContent("HINT", "MESSAGE", "PASSWORDPASSWORDPASSWORDPASSWORD", "192.168.0.1");
    chai.expect(() => decryptContent(metaData, "BAD_PASSWORD_BAD_PASSWORD_BAD_PASSWORD_")).to.throw("BAD_PASSWORD");
    metaData.hash = "BADHASH";
    chai.expect(() => decryptContent(metaData, "PASSWORDPASSWORDPASSWORDPASSWORD")).to.throw("BAD_HASH");
    metaData.version = 1;
    chai.expect(() => decryptContent(metaData, "PASSWORDPASSWORDPASSWORDPASSWORD")).to.throw("BAD_VERSION");
  },
);
/* BESPOKE END <<custom>> */
