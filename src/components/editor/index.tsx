import React from "react";
import { Editor, rootCtx } from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { commonmark } from "@milkdown/preset-commonmark";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

import "@milkdown/theme-nord/style.css";

const MilkdownEditor: React.FC = () => {
  useEditor((root) =>
    Editor.make()
      .config(nord)
      .config((ctx) => {
        ctx.set(rootCtx, root);
      })
      .use(commonmark)
  );

  return <Milkdown />;
};

const MilkdownEditorWrapper: React.FC = () => {
  return (
    <Prose>
      <MilkdownProvider>
        <MilkdownEditor />
      </MilkdownProvider>
    </Prose>
  );
};

export default MilkdownEditorWrapper;
