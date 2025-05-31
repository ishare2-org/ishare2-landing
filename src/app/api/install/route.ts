import { NextResponse } from "next/server";

const INSTALLATION_SCRIPT =
  "https://raw.githubusercontent.com/ishare2-org/ishare2-cli/main/install.sh";

export async function GET() {
  try {
    const response = await fetch(INSTALLATION_SCRIPT);
    if (!response.ok) {
      throw new Error(`Failed to fetch script: ${response.statusText}`);
    }

    const scriptContent = await response.text();

    return new NextResponse(scriptContent, {
      headers: {
        "Content-Type": "text/x-shellscript",
        "Cache-Control": "public, max-age=300",
      },
    });
  } catch (error) {
    console.error("Error fetching installation script:", error);
    return new NextResponse("Failed to fetch installation script", {
      status: 500,
    });
  }
}
