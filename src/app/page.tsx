import { CopyCommand } from "@/components/CopyCommand";
import {
  Code,
  BookOpen,
  Terminal,
  ArrowRight,
  Box,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Ishare2Logo from "./ishare2-logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex flex-col font-sans relative overflow-x-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <header className="container mx-auto px-6 py-8 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3 group cursor-pointer">
          <Ishare2Logo className="w-9 h-9 transition-transform group-hover:scale-105" />
          <span className="font-extrabold text-2xl tracking-tight">
            ishare2
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a
            href="https://github.com/ishare2-org/"
            className="hover:text-foreground transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://t.me/NetLabHub"
            className="hover:text-foreground transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            Community
          </a>
          <a
            href="#"
            className="hover:text-foreground transition-colors"
            title="Coming soon"
          >
            Docs
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 pt-16 pb-32 flex flex-col items-center justify-center text-center relative z-10">
        <a
          href="https://github.com/ishare2-org/ishare2-cli"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-muted-foreground border border-border text-sm font-medium mb-10 hover:bg-muted hover:text-foreground transition-all active:scale-95 shadow-sm"
        >
          <Code size={16} />
          <span>Open Source on GitHub</span>
          <ArrowRight size={16} />
        </a>

        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl text-balance leading-[1.1]">
          Manage Network Emulator Images with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">
            Ease
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl text-balance leading-relaxed">
          The ultimate CLI tool designed for downloading, managing, and installing
          network emulator images directly from your terminal. Fast, reliable,
          and entirely open-source.
        </p>

        {/* Terminal Mockup */}
        <div className="w-full max-w-2xl bg-[#0d1117] rounded-xl border border-white/10 shadow-2xl overflow-hidden mb-12 text-left ring-1 ring-white/5 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
          <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="ml-auto flex items-center gap-4">
              <CopyCommand variant="terminal" />
              <div className="text-xs font-mono text-white/50 flex items-center gap-2">
                <Terminal size={14} />
                <span>bash</span>
              </div>
            </div>
          </div>
          <div className="p-6 font-mono text-sm sm:text-base text-gray-300 flex items-center gap-4 overflow-x-auto group cursor-copy hover:bg-white/[0.02] transition-colors">
            <span className="text-green-400 select-none font-bold">$</span>
            <code className="text-gray-100 whitespace-nowrap">
              curl -sSL https://ishare2.sh/install | sh
            </code>
          </div>
          </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md mx-auto sm:max-w-none">
          <CopyCommand
            className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 w-full sm:w-auto"
          />
          <a
            className="rounded-full border border-border bg-background hover:bg-muted flex items-center justify-center gap-2 font-medium transition-colors h-12 px-8 text-base w-full sm:w-auto shadow-sm"
            href="#"
            title="Coming soon!"
          >
            <BookOpen size={18} />
            Read Documentation
          </a>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-3 gap-8 mt-40 max-w-5xl text-left relative before:absolute before:inset-0 before:-translate-y-16 before:h-px before:bg-gradient-to-r before:from-transparent before:via-border before:to-transparent">
          <div className="flex flex-col gap-4 p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2 border border-primary/20">
              <Terminal size={24} />
            </div>
            <h3 className="font-semibold text-xl">CLI First</h3>
            <p className="text-muted-foreground leading-relaxed">
							Built for the terminal, offeringa an intuitive and efficient
							command-line experience for managing your network emulator images with ease.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-2 border border-blue-500/20">
              <Zap size={24} />
            </div>
            <h3 className="font-semibold text-xl">Easy to Setup</h3>
            <p className="text-muted-foreground leading-relaxed">
							Get started instantly with a single curl command. No complex
							configurations. Just copy, paste, and you're ready to manage your images.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-2 border border-purple-500/20">
              <Box size={24} />
            </div>
            <h3 className="font-semibold text-xl">Open Source</h3>
            <p className="text-muted-foreground leading-relaxed">
              Transparent, community-driven, and free forever. Contribute and
              help shape the future ecosystem of ishare2.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 relative z-10 bg-background/50 backdrop-blur-sm mt-auto">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <Ishare2Logo className="w-6 h-6 opacity-50 grayscale" />
            <span>
              &copy; {new Date().getFullYear()} ishare2. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <a
              className="flex items-center gap-2 hover:text-foreground transition-colors text-muted-foreground"
              href="https://t.me/NetLabHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram Community
            </a>

            <a
              className="flex items-center gap-2 hover:text-foreground transition-colors text-muted-foreground"
              href="https://labhub.eu.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
                Powered by
              </span>
              <Image
                src="/labhub-logo.png"
                alt="LabHub logo"
                width={80}
                height={36}
                className="inline-block invert dark:invert-0 opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
