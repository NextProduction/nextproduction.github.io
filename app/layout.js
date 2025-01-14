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
      <script defer src="https://cloud.umami.is/script.js" data-website-id="d733939c-b8f0-4b79-aeb6-19b27a21dbd4"></script>
    </html>
  );
}
