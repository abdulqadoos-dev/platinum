import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gunterz = localFont({
  src: [
    {
      path: "../fonts/Gunterz-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Gunterz-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gunterz",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Paltinum Trucking",
  description: "railway Construction you can trust",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${gunterz.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
