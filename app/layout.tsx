import type { Metadata } from "next";
import { MuseoModerno } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/AppLayout";

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
      <body className="min-h-full flex flex-col p-4">
        <div className="flex-1 rounded-lg bg-[#FBF8F2]">
          <AppLayout>
            {children}
          </AppLayout>
        </div>
      </body>
    </html>
  );
}
