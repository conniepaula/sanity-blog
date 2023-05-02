import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import Button from "./Button";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

function Tooltip(props: TooltipProps) {
  const { children, content } = props;
  return (
    <RadixTooltip.Provider delayDuration={400} >
      <RadixTooltip.Root >
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal className="opacity-1 relative">
          <RadixTooltip.Content className="" sideOffset={5} side="bottom">
            <motion.div
              className="relative top-4 select-none rounded-md bg-zinc-100 p-1 text-xs text-zinc-800 opacity-100"
              initial={{ opacity: 0, top: 5 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {content}
              <RadixTooltip.Arrow className="fill-zinc-100" />
            </motion.div>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}

export default Tooltip;
