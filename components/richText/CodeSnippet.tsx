"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { useEffect } from "react";
import hljs from "highlight.js/lib/common";
import { useClipboard, useDebouncedValue } from "@mantine/hooks";
import { ClipboardCopyIcon, CheckIcon } from "@radix-ui/react-icons/";
import Button from "../atoms/Button";
import Tooltip from "../atoms/Tooltip";
import ToastDemo from "../atoms/Toast";

interface CodeSnippetProps {
  language: string;
  code: string;
  filename?: string;
  highlightedLines?: Array<number>;
}
function CodeSnippet(props: CodeSnippetProps) {
  const { language, code, filename, highlightedLines } = props;
  const clipboard = useClipboard({ timeout: 2000 });
  const [debounced, setDebounced] = useDebouncedValue(clipboard.copied, 1000, {
    leading: true,
  });

  console.log(debounced);

  const handleCopyButtonClick = () => {
    clipboard.copy(code);
    // setDebounced();
  };
  useEffect(() => {
    hljs.configure({
      languages: ["javascript", "typescript", "css", "html"],
    });
    document.querySelectorAll("pre code:not(.hljs)").forEach((el) => {
      hljs.highlightElement(el as HTMLElement);
    });
  }, []);

  const codeArray = code.split("\n");
  let lineNumber = 0;
  return (
    <>
      <div className="max-w-[1080px] overflow-hidden rounded-lg bg-gradient-to-br from-zinc-700/90 to-zinc-800 p-[1px]">
        <Tabs.Root
          className="relative overflow-hidden rounded-lg bg-gradient-to-br  from-zinc-950/50 to-zinc-900/90 py-2 pl-2"
          defaultValue="tab1"
        >
          <Tabs.List
            className="flex [&>*]:px-4 [&>*]:py-1"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className="border-b-2 border-teal-400/40 px-12 font-mono text-sm text-teal-300"
              value="tab1"
            >
              {filename}
            </Tabs.Trigger>
            <Tabs.Trigger
              disabled
              className="w-full overflow-hidden rounded-tl-md border border-zinc-700/30 bg-zinc-900/60"
              value="tab2"
            />
          </Tabs.List>
          <Tabs.Content
            className=" overflow-x-scroll rounded-b-lg py-4 text-sm"
            value="tab1"
          >
            <ToastDemo
              title="Code was copied to clipboard"
              isOpen={clipboard.copied}
            >
              <Tooltip content="Copy">
                <Button
                  // disabled={debounced}
                  className={` absolute right-2 top-12 z-50 cursor-pointer ${
                    clipboard.copied
                      ? "focus:ring-1 focus:ring-zinc-300/50"
                      : "ring-1 ring-transparent"
                  }`}
                  onClick={handleCopyButtonClick}
                >
                  {clipboard.copied ? <CheckIcon /> : <ClipboardCopyIcon />}
                </Button>
              </Tooltip>
            </ToastDemo>
            {codeArray.map((line: string) => {
              lineNumber++;
              return (
                <span
                  key={lineNumber}
                  className={`${
                    highlightedLines?.includes(lineNumber)
                      ? "w-max min-w-full border-l-2 border-l-zinc-600 bg-gradient-to-r from-zinc-700/20 from-90% to-transparent to-100%"
                      : "border-l-2 border-l-transparent"
                  } block py-0.5 pr-2`}
                >
                  <span className="ml-2 mr-5 inline-block select-none font-mono text-zinc-600">
                    {lineNumber}
                  </span>
                  <pre className="text-md inline-block">
                    <code className="inline-block bg-transparent">{line}</code>
                  </pre>
                </span>
              );
            })}
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </>
  );
}

export default CodeSnippet;
