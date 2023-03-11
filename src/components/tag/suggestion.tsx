import { Box, VStack, Divider, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useTag } from "src/context/tag.context";

const maybeScrollSuggestionIntoView = (suggestionEl: HTMLLIElement, container: HTMLDivElement) => {
  const containerHeight = container.offsetHeight;
  const suggestionHeight = suggestionEl.offsetHeight;
  const relativeSuggestionTop = suggestionEl.offsetTop - container.scrollTop;

  if (relativeSuggestionTop + suggestionHeight >= containerHeight) {
    container.scrollTop += relativeSuggestionTop - containerHeight + suggestionHeight;
  } else if (relativeSuggestionTop < 0) {
    container.scrollTop += relativeSuggestionTop;
  }
};

export const Suggestion: React.FC = () => {
  const { suggestionTags, handleClick, query, handleHover, selectedTag } = useTag();

  const container = useRef<HTMLDivElement | null>();

  useEffect(() => {
    if (container.current) {
      const activeSuggestion = container.current.querySelector("li#selected") as HTMLLIElement;

      if (activeSuggestion) {
        maybeScrollSuggestionIntoView(activeSuggestion, container.current);
      }
    }
  }, [selectedTag]);

  return (
    <Box pos="relative" zIndex={"overlay"}>
      <Box layerStyle="card" ref={(node) => (container.current = node)} pos="absolute" w="full" maxHeight={"200px"} overflowY="auto" bg="gray.50" shadow="md" roundedBottom={"lg"}>
        <VStack as={"ul"} spacing={0} divider={<Divider />} alignItems="stretch">
          {suggestionTags.length || !query.length ? (
            suggestionTags.map((item, index) => (
              <Box
                as={"li"}
                listStyleType="none"
                p={3}
                rounded={0}
                bg={useColorModeValue(suggestionTags.indexOf(selectedTag) == index ? "gray.100" : "gray.50", suggestionTags.indexOf(selectedTag) == index ? "gray.900" : "gray.800")}
                cursor="pointer"
                key={item}
                id={suggestionTags.indexOf(selectedTag) == index ? "selected" : undefined}
                onTouchStart={() => handleClick(item)}
                onMouseDown={() => handleClick(item)}
                onMouseOver={() => handleHover(item)}
              >
                #{item}
              </Box>
            ))
          ) : (
            <Box as={"li"} listStyleType="none" p={3} rounded={0} _hover={{ bg: useColorModeValue("gray.100", "gray.900"), cursor: "not-allowed" }}>
              Tag not found!
            </Box>
          )}
        </VStack>
      </Box>
    </Box>
  );
};
