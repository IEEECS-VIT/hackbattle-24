"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Landing from "./components/landing";
import About from "./components/about";
import Tracks from "./components/track";
import Speaker from "./components/speaker";
import Conducted from "./components/conducted";
import FAQ from "./components/Faq";
import Google from "./components/Google";

export default function Home() {
  const [googleVisible, setGoogleVisible] = useState(false);
  const [loginStatus, setLoginStatus] = useState("LOGIN");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const accessToken = localStorage.getItem("AccessToken");
      if (accessToken) {
        try {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/login/verify-token`,
            {},
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          if (res.data.status === 1) {
            setLoginStatus("TEAM");
          }
        } catch (err) {
          console.error("Error verifying token:", err);
          localStorage.removeItem("AccessToken");
        }
      }
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  const handleLoginAction = () => {
    if (loginStatus === "LOGIN") {
      setGoogleVisible(true);
    } else {
      window.location.href = "/team";
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Or a more sophisticated loading component
  }

  return (
    <main className="overflow-hidden w-full">
      <Google
        visible={googleVisible}
        onClose={() => setGoogleVisible(false)}
        onLoginSuccess={() => {
          setLoginStatus("TEAM");
          setGoogleVisible(false);
        }}
      />
      <Navbar loginAction={handleLoginAction} text={loginStatus} />
      <Landing />
      <About />
    </main>
  );
}
