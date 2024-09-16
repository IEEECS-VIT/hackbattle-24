import Image from 'next/image';

export default function ImageComponent({ img }) {
  return (
    <>
      {/* <div className=" h-fit  md:mb-0 flex flex-row items-center ">
          <img
          src={img}
          alt="speaker"
          className="object-cover md:h-[26%] h-[400px] mt-2"
        />
      </div> */}

<div className="h-fit md:mb-0 flex flex-row items-center w-full">
  <Image
    src={img}
    alt="speaker"
    fill
    sizes='(max-width: 500px) 10vw, (max-width: 400px) 5vw, 12vw'
    // className="object-cover" // Use fill layout and Tailwind for object fitting
    className="object-cover md:h-[26%] h-[400px] mt-2"
  />
</div>

    </>
  );
}
