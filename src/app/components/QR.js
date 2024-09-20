import Draggable from "react-draggable";
import QRCode from "react-qr-code";

export default function QR({visible, onClose, code}){
    return(

        <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50 ${visible ? 'visible' : 'hidden'}`}>
            <Draggable handle=".handle">
            <div className="relative w-[80vw] sm:w-[65vw] md:w-[50vw] lg:w-[35vw] h-auto border-black border-4 shadow-[-10px_10px_0_0_#000000] lg:shadow-[-20px_20px_0_0_#000000] bg-white z-60">
                <div className="bg-[#28B6BA] h-[2vh] lg:h-[3vh] flex items-center border-black border-b-2 pl-[0.5vw] handle cursor-move">
                    <img src="/yellow-circles.svg" alt="Yellow Circles" className="h-[1vh] lg:h-[2vh]" />
                </div>
                <div className="flex flex-col items-center h-[38vh] font-pixeboy text-[3vh] lg:text-[5vh]">
                    <div style={{ height: "auto", margin: "auto", maxWidth: "20vh", width: "100%" }} className="absolute lg:top-16 top-12">
                        <QRCode
                            size={256}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={code}
                            viewBox={`0 0 256 256`}
                            bgColor="#2F3C7E"
                            fgColor="#FBEAEB"
                        />
                    </div>
                    <button className="bg-[#3E8BFF] mt-[5vh] absolute bottom-4 px-[2vw] text-white border-black border-2" onClick={onClose}>Done</button>
                </div>
            </div>
            </Draggable>
        </div>
    )
}