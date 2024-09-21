import React, { useState } from "react";
import Draggable from "react-draggable";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import Loading from "./loading";

export default function GoogleModal({ visible, onClose, onLoginSuccess }) {
  if (!visible) return null;
  const [loading, setLoading] = useState(false);
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "hackathon-2024-1d92e.firebaseapp.com",
    projectId: "hackathon-2024-1d92e",
    storageBucket: "hackathon-2024-1d92e.appspot.com",
    messagingSenderId: "211234002600",
    appId: "1:211234002600:web:d4a73bf2fffae1918a549d",
  };

  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    hd: "vitstudent.ac.in",
    prompt: "select_account",
  });

  const auth = getAuth();

  async function getUserContext(accessToken) {
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/login/verify-token`,
        {},
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const userStatus = res.data.status;
      console.log(userStatus);
      localStorage.setItem("UserStatus", userStatus);
      localStorage.setItem("AccessToken", accessToken);
      if (userStatus == 0) {
        // User exists but not in a team
        setLoading(false);
        window.location.href = "/register";
        console.log("User exists but not in a team");
      } else if (userStatus == 1) {
        setLoading(false);
        // User is in a team
        onLoginSuccess();
        window.location.href = "/team";
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching user context:", error);
      // Handle error (e.g., show error message to user)
    }
  }

  async function handleClick() {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      await getUserContext(user.accessToken);
    } catch (error) {
      console.error("Login error:", error);
      // Handle Errors here (e.g., show error message to user)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      {loading && <Loading />}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <Draggable handle=".handle">
        <div className="relative z-50 w-[65vw] sm:h-[35vh] h-[25vh] lg:h-[42.5vh] lg:w-[40.77vw] border-black border-4 shadow-[-10px_10px_0_0_#000000] lg:shadow-[-20px_20px_0_0_#000000] bg-white">
          <div className="bg-[#28B6BA] h-[2vh] lg:h-[3vh] flex justify-between items-center border-black border-b-2 px-[0.5vw] handle cursor-move">
            <img
              src="/yellow-circles.svg"
              alt="Yellow Circles"
              className="h-[1vh] lg:h-[2vh] w-auto"
            />
            <button
              onClick={onClose}
              className="text-black hover:bg-red-300 transition-colors duration-200 w-4 h-4 flex items-center justify-center rounded-full bg-red-600 border border-black font-bold text-xs"
            >
              &#x2715;
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-evenly w-[90%] ml-[2.5vw] sm:justify-around sm:items-center h-[90%] font-pixeboy text-[3vh] lg:text-[5vh]">
            <img
              src="finalgoogle.svg"
              className="h-[5vh] sm:h-[7.5vh] mt-[1vh] md:h-[8vh] lg:h-[20%] "
              alt="Final Google"
            />

            <button
              className="rounded-lg sm:text-[3.9vh] text-[2.5vh] px-[4vw] py-[1vh] h-[5vh] sm:h-[12.51vh] text-white border-black border-2 bg-[#FFC642] transition-colors duration-200"
              style={{
                textShadow:
                  "1px 1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000",
              }}
              onClick={handleClick}
            >
              LOGIN WITH GOOGLE
            </button>
          </div>
        </div>
      </Draggable>
    </div>
  );
}
