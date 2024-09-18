import React from "react";
import Draggable from "react-draggable";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import local from "next/font/local";

export default function GoogleModal({ visible, onClose }) {
  const sampleResponse = {
    teamName: "1984",
    teamCode: "fhvnmd",
    teamLeader: {
      name: "Ansh Mehta",
      email: "ansh.mehta2022@vitstudent.ac.in",
    },
    teamMembers: [
      {
        name: "Ansh Mehta",
        email: "ansh.mehta2022@vitstudent.ac.in",
        isLeader: true,
      },
      {
        name: "Akshit Anand",
        email: "akshit.anand2022@vitstudent.ac.in",
        isLeader: false,
      },
    ],
  };

  const firebaseConfig = {
    apiKey: "hackbattle24-backend-orcin.vercel.app",
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
  if (!visible) return null;

  function getUserContext(accessToken) {
    console.log(accessToken);
    // accessToken is the Google Access Token received after login
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/login/verify-token`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        const userStatus = res.data.status;
        console.log(userStatus);
        if (userStatus === 0) {
          //User exists but not in a team
          //redirect to team creation / join page
        } else if (userStatus === 1) {
          //user goes to team
          //get team details
          localStorage.setItem("AccessToken", accessToken);
          window.location.href = "/team";
        }
      })
      .catch((error) => {
        console.error("Error fetching user context:", error);
      });
  }

  function handleClick() {
    // Implement Google login logic here
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        getUserContext(user.accessToken);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
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
<<<<<<< HEAD
            <button
              onClick={onClose}
              className="text-black hover:bg-red-300 transition-colors duration-200 w-4 h-4 flex items-center justify-center rounded-full bg-red-600 border border-black font-bold text-xs"
            >
              &#x2715;
            </button>
=======
>>>>>>> 1d62c05bc4bc5b92d4a825bf6fd15a7415b154b3
          </div>

          <div className="flex flex-col sm:flex-row justify-evenly w-[90%] ml-[2.5vw] sm:justify-around sm:items-center h-[90%] font-pixeboy text-[3vh] lg:text-[5vh]">
            <img
              src="finalgoogle.svg"
              className="h-[5vh] sm:h-[7.5vh] mt-[1vh] md:h-[8vh] lg:h-[20%] "
              alt="Final Google"
            />
<<<<<<< HEAD

            <button
              className="rounded-lg sm:text-[3.9vh] text-[2.5vh] px-[4vw] py-[1vh] h-[5vh] sm:h-[12.51vh] text-white border-black border-2 bg-[#FFC642] transition-colors duration-200"
=======
            <button
              className="rounded-lg sm:text-[3.9vh]  text-[2.5vh] px-[4vw] py-[1vh] h-[5vh] sm:h-[12.51vh] text-white border-black border-2 bg-[#FFC642] transition-colors duration-200"
>>>>>>> 1d62c05bc4bc5b92d4a825bf6fd15a7415b154b3
              style={{
                textShadow:
                  "1px 1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000",
              }}
<<<<<<< HEAD
              onClick={handleClick}
=======
              //onClick={handleClick}
>>>>>>> 1d62c05bc4bc5b92d4a825bf6fd15a7415b154b3
            >
              LOGIN WITH GOOGLE
            </button>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

