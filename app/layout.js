import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Production Dev",
  description: "Next Production try to make next big thing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-y-scroll overflow-x-hidden`}>{children}</body>
      <script defer src="https://platform.analytick.ir/script.js" data-website-id="4dd27363-d5ac-454b-b1b2-dacde74db9ac"></script>
    </html>
  );
}
