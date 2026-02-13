import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OGImage() {
  const [urbanistLight, urbanistMedium, urbanistBold] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/Urbanist-Light.ttf")),
    readFile(join(process.cwd(), "public/fonts/Urbanist-Medium.ttf")),
    readFile(join(process.cwd(), "public/fonts/Urbanist-Bold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #1e2d73 0%, #26388D 50%, #192560 100%)",
          position: "relative",
        }}
      >
        {/* Gold border frame */}
        <div
          style={{
            position: "absolute",
            top: "24px",
            left: "24px",
            right: "24px",
            bottom: "24px",
            border: "1.5px solid rgba(196, 169, 98, 0.35)",
            display: "flex",
          }}
        />

        {/* Inner content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          {/* Top decorative: diamond - line - diamond */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "36px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                border: "1.5px solid #C4A962",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                width: "80px",
                height: "1px",
                backgroundColor: "rgba(196, 169, 98, 0.35)",
              }}
            />
            <div
              style={{
                width: "8px",
                height: "8px",
                border: "1.5px solid #C4A962",
                transform: "rotate(45deg)",
              }}
            />
          </div>

          {/* "LEANSPARK" title */}
          <div
            style={{
              fontFamily: "Urbanist",
              fontWeight: 700,
              fontSize: "52px",
              color: "#FFFFFF",
              letterSpacing: "0.2em",
              marginBottom: "28px",
            }}
          >
            LEANSPARK
          </div>

          {/* Subtitle */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                fontFamily: "Urbanist",
                fontWeight: 300,
                fontSize: "38px",
                color: "rgba(255, 255, 255, 0.92)",
                letterSpacing: "-0.01em",
                marginBottom: "4px",
              }}
            >
              When Constraints
            </div>
            <div
              style={{
                fontFamily: "Urbanist",
                fontWeight: 300,
                fontSize: "38px",
                color: "rgba(255, 255, 255, 0.92)",
                letterSpacing: "-0.01em",
              }}
            >
              Ignite Creativity
            </div>
          </div>

          {/* Gold divider */}
          <div
            style={{
              width: "60px",
              height: "2px",
              backgroundColor: "#C4A962",
              marginBottom: "32px",
            }}
          />

          {/* Authors */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "36px",
            }}
          >
            <span
              style={{
                fontFamily: "Urbanist",
                fontWeight: 500,
                fontSize: "15px",
                color: "#C4A962",
                letterSpacing: "0.08em",
              }}
            >
              JAIDEEP PRABHU
            </span>
            <span
              style={{
                color: "rgba(196, 169, 98, 0.45)",
                fontSize: "15px",
              }}
            >
              |
            </span>
            <span
              style={{
                fontFamily: "Urbanist",
                fontWeight: 500,
                fontSize: "15px",
                color: "#C4A962",
                letterSpacing: "0.08em",
              }}
            >
              PRIYANK NARAYAN
            </span>
            <span
              style={{
                color: "rgba(196, 169, 98, 0.45)",
                fontSize: "15px",
              }}
            >
              |
            </span>
            <span
              style={{
                fontFamily: "Urbanist",
                fontWeight: 500,
                fontSize: "15px",
                color: "#C4A962",
                letterSpacing: "0.08em",
              }}
            >
              MUKESH SUD
            </span>
          </div>

          {/* Bottom decorative: diamond - line - diamond */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                border: "1.5px solid #C4A962",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                width: "80px",
                height: "1px",
                backgroundColor: "rgba(196, 169, 98, 0.35)",
              }}
            />
            <div
              style={{
                width: "8px",
                height: "8px",
                border: "1.5px solid #C4A962",
                transform: "rotate(45deg)",
              }}
            />
          </div>

          {/* Publisher */}
          <div
            style={{
              fontFamily: "Urbanist",
              fontWeight: 500,
              fontSize: "11px",
              color: "rgba(196, 169, 98, 0.6)",
              letterSpacing: "0.18em",
            }}
          >
            PUBLISHED BY PENGUIN RANDOM HOUSE
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Urbanist",
          data: urbanistLight,
          weight: 300 as const,
          style: "normal" as const,
        },
        {
          name: "Urbanist",
          data: urbanistMedium,
          weight: 500 as const,
          style: "normal" as const,
        },
        {
          name: "Urbanist",
          data: urbanistBold,
          weight: 700 as const,
          style: "normal" as const,
        },
      ],
    }
  );
}
