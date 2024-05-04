import Image from "next/image";

export const Gallery = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="bg-foreground -z-20 mx-auto max-w-7xl rounded-md p-2">
      <div className="flex flex-wrap items-center justify-center">
        <Image
          src="/gallery/12.jpg"
          alt="Haulin Hatchets Image 12"
          className="h-[300px] w-full object-cover md:h-[400px] lg:h-[500px]"
          width={1920}
          height={780}
        />
      </div>
      <div className="bg-foreground flex gap-2 overflow-x-scroll pt-2">
        {images.map((image) => (
          <Image
            key={image}
            src={`/gallery/${image}.jpg`}
            alt={`Haulin Hatchets Image ${image}`}
            className="h-48 w-auto object-cover"
            width={100}
            height={200}
          />
        ))}
      </div>
    </div>
  );
};
