import { Box, Checkbox, HStack, Text } from "@chakra-ui/react";
import { useNodeViewContext } from "@prosemirror-adapter/react";
import type { FC } from "react";

export const ListItem: FC = () => {
  const { contentRef, node, setAttrs, selected } = useNodeViewContext();
  const { attrs } = node;
  const checked = attrs?.checked;
  const isBullet = attrs?.listType === "bullet";

  return (
    <HStack as="li" alignItems="start" gap={2} className={selected ? "ProseMirror-selectednode" : ""}>
      <HStack as="span" h="1.5rem" alignItems="center">
        {checked != null ? (
          <Checkbox onChange={() => setAttrs({ checked: !checked })} type="checkbox" defaultChecked={checked} />
        ) : isBullet ? (
          <Box bg="gray.500" as={"span"} h="0.5rem" w="0.5rem" rounded="full" />
        ) : (
          <Text as={"span"}>{attrs?.label}</Text>
        )}
      </HStack>
      <Box as="div" minW={0} ref={contentRef} />
    </HStack>
  );
};
