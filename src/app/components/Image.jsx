export default function Image({ img }) {
    return (
        <div className=" h-fit  md:mb-0 flex flex-row items-center ">
          <img
          src={img}
          alt="speaker"
          className="object-cover md:h-[26%] h-[400px] mt-2"
        />
            

      </div>
    );
  }
  