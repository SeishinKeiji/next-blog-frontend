import { useTagSource } from "src/context/tag.context";

export type TagState = {
  suggestions: string[];
  tags: string[];
  input: string;
};

export type TagProviderType = ReturnType<typeof useTagSource>;

export type TagAction =
  | {
      type: "insert";
      payload: {
        name: string;
      };
    }
  | {
      type: "delete";
      payload: {
        index: number;
      };
    };
