import Image from 'next/image';
import Link from 'next/link';
import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <Wrapper className="mt-24 bg-gray-100 py-24 text-sm">
      {/* top */}
      <div className="flex flex-col justify-between gap-24 md:flex-row">
        {/* left */}
        <div className="flex w-full flex-col gap-8 md:w-1/2 lg:w-1/4">
          <Link href="/">
            <div className="text-2xl tracking-wide">Wasif</div>
          </Link>
          <p className="">PNY Trainings 14 th Floor, Arfa Karim Tower Lahore</p>
          <span className="font-semibold">muhammad.wasif.964@gmail.com</span>
          <span className="font-semibold">0312 49 34 24 5</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* center*/}
        <div className="hidden w-1/2 justify-between lg:flex">
          <div className="flex flex-col justify-between">
            <h1 className="text-lg font-medium">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Affiliate</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-lg font-medium">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-lg font-medium">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex w-full flex-col gap-8 md:w-1/2 lg:w-1/4">
          <h1 className="text-lg font-medium">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="w-3/4 p-4"
            />
            <button className="w-1/4 bg-lama text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="mt-16 flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="">&copy; 2024 Wasif&apos;s Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="mr-4 text-gray-500">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="text-center">
            <span className="mr-4 text-gray-500">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;
