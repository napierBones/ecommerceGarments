import Image from 'next/image';
import Link from 'next/link';
import men1 from '../../public/men1.jpg';
import men2 from '../../public/men2.jpg';

const ProductList = () => {
  return (
    <div className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-16">
      <Link
        href="/test"
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            className="easy absolute z-10 rounded-md object-cover transition-opacity duration-500 hover:opacity-0"
            src={men1}
            alt=""
            fill
            sizes="25vw"
          />
          <Image
            className="absolute rounded-md object-cover"
            src={men2}
            alt=""
            fill
            sizes="25vw"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="w-max rounded-2xl px-4 py-2 text-xs text-lama ring-1 ring-lama hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            className="easy absolute z-10 rounded-md object-cover transition-opacity duration-500 hover:opacity-0"
            src={men1}
            alt=""
            fill
            sizes="25vw"
          />
          <Image
            className="absolute rounded-md object-cover"
            src={men2}
            alt=""
            fill
            sizes="25vw"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="w-max rounded-2xl px-4 py-2 text-xs text-lama ring-1 ring-lama hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            className="easy absolute z-10 rounded-md object-cover transition-opacity duration-500 hover:opacity-0"
            src={men1}
            alt=""
            fill
            sizes="25vw"
          />
          <Image
            className="absolute rounded-md object-cover"
            src={men2}
            alt=""
            fill
            sizes="25vw"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="w-max rounded-2xl px-4 py-2 text-xs text-lama ring-1 ring-lama hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            className="easy absolute z-10 rounded-md object-cover transition-opacity duration-500 hover:opacity-0"
            src={men1}
            alt=""
            fill
            sizes="25vw"
          />
          <Image
            className="absolute rounded-md object-cover"
            src={men2}
            alt=""
            fill
            sizes="25vw"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="w-max rounded-2xl px-4 py-2 text-xs text-lama ring-1 ring-lama hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};
export default ProductList;
