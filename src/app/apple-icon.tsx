import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default async function AppleIcon() {
  const urbanistBold = await readFile(
    join(process.cwd(), "public/fonts/Urbanist-Bold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e2d73 0%, #26388D 50%, #192560 100%)",
          borderRadius: "36px",
        }}
      >
        <div
          style={{
            fontFamily: "Urbanist",
            fontWeight: 700,
            fontSize: "80px",
            color: "#C4A962",
            letterSpacing: "-0.02em",
          }}
        >
          LS
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
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
