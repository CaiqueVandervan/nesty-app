import type { Metadata } from "next";
import { MuseoModerno } from "next/font/google";
import "./globals.css";

const museoModerno = MuseoModerno({
  variable: "--font-museo-moderno",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Nesty",
  description: "Lista Familiar para compras mensais",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${museoModerno.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
