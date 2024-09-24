import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import Providers from "@/lib/providers";
import GlobalStyles from "@/styles/global";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Upbound Challenge | Nobert",
  description: "",
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <GlobalStyles />
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
