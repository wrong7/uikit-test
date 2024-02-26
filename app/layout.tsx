"use client";

import { Inter, Roboto_Flex } from "next/font/google";
import "@/styles/globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
});

export default function App({ children }: { children: React.ReactElement }) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <main id="app" className={`${inter.className} ${roboto.variable}`}>
          <div className="w-screen h-[100dvh] overflow-hidden">
            <div className="flex flex-1 h-full">
              <div className="flex flex-col w-full">{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
