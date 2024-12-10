import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Song of Ice and Fire",
  description: "Know it all about the world of ice and fire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
