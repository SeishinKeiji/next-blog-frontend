import type { Ctx, MilkdownPlugin } from "@milkdown/ctx";
import { Editor, defaultValueCtx, editorViewOptionsCtx, rootCtx } from "@milkdown/core";
import { block } from "@milkdown/plugin-block";
import { clipboard } from "@milkdown/plugin-clipboard";
import { emoji, emojiAttr } from "@milkdown/plugin-emoji";
import { history } from "@milkdown/plugin-history";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import { upload } from "@milkdown/plugin-upload";
import { commonmark, listItemSchema } from "@milkdown/preset-commonmark";
import { gfm } from "@milkdown/preset-gfm";
import { useEditor } from "@milkdown/react";
import { nord } from "@milkdown/theme-nord";
import { $view } from "@milkdown/utils";
import { useNodeViewFactory, usePluginViewFactory, useWidgetViewFactory } from "@prosemirror-adapter/react";
import debounce from "lodash.debounce";
import { useMemo, useRef } from "react";
import { useSetProseState } from "src/context/prose.context";
import { Block } from "components/editor/Block";
import { ImageTooltip, imageTooltip } from "components/editor/ImageTooltip";
import { linkPlugin } from "components/editor/LinkWidget";
import { ListItem } from "components/editor/ListItem";

export const useMilkdownEditor = (defaultValue: string) => {
  const pluginViewFactory = usePluginViewFactory();
  const nodeViewFactory = useNodeViewFactory();
  const widgetViewFactory = useWidgetViewFactory();
  const setProseState = useSetProseState();
  const defaultValueRef = useRef(defaultValue);

  const gfmPlugins: MilkdownPlugin[] = useMemo(() => {
    return [gfm].flat();
  }, []);

  const blockPlugins: MilkdownPlugin[] = useMemo(() => {
    return [
      block,
      (ctx: Ctx) => () => {
        ctx.set(block.key, {
          view: pluginViewFactory({
            component: Block,
          }),
        });
      },
    ].flat();
  }, [pluginViewFactory]);

  const twemojiPlugins: MilkdownPlugin[] = useMemo(() => {
    return [
      emoji,
      (ctx: Ctx) => () => {
        ctx.set(emojiAttr.key, () => ({
          span: {},
          img: {
            class: "emoji",
          },
        }));
      },
    ].flat();
  }, []);

  const editorInfo = useEditor((root) => {
    const editor = Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root);
        ctx.set(defaultValueCtx, defaultValueRef.current);
        ctx.get(listenerCtx).updated((_, doc) => {
          debounce(setProseState, 500)(doc.toJSON());
        });
        ctx.set(imageTooltip.key, {
          view: pluginViewFactory({
            component: ImageTooltip,
          }),
        });
      })
      .config(nord)
      .use(commonmark)
      .use(linkPlugin(widgetViewFactory))
      .use(listener)
      .use(clipboard)
      .use(history)
      .use(upload)
      .use(imageTooltip)
      .use($view(listItemSchema.node, () => nodeViewFactory({ component: ListItem })))
      .use(gfmPlugins)
      .use(blockPlugins)
      .use(twemojiPlugins);

    return editor;
  }, []);

  return editorInfo;
};
