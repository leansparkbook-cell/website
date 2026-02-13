import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default async function Icon() {
  const urbanistBold = await readFile(
    join(process.cwd(), "public/fonts/Urbanist-Bold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#26388D",
          borderRadius: "6px",
        }}
      >
        <div
          style={{
            fontFamily: "Urbanist",
            fontWeight: 700,
            fontSize: "18px",
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
