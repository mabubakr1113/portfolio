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

// Fetch a single Fraunces variable weight from Google Fonts for the headline.
async function getFraunces() {
  const cssRes = await fetch(
    "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,900&display=swap",
    { headers: { "User-Agent": "Mozilla/5.0" } }
  );
  const css = await cssRes.text();
  const url = css.match(/src:\s*url\(([^)]+)\)\s*format\('woff2'\)/)?.[1];
  if (!url) throw new Error("Fraunces font URL not found");
  const fontRes = await fetch(url);
  return fontRes.arrayBuffer();
}

async function getFrauncesItalic() {
  const cssRes = await fetch(
    "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,300&display=swap",
    { headers: { "User-Agent": "Mozilla/5.0" } }
  );
  const css = await cssRes.text();
  const url = css.match(/src:\s*url\(([^)]+)\)\s*format\('woff2'\)/)?.[1];
  if (!url) throw new Error("Fraunces italic font URL not found");
  const fontRes = await fetch(url);
  return fontRes.arrayBuffer();
}

async function getMono() {
  const cssRes = await fetch(
    "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap",
    { headers: { "User-Agent": "Mozilla/5.0" } }
  );
  const css = await cssRes.text();
  const url = css.match(/src:\s*url\(([^)]+)\)\s*format\('woff2'\)/)?.[1];
  if (!url) throw new Error("JetBrains Mono font URL not found");
  const fontRes = await fetch(url);
  return fontRes.arrayBuffer();
}

export default async function Image() {
  const [fraunces, frauncesItalic, mono] = await Promise.all([
    getFraunces(),
    getFrauncesItalic(),
    getMono(),
  ]);

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
          fontFamily: "Fraunces",
        }}
      >
        {/* top meta strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "JetBrains Mono",
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
              }}
            />
            <span>Live · Turku, FI</span>
          </div>
          <div style={{ display: "flex", color: MUTED }}>
            mabubakr.dev
          </div>
        </div>

        {/* hairline */}
        <div
          style={{
            display: "flex",
            height: 1,
            width: "100%",
            backgroundColor: "#D2CBB7",
            marginTop: 24,
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
                fontFamily: "FrauncesItalic",
              }}
            >
              Abubakr
            </span>
            <span style={{ color: ACCENT }}>.</span>
          </div>
        </div>

        {/* bottom row: role + stats */}
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
                fontFamily: "JetBrains Mono",
                fontSize: 18,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: MUTED,
              }}
            >
              Vol. V — The Engineer&rsquo;s Journal
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 38,
                color: INK,
                lineHeight: 1.05,
              }}
            >
              Senior Full-Stack Engineer ·{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontFamily: "FrauncesItalic",
                  marginLeft: 12,
                }}
              >
                React / Next / Node / AWS
              </span>
            </div>
          </div>

          {/* stat strip */}
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
                fontFamily: "JetBrains Mono",
                fontSize: 16,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: MUTED,
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
                <span>5+</span>
                <span
                  style={{
                    fontFamily: "JetBrains Mono",
                    fontSize: 14,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: MUTED,
                  }}
                >
                  Years
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span>100K+</span>
                <span
                  style={{
                    fontFamily: "JetBrains Mono",
                    fontSize: 14,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: MUTED,
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
                <span>$500K+</span>
                <span
                  style={{
                    fontFamily: "JetBrains Mono",
                    fontSize: 14,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: MUTED,
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
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 900, style: "normal" },
        { name: "FrauncesItalic", data: frauncesItalic, weight: 300, style: "italic" },
        { name: "JetBrains Mono", data: mono, weight: 500, style: "normal" },
      ],
    }
  );
}
