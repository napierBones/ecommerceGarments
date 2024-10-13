'use client'
import Image from 'next/image';
import { useState } from 'react';

const images = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="relative h-[500px]">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="rounded-md object-cover"
        />
      </div>
      <div className="mt-8 flex justify-between gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setIndex(index)}
            className="relative mt-8 h-32 w-1/4 gap-4 cursor-pointer"
          >
            <Image
              src={img.url}
              alt=""
              fill
              className="rounded-md object-cover"
              sizes="30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductImages;
