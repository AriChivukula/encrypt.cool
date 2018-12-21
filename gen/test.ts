import {
  Bespoke,
  Module,
} from "typescriptase";

export const encrypt: Module = Module.new({
  content: [
    Bespoke.new({
      name: "custom",
    }),
  ],
  destination: "src/test/encrypt.ts",
});
