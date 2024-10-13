import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';
import Wrapper from '@/components/Wrapper';
import Image from 'next/image';

const ListPage = () => {
  return (
    <Wrapper className="relative">
      {/* Campaign */}
      <div className="hidden h-64 justify-between bg-pink-50 px-4 sm:flex">
        <div className="flex w-2/3 flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="w-max rounded-3xl bg-lama px-5 py-3 text-sm text-white">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* Filter */}
      <Filter />
      <h1 className="mt-12 text-xl font-semibold">Shoes For YOu</h1>
      <ProductList />
    </Wrapper>
  );
};
export default ListPage;
