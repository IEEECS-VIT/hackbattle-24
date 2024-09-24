import Image from 'next/image';

export default function ImageComponent({ img }) {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-[30vw] h-auto relative">
        <img
          src={img}
          alt="speaker"
          layout="fill"
          sizes='(max-width: 500px) 50vw, 30vw'
          className="object-cover"
        />
      </div>
    </div>
  );
}
