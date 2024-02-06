import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Production",
  description: "Next Production try to make next big thing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-y-scroll overflow-x-hidden`}>{children}</body>
    </html>
  );
}
