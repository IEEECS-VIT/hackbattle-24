import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 z-50">
      <Image
        src="./loader.gif"
        alt="Loading..."
        style={{ height: "10vh", width: "10vh" }}
      />
    </div>
  );
}
