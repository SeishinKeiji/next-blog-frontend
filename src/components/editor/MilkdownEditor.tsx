import { CmdKey } from "@milkdown/core";
import { Box, HStack, IconButton, VStack } from "@chakra-ui/react";
import { GrUndo, GrRedo, GrBold, GrItalic, GrStrikeThrough, GrOrderedList, GrUnorderedList, GrBlockQuote } from "react-icons/gr";
import { useMilkdownEditor } from "src/hooks/useEditor";
import { callCommand } from "@milkdown/utils";
import { Milkdown } from "@milkdown/react";
import { redoCommand, undoCommand } from "@milkdown/plugin-history";
import { toggleEmphasisCommand, toggleStrongCommand, wrapInBlockquoteCommand, wrapInBulletListCommand, wrapInOrderedListCommand } from "@milkdown/preset-commonmark";
import { toggleStrikethroughCommand } from "@milkdown/preset-gfm";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

const MilkdownEditor: React.FC = () => {
  const { get } = useMilkdownEditor("");

  function call<T>(command: CmdKey<T>, payload?: T) {
    return get()?.action(callCommand(command, payload));
  }

  return (
    <VStack h="33rem" alignItems="stretch">
      <Box bg="gray.50" p="3" rounded="md">
        <HStack>
          <IconButton icon={<GrUndo />} aria-label="Undo" onClick={() => call(undoCommand.key)} />
          <IconButton icon={<GrRedo />} aria-label="Redo" onClick={() => call(redoCommand.key)} />
          <IconButton icon={<GrBold />} aria-label="Bold" onClick={() => call(toggleStrongCommand.key)} />
          <IconButton icon={<GrItalic />} aria-label="Italic" onClick={() => call(toggleEmphasisCommand.key)} />
          <IconButton icon={<GrStrikeThrough />} aria-label="Strike Through" onClick={() => call(toggleStrikethroughCommand.key)} />
          <IconButton icon={<GrUnorderedList />} aria-label="Bulleted List" onClick={() => call(wrapInBulletListCommand.key)} />
          <IconButton icon={<GrOrderedList />} aria-label="Numbered List" onClick={() => call(wrapInOrderedListCommand.key)} />
          <IconButton icon={<GrBlockQuote />} aria-label="Quote" onClick={() => call(wrapInBlockquoteCommand.key)} />
        </HStack>
      </Box>
      <Prose bg="gray.50" h="full" overflow="auto" overscroll="none" shadow="xl" rounded="xl">
        <Milkdown />
      </Prose>
    </VStack>
  );
};

export default MilkdownEditor;
