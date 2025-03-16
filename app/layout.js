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
      <script defer src="https://platform.analytick.ir/script.js" data-website-id="4ecb9774-bae4-4e7f-98de-f64d7b66a752"></script>
      <body className={`${inter.className} overflow-y-scroll overflow-x-hidden`}>{children}</body>
    </html>
  );
}
