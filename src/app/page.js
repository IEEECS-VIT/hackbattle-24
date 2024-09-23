"use client";

import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Landing from "./components/landing";
import About from "./components/about";
import Tracks from "./components/track";
import Conducted from "./components/conducted";
import FAQ from "./components/Faq";
// import Loading from "./components/loading";
import Google from "./components/Google";
import Speaker from "./components/speaker";

export default function Home() {
  const [googleVisible, setGoogleVisible] = useState(false);
  const [loginStatus, setLoginStatus] = useState("LOGIN");

  const checkAuthStatus = useCallback(async () => {
    const accessToken = localStorage?.getItem("AccessToken");
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
        if (res?.data?.status === 1) {
          setLoginStatus("Dashboard");
          localStorage.setItem("UserStatus", 1);
        } else {
          setLoginStatus("Register");
          localStorage.setItem("UserStatus", 0);
        }
      } catch (err) {
        toast.error("Unable to verify token. Please login again.");
        localStorage.removeItem("AccessToken");
        localStorage.removeItem("UserStatus");
      }
    }
  }, []);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const handleLoginAction = () => {
    if (loginStatus === "LOGIN") {
      setGoogleVisible(true);
    } else {
      localStorage.removeItem("AccessToken");
      localStorage.removeItem("UserStatus");
    }
  };

  return (
    <>
      <main className="overflow-hidden w-full">
        <Google
          visible={googleVisible}
          onClose={() => setGoogleVisible(false)}
          onLoginSuccess={() => {
            setLoginStatus("TEAM");
            setGoogleVisible(false);
          }}
        />
        <Navbar
          loginAction={handleLoginAction}
          text={loginStatus}
          setGoogleVisible={() => setGoogleVisible(true)}
        />
        <Landing loginStatus={loginStatus}
        setGoogleVisible={() => setGoogleVisible(true)}
        />
        <About />
        <Tracks />
        <Speaker />
        <Conducted />
        <FAQ />
      </main>
    </>
  );
}
