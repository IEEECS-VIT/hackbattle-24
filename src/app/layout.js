import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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

const toastOptions = {
  className: "font-pixeboy border border-black text-xl",
  duration: 5000,
  style: {
    background: "#F5ED02",
    color: "black",
  },
  success: {
    duration: 3000,
    theme: {
      primary: "#F5ED02",
      secondary: "black",
    },
  },
  error: {
    duration: 3000,
    theme: {
      primary: "#F5ED02",
      secondary: "black",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${pixeboy.variable}  ${crackman.variable} ${mercutio.variable}`}
      >
        <Toaster position="bottom-right" toastOptions={toastOptions} />
        {children}
      </body>
    </html>
  );
}
