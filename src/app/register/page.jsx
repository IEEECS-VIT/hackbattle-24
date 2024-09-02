import RegisterForm from "../components/RegisterForm";

export default function Memories() {

    return (
            <div className="p-8 bg-register bg-[#2ebf54]">
            <img src="" alt="" />
            <h1 className="text-5xl text-center font-pixeboy text-white ">HACKBATTLE 2024</h1>
            <RegisterForm/>
            <div className="mt-4">
                <h2 className="text-xl text-center font-pixeboy">ALREADY REGISTERED? <a href="#">LOG IN</a> </h2>
            </div>
            </div>
            
    );
}
