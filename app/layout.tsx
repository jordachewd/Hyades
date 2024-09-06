import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { cn } from "@/lib/utils";

const HyadesFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-hyades",
});

export const metadata: Metadata = {
  title: "Hyades",
  description: "Where Innovation Meets Imagination.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: "#1b1e50" } }}>
      <html lang="en">
        <body
          className={cn("font-HyadesFont antialiased", HyadesFont.variable)}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
