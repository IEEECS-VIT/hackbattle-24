"use client";
import axios from "axios";
import Loading from "../components/loading";
import Image from "next/image";
import hacklogo from "../../../public/hacklogo-removebg-preview.png";
import { useEffect, useState } from "react";

export default function SponsorQR() {
    const [regNo, setRegno] = useState("");
    const [loading , setLoading] = useState(false);
    const accessToken = typeof window !== "undefined" ? localStorage.getItem("AccessToken") : null;

    useEffect(() => {
        const getRegNo = async () => {
            if (accessToken) {
                setLoading(true);
                try {
                    const response = await axios.get(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-reg-no`, 
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                            }
                        }
                    );
                    if (response.status === 200) {
                        setLoading(false);
                        setRegno(response.data.registrationNumber);
                    }
                } catch (error) {
                    setLoading(false);
                    alert("Failed to fetch registration number. Please try again later.");
                }
            }
        };
        getRegNo();
    }, [accessToken]);

    return (
        <div className="relative h-screen flex items-center justify-center">
            {loading && <Loading/>}
            <Image 
                src={hacklogo}
                width={250}
                height={250}
                className="absolute"
            />
            <p className="z-10 text-3xl font-pixeboy">{regNo}</p>
        </div>
    );
}
