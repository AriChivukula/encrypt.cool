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
    const metaData = encryptContent("HINT", "MESSAGE", "PASSWORDPASSWORDPASSWORDPASSWORD", "192.168.0.1");
    chai.expect(metaData.data).to.equal("fff8af0670ad227d52a24e1435d610a1186f2a15a43069c3398d9dfb40ee590c32ce65a21d81f77d6460cb9f673e4c314gRD8FwV6OybVQu9XyZ2gLOBFNAiwwzbqTF9/IrYmOpbcacFBzBrjHCt54cvSzz8q0SlyqroiZLrXujXPTvdkdMH8p4eX1NGweOH2+WMn0d0Eajo5jODSKL25/W+hVww");
    chai.expect(metaData.hash).to.equal("d2323d29e3f460a525c9827d9fdc0fbc1eab896857c22a2f952277504be55a9e");
    chai.expect(metaData.hint).to.equal("HINT");
    chai.expect(metaData.version).to.equal(0);
  },
);
/* BESPOKE END <<custom>> */
