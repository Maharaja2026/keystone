import "./globals.css";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import localFont from "next/font/local";

const gilroySemibold = localFont({
  src: "./fonts/gilroy-semibold.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const gilroyRegular = localFont({
  src: "./fonts/gilroy-regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const gilroyMedium = localFont({
  src: "./fonts/gilroy-medium.ttf",
  variable: "--font-gilroy-medium",
  weight: "100 900",
});

export const metadata = {
  title: "KeyStone",
  description: "Best IT staffing solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${gilroyRegular.variable} ${gilroySemibold.variable} ${gilroyMedium.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Symbol.svg" />
      </head>
      <body className="bg-white">
        <Header />
        <main className="mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}