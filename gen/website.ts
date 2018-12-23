import { Bespoke, ERelayType, Module, React, Type } from "typescriptase";

export const index: Module = Module.new({
  content: [
    Bespoke.new({
      name: "custom",
    }),
  ],
  destination: "src/website/index.tsx",
});

export const utility: Module = Module.new({
  content: [
    Bespoke.new({
      name: "custom",
    }),
  ],
  destination: "src/website/utility.tsx",
});

export const Content: Module = React({
  destination: "src/website/views/Content.tsx",
  name: "Content",
  props: [
    Type.Required.new({
      name: "environment",
      type: "Environment",
    }),
  ],
  relayMutation: true,
  state: [
    Type.Optional.new({
      name: "hint",
      type: "string",
    }),
    Type.Optional.new({
      name: "message",
      type: "string",
    }),
    Type.Optional.new({
      name: "password",
      type: "string",
    }),
    Type.Optional.new({
      name: "image",
      type: "string",
    }),
    Type.Optional.new({
      name: "url",
      type: "string",
    }),
  ],
});

export const FourOhFour: Module = React({
  destination: "src/website/views/FourOhFour.tsx",
  name: "FourOhFour",
});

export const Page: Module = React({
  destination: "src/website/views/Page.tsx",
  name: "Page",
  props: [
    Type.Required.new({
      name: "environment",
      type: "Environment",
    }),
  ],
});

export const Root: Module = React({
  destination: "src/website/views/Root.tsx",
  name: "Root",
  props: [
    Type.Required.new({
      name: "environment",
      type: "Environment",
    }),
  ],
});

export const TopBar: Module = React({
  destination: "src/website/views/TopBar.tsx",
  name: "TopBar",
  props: [],
});

export const website: Module = Module.new({
  content: [
    Bespoke.new({
      name: "custom",
    }),
  ],
  destination: "src/website/website.tsx",
});
