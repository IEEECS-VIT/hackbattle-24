import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Draggable from "react-draggable";
import Loading from "./loading";

const SubmissionPopup = ({ visible, onCancel }) => {
  const [submission1, setSubmission1] = useState(
    localStorage.getItem("githubLink") || ""
  );
  const [submission2, setSubmission2] = useState("");
  const [submission3, setSubmission3] = useState("");
  const [selectedTrack, setSelectedTrack] = useState("");
  const [trackSubmitted, setTrackSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const tracks = [
    "Game Dev",
    "Fintech",
    "HealthCare",
    "Open Innovation",
    "SDG",
    "IOT",
  ];

  if (!visible) return null;

  const handleSubmit = async () => {
    if (!selectedTrack) {
      toast.error("Please select a track.");
      return;
    }

    if (!submission1.trim()) {
      toast.error("Github link is required.");
      return;
    }

    const githubUrlPattern =
      /^(https?:\/\/)?(www\.)?(github\.com\/[a-zA-Z0-9._-]+\/[a-zA-Z0-9._-]+(\/)?)/;

    if (!githubUrlPattern.test(submission1)) {
      toast.error("Please enter a valid GitHub link.");
      return;
    }

    try {
      setIsLoading(true);
      const trackResponse = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/submit/track-submission`,
        { track: selectedTrack },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
          },
        }
      );

      if (trackResponse?.status === 200) {
        setIsLoading(false);
        setTrackSubmitted(true);
        // toast.success("Track submission successful!");
        onCancel();
      } else {
        setIsLoading(false);
        const errorMessage = trackResponse?.data?.error;
        if (errorMessage) {
          toast.error(errorMessage);
          return;
        }
      }

      const submissionData = {
        githubLink: submission1,
        figmaLink: submission2,
        otherLink: submission3,
      };

      const linkResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/submit/link-submission`,
        submissionData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
          },
        }
      );

      if (linkResponse?.status === 200) {
        setIsLoading(false);
        toast.success("Link submission successful!");
        localStorage.setItem("githubLink", submission1);
        onCancel();
      }
    } catch (error) {
      setIsLoading(false);
      handleSubmissionError(error);
    }
  };

  const handleSubmissionError = (error) => {
    setIsLoading(false);
    if (error.response?.status === 400) {
      const errorMessage = error.response?.data?.error;
      if (errorMessage === "Track already submitted") {
        toast.error("Your team has already submitted a track.");
      } else if (
        errorMessage ===
        "At least 3 team members are required to submit a track"
      ) {
        toast.error("Your team needs at least 3 members to submit a track.");
      } else {
        toast.error("Invalid submission data.");
      }
    } else if (error.response?.status === 401) {
      toast.error("Unauthorized access. Please login again.");
    } else if (error.response?.status === 403) {
      toast.error("Only team leaders can submit!");
    } else if (error.response?.status === 404) {
      toast.error("Team not found. Please try again.");
    } else if (error.response?.status === 500) {
      toast.error("Internal server error. Please try again.");
    } else {
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-500 backdrop-blur-sm ">
      {isLoading && <Loading />}
      <Draggable handle=".handle">
        <div className="h-fit sm:w-[450px] w-[90%]  rounded-lg bg-red-600 relative overflow-y-auto flex flex-col border-black border-2 ">
          <div className="bg-yellow-300 text-center py-2 flex justify-between items-center border-b-2 border-pink-300 px-4 handle cursor-move">
            <span className="text-[#6E57FF] font-pixeboy text-3xl">
              {"<SUBMISSION>"}
            </span>
            <div className="flex space-x-2 items-center ">
              <div className="w-3 h-3 border-2 border-[#6E57FF] rounded-full sm:block hidden"></div>
              <div className="w-3 h-3 border-2 border-[#6E57FF] rounded-full sm:block hidden"></div>
              <div className="w-3 h-3 border-2 border-[#6E57FF] rounded-full sm:block hidden"></div>
              <button
                onClick={onCancel}
                className="text-black ml-2 hover:bg-red-300 transition-colors duration-200 w-6 h-6 flex items-center justify-center rounded-full bg-red-600 border border-black font-bold text-xs"
              >
                &#x2715;
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-4 px-2 py-4">
            <select
              value={selectedTrack}
              onChange={(e) => setSelectedTrack(e.target.value)}
              disabled={trackSubmitted}
              className="font-pixeboy text-[1.7vh] md:text-[2.5vh] h-[40px] w-full text-black rounded-lg border-2 border-pink-300"
            >
              <option value="">Select Track</option>
              {tracks.map((track) => (
                <option key={track} value={track}>
                  {track}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Github Link (Required)"
              value={submission1}
              onChange={(e) => setSubmission1(e.target.value)}
              className="font-pixeboy text-[1.7vh] md:text-[2.5vh] h-[40px] w-full text-black rounded-lg border-2 border-pink-300 resize-none"
            />
            <textarea
              placeholder="Figma Link (Optional)"
              value={submission2}
              onChange={(e) => setSubmission2(e.target.value)}
              className="font-pixeboy text-[2.4vh] md:text-[2.8vh] h-[40px] w-full text-black rounded-lg border-2 border-pink-300 resize-none"
            />
            <textarea
              placeholder="Other Link (Optional)"
              value={submission3}
              onChange={(e) => setSubmission3(e.target.value)}
              className="font-pixeboy text-[2.4vh] md:text-[2.8vh] h-[40px] w-full text-black rounded-lg border-2 border-pink-300 resize-none"
            />
          </div>

          <div className="flex justify-between m-4 px-4 w-[80%] mx-auto">
            <button
              className="rounded-lg sm:text-[3vh] text-[2vh] px-[2vw] h-[5vh] sm:h-[8vh] text-black border-black border-2 bg-[#FDE047] transition-colors duration-200 hover:opacity-90 font-pixeboy"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="rounded-lg sm:text-[3vh] text-[2vh] px-[2vw] h-[5vh] sm:h-[8vh] text-black border-black border-2 bg-[#FDE047] transition-colors duration-200 hover:opacity-90 font-pixeboy"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default SubmissionPopup;
