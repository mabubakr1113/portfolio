import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Mohammad Abubakr — Senior Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#ECE6D4";
const INK = "#0E0E0C";
const INK_2 = "#2A2A26";
const MUTED = "#6C6A60";
const ACCENT = "#FF4D14";

// More permissive: handles single/double quotes and missing 'format()' on some variants.
const FONT_URL_RE = /url\(([^)]+\.woff2[^)]*)\)/;

async function fetchFontBuffer(cssUrl: string): Promise<ArrayBuffer | null> {
  try {
    const cssRes = await fetch(cssUrl, {
      headers: {
        // Trick Google Fonts into serving woff2 by pretending to be modern Chrome.
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });
    if (!cssRes.ok) return null;
    const css = await cssRes.text();
    const match = css.match(FONT_URL_RE);
    if (!match) return null;
    const url = match[1].replace(/^['"]|['"]$/g, "");
    const fontRes = await fetch(url);
    if (!fontRes.ok) return null;
    return await fontRes.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function Image() {
  // Load custom fonts in parallel; if any fail, the image still renders with fallback fonts.
  const [serif, serifItalic, mono] = await Promise.all([
    fetchFontBuffer(
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,900&display=swap"
    ),
    fetchFontBuffer(
      "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,300&display=swap"
    ),
    fetchFontBuffer(
      "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap"
    ),
  ]);

  const fonts = [
    serif && {
      name: "Editorial",
      data: serif,
      weight: 900 as const,
      style: "normal" as const,
    },
    serifItalic && {
      name: "EditorialItalic",
      data: serifItalic,
      weight: 300 as const,
      style: "italic" as const,
    },
    mono && {
      name: "Mono",
      data: mono,
      weight: 500 as const,
      style: "normal" as const,
    },
  ].filter((x): x is NonNullable<typeof x> => x !== null);

  const SERIF = serif ? "Editorial" : "Georgia, 'Times New Roman', serif";
  const ITALIC = serifItalic
    ? "EditorialItalic"
    : "Georgia, 'Times New Roman', serif";
  const MONO = mono ? "Mono" : "ui-monospace, 'Courier New', monospace";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: PAPER,
          padding: "56px 64px",
          position: "relative",
          color: INK,
          fontFamily: SERIF,
        }}
      >
        {/* meta strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: MONO,
            fontSize: 18,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: INK_2,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 9999,
                backgroundColor: ACCENT,
                display: "flex",
              }}
            />
            <span>Live · Turku, FI</span>
          </div>
          <div style={{ display: "flex", color: MUTED }}>mabubakr.dev</div>
        </div>

        {/* hairline */}
        <div
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#D2CBB7",
            marginTop: 24,
            display: "flex",
          }}
        />

        {/* HUGE NAME */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 40,
            lineHeight: 0.86,
            fontWeight: 900,
            fontSize: 200,
            letterSpacing: -8,
          }}
        >
          <div style={{ display: "flex" }}>Mohammad</div>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                fontFamily: ITALIC,
                display: "flex",
              }}
            >
              Abubakr
            </span>
            <span style={{ color: ACCENT, display: "flex" }}>.</span>
          </div>
        </div>

        {/* role + stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 18,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: MUTED,
                display: "flex",
              }}
            >
              Vol. V — The Engineer's Journal
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 38,
                color: INK,
                lineHeight: 1.05,
              }}
            >
              <span style={{ display: "flex" }}>Senior Full-Stack Engineer ·</span>
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontFamily: ITALIC,
                  marginLeft: 12,
                  display: "flex",
                }}
              >
                React / Next / Node / AWS
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 6,
            }}
          >
            <div
              style={{
                fontFamily: MONO,
                fontSize: 16,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: MUTED,
                display: "flex",
              }}
            >
              Fig. 01 — The Numbers
            </div>
            <div
              style={{
                display: "flex",
                gap: 28,
                fontSize: 52,
                lineHeight: 1,
                color: INK,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ display: "flex" }}>5+</span>
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 14,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: MUTED,
                    display: "flex",
                  }}
                >
                  Years
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ display: "flex" }}>100K+</span>
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 14,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: MUTED,
                    display: "flex",
                  }}
                >
                  Daily Users
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  color: ACCENT,
                }}
              >
                <span style={{ display: "flex" }}>$500K+</span>
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 14,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: MUTED,
                    display: "flex",
                  }}
                >
                  Revenue
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* corner registration marks */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            width: 16,
            height: 16,
            borderLeft: `2px solid ${ACCENT}`,
            borderTop: `2px solid ${ACCENT}`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 28,
            right: 28,
            width: 16,
            height: 16,
            borderRight: `2px solid ${ACCENT}`,
            borderTop: `2px solid ${ACCENT}`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: 28,
            width: 16,
            height: 16,
            borderLeft: `2px solid ${ACCENT}`,
            borderBottom: `2px solid ${ACCENT}`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 28,
            right: 28,
            width: 16,
            height: 16,
            borderRight: `2px solid ${ACCENT}`,
            borderBottom: `2px solid ${ACCENT}`,
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size, fonts }
  );
}
