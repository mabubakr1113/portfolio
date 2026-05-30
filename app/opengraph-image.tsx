import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Mohammad Abubakr — Senior Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#ECE6D4";
const INK = "#0E0E0C";
const MUTED = "#6C6A60";
const ACCENT = "#FF4D14";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: PAPER,
          padding: "64px 72px",
          position: "relative",
          color: INK,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* top mono strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: MUTED,
            fontFamily: "ui-monospace, 'Courier New', monospace",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 9999,
                backgroundColor: ACCENT,
                display: "flex",
              }}
            />
            <div style={{ display: "flex" }}>Live · Turku, FI</div>
          </div>
          <div style={{ display: "flex" }}>mabubakr.dev</div>
        </div>

        {/* hairline */}
        <div
          style={{
            display: "flex",
            height: 1,
            width: "100%",
            backgroundColor: "#D2CBB7",
            marginTop: 32,
          }}
        />

        {/* HUGE NAME */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 60,
            lineHeight: 0.88,
            fontWeight: 900,
            fontSize: 210,
            letterSpacing: -10,
          }}
        >
          <div style={{ display: "flex" }}>Mohammad</div>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <div
              style={{
                display: "flex",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              Abubakr
            </div>
            <div style={{ display: "flex", color: ACCENT }}>.</div>
          </div>
        </div>

        {/* bottom: role + stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "auto",
            gap: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              maxWidth: 640,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 20,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: MUTED,
                fontFamily: "ui-monospace, 'Courier New', monospace",
              }}
            >
              The Engineer&rsquo;s Journal
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 40,
                color: INK,
                lineHeight: 1.1,
              }}
            >
              Senior Full-Stack Engineer
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontStyle: "italic",
                color: MUTED,
                lineHeight: 1.1,
              }}
            >
              React / Next / Node / AWS
            </div>
          </div>

          {/* stats column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 18,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: MUTED,
                fontFamily: "ui-monospace, 'Courier New', monospace",
              }}
            >
              Fig. 01 — The Numbers
            </div>
            <div style={{ display: "flex", gap: 36, color: INK }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 4,
                }}
              >
                <div style={{ display: "flex", fontSize: 56, lineHeight: 1 }}>
                  5+
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 14,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: MUTED,
                    fontFamily: "ui-monospace, 'Courier New', monospace",
                  }}
                >
                  Years
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 4,
                }}
              >
                <div style={{ display: "flex", fontSize: 56, lineHeight: 1 }}>
                  100K+
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 14,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: MUTED,
                    fontFamily: "ui-monospace, 'Courier New', monospace",
                  }}
                >
                  Daily Users
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 4,
                  color: ACCENT,
                }}
              >
                <div style={{ display: "flex", fontSize: 56, lineHeight: 1 }}>
                  $500K+
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 14,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: MUTED,
                    fontFamily: "ui-monospace, 'Courier New', monospace",
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
            top: 32,
            left: 32,
            width: 18,
            height: 18,
            borderLeft: `2px solid ${ACCENT}`,
            borderTop: `2px solid ${ACCENT}`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 32,
            right: 32,
            width: 18,
            height: 18,
            borderRight: `2px solid ${ACCENT}`,
            borderTop: `2px solid ${ACCENT}`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: 32,
            width: 18,
            height: 18,
            borderLeft: `2px solid ${ACCENT}`,
            borderBottom: `2px solid ${ACCENT}`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 32,
            width: 18,
            height: 18,
            borderRight: `2px solid ${ACCENT}`,
            borderBottom: `2px solid ${ACCENT}`,
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
