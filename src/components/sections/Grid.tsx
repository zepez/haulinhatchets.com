import Image from "next/image";

export const Grid = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        <Image
          src="/pics/home/12.jpg"
          alt="Haulin Hatchets Image 12"
          className="object-cover w-full h-[300px] md:h-[400px] lg:h-[500px] -z-20"
          width={1920}
          height={780}
        />
      </div>
      <div className="flex gap-2 p-2 overflow-x-scroll bg-white">
        {images.map((image) => (
          <Image
            key={image}
            src={`/pics/home/${image}.jpg`}
            alt={`Haulin Hatchets Image ${image}`}
            className="object-cover w-auto h-48"
            width={100}
            height={200}
          />
        ))}
      </div>
    </>
  );
};
