'use client';
import { useState } from 'react';

const Add = () => {
  // temporary
  const stock = 4;

  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type: 'i' | 'd') => {
    if (type === 'd' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === 'i' && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex w-32 items-center justify-between rounded-3xl bg-gray-100 px-4 py-2">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity('d')}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity('i')}
            >
              +
            </button>
          </div>
          <div className="">
            Only <span className="text-orange-500">4 items</span> left!
            <br /> Don&apos;t miss it
          </div>
        </div>
        <button className="disabled:ring-none w-36 rounded-3xl px-4 py-2 text-sm text-lama ring-1 ring-lama hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Add;
