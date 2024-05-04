"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Gallery = () => {
  const [main, setMain] = useState(12);

  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="bg-foreground -z-20 mx-auto max-w-7xl rounded-md px-4 py-2">
      <div className="flex flex-wrap items-center justify-center">
        <Image
          src={`/gallery/${main}.jpg`}
          alt="Haulin Hatchets Image 12"
          className="h-[500px] w-full object-cover"
          width={1920}
          height={780}
        />
      </div>

      <Carousel
        className="pt-4"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem
              key={image}
              className="basis-1/2 md:basis-1/4 lg:basis-1/6"
            >
              <button onClick={() => setMain(image)}>
                <Image
                  src={`/gallery/${image}.jpg`}
                  alt={`Haulin Hatchets Image ${image}`}
                  className="h-48 w-96 object-cover"
                  width={100}
                  height={200}
                />
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
