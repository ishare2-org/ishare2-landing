"use client";

import React from "react";
import { LucideClipboardCopy } from "lucide-react";
import { toast } from "sonner";

export const CopyCommand = () => {
  const copyCommand = () => {
    const command = "curl -sSL https://ishare2.sh/install | sh";
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
      className="rounded-full cursor-copy bg-foreground text-background flex items-center justify-center gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium transition-colors h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
      onClick={copyCommand}
    >
      <LucideClipboardCopy size={18} />
      Copy command
    </button>
  );
};
