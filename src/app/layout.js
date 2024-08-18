import localFont from "next/font/local";
import "./globals.css";

const pixeboy = localFont({
  src: "fonts/Pixeboy.ttf",
  variable: "--pixeboy",
});

export const metadata = {
  title: "HackBattle '24",
  description:
    "Website for HackBattle 2024, a hackathon organized by IEEE-CS VIT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pixeboy.variable}`}>{children}</body>
    </html>
  );
}
