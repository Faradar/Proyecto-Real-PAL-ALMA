import { Quicksand } from "next/font/google";
import "./global.css";

// Components
import Navbar from "../components/navbar/Navbar";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Pa'l Alma",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={quicksand.className}>
        <Navbar />
        {children}
      </body>
      <footer className={inter.className}>{children}</footer>
    </html>
  );
}