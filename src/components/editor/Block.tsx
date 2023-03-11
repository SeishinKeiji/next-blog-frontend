import { Menu, MenuButton, IconButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { commandsCtx } from "@milkdown/core";
import { BlockProvider } from "@milkdown/plugin-block";
import { turnIntoTextCommand, wrapInHeadingCommand } from "@milkdown/preset-commonmark";
import { useInstance } from "@milkdown/react";
import { usePluginViewContext } from "@prosemirror-adapter/react";
import { useEffect, useRef, useState } from "react";
import { BiDotsVertical } from "react-icons/bi";

export const Block = () => {
  const { view } = usePluginViewContext();
  const blockProvider = useRef<BlockProvider>();
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [loading, get] = useInstance();

  useEffect(() => {
    if (element && !loading) {
      blockProvider.current ??= new BlockProvider({
        ctx: get().ctx,
        content: element,
      });
    }

    return () => {
      blockProvider.current?.destroy();
    };
  }, [loading, get, element]);

  useEffect(() => {
    blockProvider.current?.update(view);
  });

  return (
    <Box display={"none"}>
      <Box position={"relative"} top={-2} ref={setElement}>
      <Menu >
        <MenuButton as={IconButton} aria-label="Options" icon={<BiDotsVertical />} variant="outline" />
        <MenuList>
          <MenuItem
            onClick={() => {
              if (loading) return;

              const commands = get().ctx.get(commandsCtx);
              commands.call(wrapInHeadingCommand.key, 1);
            }}
          >
            Heading 1
          </MenuItem>
          <MenuItem
            onClick={() => {
              if (loading) return;

              const commands = get().ctx.get(commandsCtx);
              commands.call(wrapInHeadingCommand.key, 2);
            }}
          >
            Heading 2
          </MenuItem>
          <MenuItem
            onClick={() => {
              if (loading) return;

              const commands = get().ctx.get(commandsCtx);
              commands.call(wrapInHeadingCommand.key, 3);
            }}
          >
            Heading 3
          </MenuItem>
          <MenuItem
            onClick={() => {
              if (loading) return;

              const commands = get().ctx.get(commandsCtx);
              commands.call(turnIntoTextCommand.key);
            }}
          >
            Text
          </MenuItem>
        </MenuList>
      </Menu>
      </Box>
    </Box>
  );
};
