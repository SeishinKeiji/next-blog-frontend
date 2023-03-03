import { useQuery } from "@apollo/client";
import Tags from "components/tag";
import { Query } from "generated-types";
import type { TagAction, TagProviderType } from "lib/constants/types";
import { SHOW_ALL_TAGS } from "lib/GraphQL/Queries";
import { createContext, useContext, useReducer, useCallback, useState, useEffect } from "react";

const TagContext = createContext<TagProviderType>({} as unknown as TagProviderType);

const TagProvider: React.FC = () => {
  return (
    <TagContext.Provider value={useTagSource()}>
      <Tags />
    </TagContext.Provider>
  );
};

export const useTag = () => useContext(TagContext);

export const useTagSource = () => {
  useQuery<Query>(SHOW_ALL_TAGS, {
    onCompleted(data) {
      setAllowedTags(data.showAllTag.map((tag) => tag.name));
    },
  });

  // needed for keyboard arrow keys support to select suggestion and other purpose
  const [selectedTag, setSelectedTag] = useState("");

  const [storedTags, dispatch] = useReducer(reducer, []);
  const [suggestionTags, setSuggestionTags] = useState<string[]>([]);
  const [allowedTags, setAllowedTags] = useState<string[]>([]);

  // manage storedTags
  const setNewTag = useCallback((name: string) => {
    dispatch({ type: "insert", payload: { name } });
  }, []);
  const removeTag = useCallback((index: number) => {
    dispatch({ type: "delete", payload: { index } });
  }, []);

  // provided values on custom hooks for the purpose of handle user interaction on additional event listener
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = (name: string) => {
    allowedTags.includes(name) && setNewTag(name);
    setQuery("");
  };
  const handleHover = (name: string) => {
    setSelectedTag(name);
  };
  const handleDelete = (index: number) => {
    removeTag(index);
  };

  // manage suggestionTags
  useEffect(() => {
    if (query.length) setSuggestionTags(() => allowedTags.filter((tag) => tag.includes(query)));
    else setSuggestionTags(() => allowedTags);
    if (!isFocused) setSuggestionTags([]);
  }, [query, isFocused]);

  return { isFocused, allowedTags, storedTags, suggestionTags, selectedTag, query, setQuery, setIsFocused, setSelectedTag, handleHover, handleClick, handleDelete };
};

const reducer = (state: string[], action: TagAction): string[] => {
  switch (action.type) {
    case "insert":
      return state.concat([action.payload.name]);
    case "delete":
      return state.filter((_, index) => action.payload.index !== index);
    default:
      throw Error("Unknown action");
  }
};

export default TagProvider;
