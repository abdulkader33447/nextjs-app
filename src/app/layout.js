import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//custom font
const poppins = Poppins({
  weight: ["400","500","600","700","800"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Learning nextjs",
    template: "%s | Learning nextjs",
  },
  keywords: ["Next.js", "React", "JavaScript", "learning", "playGround"],
  description: "Trying to learn nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <NavBar />
        <main className="h-screen ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
