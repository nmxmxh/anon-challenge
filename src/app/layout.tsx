import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Inter } from "next/font/google";

import Providers from "@/lib/providers";
import GlobalStyles from "@/styles/global";

const inter = Inter();

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
