import { Montserrat } from 'next/font/google'

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Andres: Web Developer",
  description: "Portfolio of Andres Martinez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <div className="fixed top-6 left-6 z-50">
          <div className="AMDEV text-[#6AD68B] font-bold text-3xl bg-black/70 rounded-2xl">
            AMDEV
          </div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
