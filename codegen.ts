import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  verbose: true,
  debug: true,
  watch: true,
  schema: "http://localhost:8000/graphql",
  documents: "./lib/GraphQL/**/*.ts",
  generates: {
    "generated-types.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
    },
  },
};

export default config;
