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

export const metadata = {
  title: "HackBattle '24",
  description:
    "Website for HackBattle 2024, a hackathon organized by IEEE-CS VIT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pixeboy.variable}  ${crackman.variable}`}>
        {children}
      </body>
    </html>
  );
}
