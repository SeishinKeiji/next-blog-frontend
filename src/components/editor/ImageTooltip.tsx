import { Box, FormControl, FormLabel, HStack, Input } from "@chakra-ui/react";
import { commandsCtx } from "@milkdown/core";
import { TooltipProvider, tooltipFactory } from "@milkdown/plugin-tooltip";
import { updateImageCommand } from "@milkdown/preset-commonmark";
import { NodeSelection } from "@milkdown/prose/state";
import { useInstance } from "@milkdown/react";
import { usePluginViewContext } from "@prosemirror-adapter/react";
import debounce from "lodash.debounce";
import { useEffect, useRef } from "react";

export const ImageTooltip: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { view, prevState } = usePluginViewContext();
  const tooltipProvider = useRef<TooltipProvider>();
  const { state } = view;
  const { selection } = state;
  const imageNode = state.doc.nodeAt(selection.from);
  const [loading, getEditor] = useInstance();
  const { src, alt, title } = imageNode?.attrs ?? {};

  useEffect(() => {
    if (ref.current && !tooltipProvider.current && !loading) {
      const provider = new TooltipProvider({
        content: ref.current,
        shouldShow: (view) => {
          const { selection } = view.state;
          const { empty, from } = selection;

          const isTooltipChildren = provider.element.contains(document.activeElement);

          const notHasFocus = !view.hasFocus() && !isTooltipChildren;

          const isReadonly = !view.editable;

          if (notHasFocus || empty || isReadonly) return false;

          if (selection instanceof NodeSelection && view.state.doc.nodeAt(from)?.type.name === "image") return true;

          return false;
        },
      });

      tooltipProvider.current = provider;
    }

    return () => {
      tooltipProvider.current?.destroy();
    };
  }, [loading]);

  useEffect(() => {
    tooltipProvider.current?.update(view, prevState);
  });

  const onChange = (key: string, e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (loading) return;

    const value = e.target.value;
    if (value === imageNode?.attrs[key]) return;

    getEditor().action((ctx) => {
      const commands = ctx.get(commandsCtx);
      commands.call(updateImageCommand.key, {
        [key]: (e.target as HTMLInputElement).value,
      });
    });
  };

  return (
    <Box display="none">
      <HStack ref={ref} bg="gray.100" p="5" rounded="lg">
        <FormControl>
          <FormLabel>Link</FormLabel>
          <Input
            type="text"
            onBlur={(e) => {
              onChange("src", e);
            }}
            onChange={debounce((e) => {
              onChange("src", e);
            }, 2000)}
            defaultValue={src}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Alt</FormLabel>
          <Input
            type="text"
            onBlur={(e) => {
              onChange("alt", e);
            }}
            onChange={debounce((e) => {
              onChange("alt", e);
            }, 2000)}
            defaultValue={alt}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            onBlur={(e) => {
              onChange("title", e);
            }}
            onChange={debounce((e) => {
              onChange("title", e);
            }, 2000)}
            defaultValue={title}
          />
        </FormControl>
      </HStack>
    </Box>
  );
};

export const imageTooltip = tooltipFactory("IMAGE");
