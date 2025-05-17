import type { Metadata } from "next";
import { Itim, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/component/footer";
import { ThemeProvider } from "next-themes";
import { PopupProvider } from "@/component/popup/PopupContext";



const itim = Itim({
  variable: "--font-itim",
  weight: "400",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clover Jam",
  description: "Clover Jam",
  icons: {
    icon: { url: '/favicon-ico/icon.png', type: 'image/png' },
    shortcut: { url: '/favicon-ico/icon.png', type: 'image/png' },
    apple: { url: '/favicon-ico/icon.png', type: 'image/png' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${itim.variable} ${pixelifySans.variable} max-h-screen relative antialiased min-h-screen bg-[url('/image/background-main.png')] bg-cover bg-center bg-no-repeat`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PopupProvider>
            {children}
            <Footer />
          </PopupProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
