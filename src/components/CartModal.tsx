'use client';

import Image from 'next/image';
import cartimage from '../../public/cartimage.jpg';
const CartModal = () => {
  const cartItems = true;
  return (
    <div className="absolute right-0 top-12 z-20 flex w-max flex-col gap-6 rounded-md bg-white p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          {/* List */}
          <div className="flex flex-col gap-8">
            {/* itme */}

            <div className="flex gap-4">
              <Image
                src={cartimage}
                alt=""
                width={72}
                height={96}
                className="rounded-md object-cover"
              />
              <div className="flex w-full flex-col justify-between">
                {/* top */}
                <div className="">
                  {/* title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="rounded-sm bg-gray-50 p-1">$56</div>
                  </div>
                  {/* desc */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* itme */}
            <div className="flex gap-4">
              <Image
                src={cartimage}
                alt=""
                width={72}
                height={96}
                className="rounded-md object-cover"
              />
              <div className="flex w-full flex-col justify-between">
                {/* top */}
                <div className="">
                  {/* title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="rounded-sm bg-gray-50 p-1">$56</div>
                  </div>
                  {/* desc */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$49</span>
            </div>
            <p className="mb-4 mt-2 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md px-4 py-3 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md bg-black px-4 py-3 text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default CartModal;
