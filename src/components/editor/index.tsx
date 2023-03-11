import { ProsemirrorAdapterProvider } from "@prosemirror-adapter/react";
import { MilkdownProvider } from "@milkdown/react";

import { compose } from "lib/compose";
import { ProseStateProvider } from "src/context/prose.context";
import { Loader } from "components/Loader";
import dynamic from "next/dynamic";

const AsyncMilkdownEditor = dynamic(() => import("./MilkdownEditor"), {
  loading: () => <Loader />,
  ssr: false,
});

// milkdown provider, prose state provider = deliver json data and save it to database
const Provider = compose(MilkdownProvider, ProsemirrorAdapterProvider, ProseStateProvider);

const MilkdownEditorWrapper: React.FC = () => {
  return (
    <Provider>
      <AsyncMilkdownEditor />
    </Provider>
  );
};

export default MilkdownEditorWrapper;
