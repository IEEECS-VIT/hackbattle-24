"use client";
import Registration from "../components/Login";

export default function Page() {
  return (
<<<<<<< HEAD
    <div className="relative p-8 bg-register bg-[#2ebf54] h-screen flex flex-col items-center justify-center overflow-hidden">
      <img
        src="/ieeecslogo.svg"
        alt="IEEE CS Logo"
        className="absolute top-8 left-8 w-30 h-auto"
      />
      <h1
        className="text-5xl text-center font-pixeboy text-white mt-8"
        style={{
          textShadow: `
                        1px 1px 0 #000, 
                        -1px -1px 0 #000, 
                        1px -1px 0 #000, 
                        -1px 1px 0 #000, 
                        0.2rem 0.2rem 0 #ff0000, 
                        0.2rem -0.2rem 0 #0D9C9F
                    `,
        }}
      >
        HACKBATTLE 2024
      </h1>
      <RegisterForm role="teamLeader" />{" "}
      {/* Change to "member" to test the other case */}
      <div className="mb-8 flex items-center justify-center">
        <h2
          className="text-xl text-center font-pixeboy text-white"
          style={{
            textShadow: `
                            1px 1px 0 #000, 
                            -1px -1px 0 #000, 
                            1px -1px 0 #000, 
                            -1px 1px 0 #000, 
                            0.15rem 0.15rem 0 #ff0000, 
                            0.15rem -0.15rem 0 #0D9C9F
<<<<<<< HEAD
                        `,
          }}
        >
          ALREADY REGISTERED?{" "}
          <a href="#" className="text-yellow-300">
            LOG IN
          </a>
        </h2>
      </div>
    </div>
=======
    <>
      <Registration />
    </>
>>>>>>> 48b516553f5acdc905065954acb7c3240e7b85ae
  );
}
=======
                        ` 
                    }}
                >
                    ALREADY REGISTERED? <a href="#" className="text-yellow-300">LOG IN</a>
                </h2>
            </div>
        </div>
    );
}
>>>>>>> 1d62c05bc4bc5b92d4a825bf6fd15a7415b154b3
