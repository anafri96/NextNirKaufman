import "./globals.css";
import Header from "./_components/header";
import {rubik} from "@/app/_lib/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <header>
          <div>
            <p className="text-gray-700 mb-4">
              By <span className="font-bold">Ana</span> | May 14, 2023
            </p>
          </div>
          <Header />
        </header>
        {children}
      </body>
    </html>
  );
}
