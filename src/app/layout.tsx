import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";
import { MasterJSONProvider } from "./context/MasterJSONContext";
import { CanvasModeProvider } from "./context/CanvasModeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notification Template Builder",
  description: "Tool for Email Desing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{height: '100vh', overflow: "hidden"}} className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <MasterJSONProvider>
            <CanvasModeProvider>
              {children}
            </CanvasModeProvider>
          </MasterJSONProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
