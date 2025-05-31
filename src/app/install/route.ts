const INSTALLATION_SCRIPT =
  "https://raw.githubusercontent.com/ishare2-org/ishare2-cli/refs/heads/main/install.sh";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const response = await fetch(INSTALLATION_SCRIPT);
    if (!response.ok) {
      throw new Error(`Failed to fetch script: ${response.statusText}`);
    }
    const scriptContent = await response.text();
    return NextResponse.json({ script: scriptContent });
  } catch (error) {
    console.error("Error fetching installation script:", error);
    return NextResponse.json(
      { error: "Failed to fetch installation script." },
      { status: 500 }
    );
  }
}

