import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { ThemeProvider } from "@/components/theme-provider";
import ReduxProvider from "@/redux/provider";
import { ViewTransitions } from "next-view-transitions";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
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
