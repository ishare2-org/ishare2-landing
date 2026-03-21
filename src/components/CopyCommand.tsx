"use client";

import React, { useState } from "react";
import { Check, Clipboard, Terminal } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const copyToClipboard = async (text: string) => {
  if (typeof globalThis === "undefined" || !navigator.clipboard) {
		console.warn("Clipboard API not available");
		return false;
	}

  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (err) {
    console.error("Copy failed: ", err);
    return false;
  }
};

interface CopyCommandProps {
  className?: string;
  command?: string;
  variant?: "button" | "terminal" | "ghost";
}

export const CopyCommand = ({
  className,
  command = "curl -sSL https://ishare2.sh/install | sh",
  variant = "button"
}: CopyCommandProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(command);
    if (success) {
      setCopied(true);
      toast.success("Command copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } else {
      toast.error("Failed to copy command");
    }
  };

  if (variant === "terminal") {
    return (
      <button
        onClick={handleCopy}
        className={cn(
          "flex items-center gap-2 text-xs font-mono text-white/40 hover:text-white transition-colors group px-2 py-1 rounded hover:bg-white/5",
          className
        )}
        title="Copy command"
      >
        {copied ? (
          <Check size={14} className="text-green-400" />
        ) : (
          <Clipboard size={14} className="group-hover:scale-110 transition-transform" />
        )}
        <span className="hidden sm:inline">{copied ? "Copied!" : "Copy"}</span>
      </button>
    );
  }

  return (
    <button
      className={cn(
        "rounded-full bg-foreground text-background flex items-center justify-center gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium transition-all active:scale-95 h-10 sm:h-12 px-4 sm:px-6 w-full sm:w-auto shadow-sm",
        className
      )}
      onClick={handleCopy}
    >
      {copied ? <Check size={18} /> : variant === "ghost" ? <Clipboard size={18} /> : <Terminal size={18} />}
      {copied ? "Copied!" : "Copy command"}
    </button>
  );
};
