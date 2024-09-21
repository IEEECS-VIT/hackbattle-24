"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "./loading";

export default function isAuth(Component) {
  return function IsAuth(props) {
    const [isVerified, setIsVerified] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      const checkAuthStatus = async () => {
        const accessToken = localStorage?.getItem("AccessToken");

        if (!accessToken) {
          setLoading(false);
          toast.error("Please login to access this page.");
          router.push("/");
          return;
        }

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
            localStorage.setItem("UserStatus", 1);
            if (pathname === "/register") {
              router.push("/team");
            }
            setIsVerified(true);
          } else if (res?.data?.status === 0) {
            localStorage.setItem("UserStatus", 0);
            setIsVerified(true);
            if (pathname === "/team") {
              router.push("/register");
            }
          }
        } catch (err) {
          toast.error("Unable to verify token. Please login again.");
          localStorage.removeItem("AccessToken");
          localStorage.removeItem("UserStatus");
          router.push("/");
        } finally {
          setLoading(false);
        }
      };

      checkAuthStatus();
    }, [router]);

    if (loading) {
      return <Loading />;
    }

    if (!isVerified) {
      return null;
    }

    return <Component {...props} />;
  };
}
