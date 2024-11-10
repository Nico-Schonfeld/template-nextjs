import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "@/components/theme-provider";
import ReduxProvider from "@/redux/provider";
import { ViewTransitions } from "next-view-transitions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Template Nextjs",
  description:
    "Esta plantilla es ideal para desarrolladores que desean crear una aplicación web con Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="es" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReduxProvider>{children}</ReduxProvider>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
