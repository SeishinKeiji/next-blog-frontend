import { Box } from "@chakra-ui/react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";

const Editor = () => {
  const editor = new EditorJS({
    holder: "editorjs",
    tools: {
      headers: Header,
    },
    autofocus: false,
  });

  return (
    <Box w="full" h="full">
      <div id="editorjs"></div>
    </Box>
  );
};

export default Editor;
