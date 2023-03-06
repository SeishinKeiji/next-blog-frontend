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
      ".milkdown": {
        px: 2,
        py: 4,
        border: "1px",
        borderColor: "gray.200",
        bg: "gray.400",
        rounded: "lg",
      },
      ".editor": {
        marginX: "auto",
      },
    },
  })
);

export default theme;
