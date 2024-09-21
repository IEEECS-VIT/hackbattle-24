import Image from 'next/image';

export default function Speaker() {
  return (
    <section className="min-h-screen h-fit flex flex-col gap-6 p-[1rem] items-center relative bg-[#fb624c] md:p-[2rem]">
      <p className="text-6xl sm:text-8xl md:text-9xl font-crackman text-black">SPEAKER</p>
      <div className="flex justify-center items-center w-full">
        {/* The parent div needs a set height */}
        <div className="w-[30vw] h-[40vw] relative">
          <Image
            src="/image 12.png"
            alt="speaker"
            layout="fill"
            sizes="(max-width: 500px) 50vw, 30vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
