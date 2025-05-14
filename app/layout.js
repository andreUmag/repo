import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar';
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
      <body className={`${montserrat.variable} antialiased`}>
        <header className="fixed top-0 w-full z-50 flex justify-start items-center px-6 py-4">
          <div className="AMDEV text-[#6AD68B] font-bold text-3xl">AMDEV</div>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
