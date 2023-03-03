import { Box, HStack, Input, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";

import { Suggestion } from "./suggestion";
import { useTag } from "src/context/tag.context";
import { stopNextEvent } from "lib/utility";

const StoredTags = () => {
  const { storedTags, handleDelete } = useTag();

  return (
    <HStack>
      {storedTags.map((name, index) => (
        <Tag size={"md"} key={index} variant="solid" colorScheme="teal">
          <TagLabel>#{name}</TagLabel>
          <TagCloseButton onClick={() => handleDelete(index)} />
        </Tag>
      ))}
    </HStack>
  );
};

const Tags = () => {
  const { setIsFocused, isFocused, query, setQuery, storedTags, suggestionTags, handleDelete, handleClick, allowedTags, selectedTag, setSelectedTag } = useTag();

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    switch (event.key) {
      case "Backspace":
        if (!query) {
          handleDelete(storedTags.length - 1);
          stopNextEvent(event);
        }
        break;
      case "ArrowUp":
        const prevIndex = (suggestionTags.indexOf(selectedTag) - 1 + suggestionTags.length) % suggestionTags.length;
        setSelectedTag(() => suggestionTags[prevIndex]);
        stopNextEvent(event);
        break;
      case "ArrowDown":
        const nextIndex = (suggestionTags.indexOf(selectedTag) + 1) % suggestionTags.length;
        setSelectedTag(() => suggestionTags[nextIndex]);
        stopNextEvent(event);
        break;
      case "Escape":
        handleBlur();
        break;
      case "Enter":
      case ",":
        const validTag = allowedTags.find((tag) => tag.includes(selectedTag));
        if (validTag) {
          handleClick(validTag);
          stopNextEvent(event);
        }
        break;
    }
  };

  return (
    <Box>
      <HStack p={1} px={3} spacing={0} bg="gray.100" rounded="xl" roundedBottom={suggestionTags.length || query.length ? "none" : "xl"}>
        <StoredTags />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          border="none"
          background="transparent"
          _focus={{ boxShadow: "none" }}
          placeholder={storedTags.length ? "Add another..." : "Add up to 4 tags..."}
        />
      </HStack>
      {isFocused && <Suggestion />}
    </Box>
  );
};

export default Tags;
