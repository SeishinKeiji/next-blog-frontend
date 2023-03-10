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
      ".milkdown img.emoji": {
        w: "1em",
        h: "1em",
        m: 0,
        display: "inline-block",
        mr: "1px",
        verticalAlign: "text-top",
      },
      ".milkdown li p": {
        lineHeight: "1.5rem",
        m: 0,
      },
      ".milkdown li::after": {
        all: "unset !important",
      },
      ".milkdown ul, ol": {
        p: 0,
        ml: "1rem",
      },
      ".milkdown li p + p": {
        mt: "0.5rem",
      },
      ".milkdown > .ProseMirror-focused": {
        _focus: { outline: "none" },
      },
      ".milkdown": {
        mx: 55,
      },
    },
  })
);

export default theme;
