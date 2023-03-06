import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

import { withProse } from "@nikolovlazar/chakra-ui-prose";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme(
  { config },
  withProse({
    baseStyle: {
      ".milkdown > .ProseMirror-focused": {
        _focus: { outline: "none" },
      },
    },
  })
);

export default theme;
