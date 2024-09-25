import QRCode from "react-qr-code";
import Image from "next/image";
import hacklogo from "../../../public/hacklogo-removebg-preview.png";

export default function sponsorqr(){
    return(
        <div className=" relative h-screen flex items-center justify-center">
            <Image 
                src={hacklogo}
                width={250}
                height={250}
                className="absolute"
            />
            <p className="z-10  text-3xl font-pixeboy ">23BCE0739</p>
        </div>
    )
}