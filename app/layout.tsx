import type { Metadata } from "next";
import { Fredoka, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Vega Setiawan",
  description: "Portofolio of Vega Setiawan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="p-0 m-0" suppressHydrationWarning>
      <body
        className={`${fredoka.className} ${geistSans.className} antialiased bg-zinc-50`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
