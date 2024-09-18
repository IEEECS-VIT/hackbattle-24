import localFont from "next/font/local";
import "./globals.css";

const pixeboy = localFont({
  src: "fonts/Pixeboy.ttf",
  variable: "--pixeboy",
});

const crackman = localFont({
  src: "fonts/Crackman.otf",
  variable: "--crackman",
});

const mercutio = localFont({
  src: "fonts/Mercutio.ttf",
  variable: "--mercutio",
});

export const metadata = {
  title: "HackBattle '24",
  description:
    "Website for HackBattle 2024, a hackathon organized by IEEE-CS VIT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${pixeboy.variable}  ${crackman.variable} ${mercutio.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
