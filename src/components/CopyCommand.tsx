"use client";

import React from "react";
import { LucideClipboardCopy, Terminal } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface CopyCommandProps {
  className?: string;
  command?: string;
  showTerminalIcon?: boolean;
}

export const CopyCommand = ({ 
  className, 
  command = "curl -sSL https://ishare2.sh/install | sh",
  showTerminalIcon = false 
}: CopyCommandProps) => {
  const copyCommand = () => {
    navigator.clipboard
      .writeText(command)
      .then(() => {
        toast.success("Install command copied to clipboard.");
      })
      .catch((err) => {
        toast.error("Failed to copy command. Please try again.");
        console.error("Failed to copy command: ", err);
      });
  };

  return (
    <button
      className={cn(
        "rounded-full cursor-copy bg-foreground text-background flex items-center justify-center gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium transition-all active:scale-95 h-10 sm:h-12 px-4 sm:px-6 w-full sm:w-auto shadow-sm",
        className
      )}
      onClick={copyCommand}
    >
      {showTerminalIcon ? <Terminal size={18} /> : <LucideClipboardCopy size={18} />}
      Copy command
    </button>
  );
};
