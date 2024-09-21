"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "./loading";

export default function isAuth(Component) {
  return function IsAuth(props) {
    const [isVerified, setIsVerified] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

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
            window.location.href = "/team";
          } else {
            setIsVerified(true);
          }
        } catch (err) {
          toast.error("Unable to verify token. Please login again.");
          localStorage.removeItem("AccessToken");
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
