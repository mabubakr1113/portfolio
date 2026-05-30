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

// jsdelivr mirrors @fontsource — far more reliable from edge runtime than fonts.googleapis.com
const FONT_URLS = {
  serifBlack:
    "https://cdn.jsdelivr.net/npm/@fontsource/fraunces@5/files/fraunces-latin-900-normal.woff",
  serifItalic:
    "https://cdn.jsdelivr.net/npm/@fontsource/fraunces@5/files/fraunces-latin-300-italic.woff",
  mono:
    "https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5/files/jetbrains-mono-latin-500-normal.woff",
};

async function tryFetchFont(url: string): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function Image() {
  const [serifBlack, serifItalic, mono] = await Promise.all([
    tryFetchFont(FONT_URLS.serifBlack),
    tryFetchFont(FONT_URLS.serifItalic),
    tryFetchFont(FONT_URLS.mono),
  ]);

  const fonts = [
    serifBlack && {
      name: "Serif",
      data: serifBlack,
      weight: 900 as const,
      style: "normal" as const,
    },
    serifItalic && {
      name: "SerifItalic",
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

  const SERIF = serifBlack ? "Serif" : "Georgia, serif";
  const ITALIC = serifItalic ? "SerifItalic" : "Georgia, serif";
  const MONO = mono ? "Mono" : "ui-monospace, monospace";

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
        {/* top meta strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: INK_2,
            fontFamily: MONO,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 10,
                height: 10,
                borderRadius: 9999,
                backgroundColor: ACCENT,
              }}
            />
            <div style={{ display: "flex" }}>Live · Turku, FI</div>
          </div>
          <div style={{ display: "flex", color: MUTED }}>mabubakr.dev</div>
        </div>

        {/* hairline */}
        <div
          style={{
            display: "flex",
            height: 1,
            width: "100%",
            backgroundColor: "#D2CBB7",
            marginTop: 22,
          }}
        />

        {/* HUGE NAME — sized to fit within 1072px content width */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 38,
            lineHeight: 0.88,
            fontWeight: 900,
            fontSize: 150,
            letterSpacing: -5,
          }}
        >
          <div style={{ display: "flex" }}>Mohammad</div>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <div
              style={{
                display: "flex",
                fontFamily: ITALIC,
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              Abubakr
            </div>
            <div style={{ display: "flex", color: ACCENT }}>.</div>
          </div>
        </div>

        {/* bottom: role on left, stats on right */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "auto",
            gap: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              maxWidth: 580,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 16,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: MUTED,
                fontFamily: MONO,
              }}
            >
              The Engineer&rsquo;s Journal
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 32,
                color: INK,
                lineHeight: 1.15,
              }}
            >
              Senior Full-Stack Engineer
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 26,
                fontFamily: ITALIC,
                fontStyle: "italic",
                fontWeight: 300,
                color: INK_2,
                lineHeight: 1.15,
              }}
            >
              React · Next · Node · AWS
            </div>
          </div>

          {/* stats column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 16,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: MUTED,
                fontFamily: MONO,
              }}
            >
              Fig. 01 — The Numbers
            </div>
            <div style={{ display: "flex", gap: 32, color: INK }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 4,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 48,
                    lineHeight: 1,
                    fontWeight: 900,
                  }}
                >
                  5+
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 13,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: MUTED,
                    fontFamily: MONO,
                  }}
                >
                  Years
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 4,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 48,
                    lineHeight: 1,
                    fontWeight: 900,
                  }}
                >
                  100K+
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 13,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: MUTED,
                    fontFamily: MONO,
                  }}
                >
                  Daily Users
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 4,
                  color: ACCENT,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 48,
                    lineHeight: 1,
                    fontWeight: 900,
                  }}
                >
                  $500K+
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 13,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: MUTED,
                    fontFamily: MONO,
                  }}
                >
                  Revenue
                </div>
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
