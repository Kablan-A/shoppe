import "./globals.scss";
import { DM_Sans } from "next/font/google";
import BootstrapClient from "./components/BootstrapClient";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata = {
  title: "Shoppe",
  description: "Jewellery online store",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Nav />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
