import { CopyCommand } from "@/components/CopyCommand";
import {
  Code,
  LucideBook,
  LucideGlobe,
  LucideMessageCircle,
} from "lucide-react";
import Image from "next/image";
import Ishare2Logo from "./ishare2-logo";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-sm sm:text-base">
        <Ishare2Logo />

        <ol className="list-decimal list-inside text-center sm:text-left font-mono text-sm leading-6">
          <li className="mb-2 tracking-tight">
            Install ishare2 by running the following command in your terminal:
          </li>
          <pre className="bg-black/5 dark:bg-white/10 px-2 py-1 rounded font-semibold">
            <code className="font-mono">
              curl -sSL https://ishare2.sh/install | sh
            </code>
          </pre>
          <li className="mt-2 tracking-tight">Complete the setup wizard</li>
          <li className="tracking-tight">Enjoy!</li>
        </ol>

        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
          <CopyCommand />
          <a
            className="rounded-full border border-black/10 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center gap-2 font-medium transition-colors h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="#"
            title="Coming soon!"
          >
            <LucideBook size={18} />
            Read docs
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex flex-wrap md:flex-nowrap items-center justify-center gap-6 text-sm">
        <a
          className="flex items-center gap-2 hover:underline underline-offset-4"
          href="https://github.com/ishare2-org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Code size={18} />
          GitHub Repository
        </a>

        <a
          className="flex flex-col justify-center items-center gap-1 hover:underline underline-offset-4"
          href="https://labhub.eu.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="leading-tight">Powered by</span>
          <Image
            src="/labhub-logo.png"
            alt="LabHub logo"
            width={100}
            height={45}
            className="inline-block invert dark:invert-0 hover:underline"
          />
        </a>

        <a
          className="flex items-center gap-2 hover:underline underline-offset-4"
          href="https://t.me/NetLabHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LucideMessageCircle size={18} />
          Telegram Community
        </a>
      </footer>
    </div>
  );
}
