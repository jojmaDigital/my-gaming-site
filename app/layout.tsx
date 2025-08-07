import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Navbar';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 title: 'My Gaming Site',
  description: 'Des jeux amusants à jouer en ligne !',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/assets/styles/app.css" />
        <script defer src="/assets/js/app.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/images/icons/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/assets/styles/app.css" />
        <script defer src="/assets/js/app.js"></script>
      </head>
      <body>
        <Header /> {/* ✅ Visible sur toutes les pages */}
        <main>{children}</main>
      </body>

    </html>
  );
}
