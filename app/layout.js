import { Inter } from "next/font/google";
import "./globals.css";
import "antd/dist/reset.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ethiopian Truck Rental",
  description: "Rent trucks across Ethiopian cities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="min-h-screen bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
