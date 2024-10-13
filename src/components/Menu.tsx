'use client';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Menu = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={clsx('cursor-pointer', className)}>
      <Image
        className="cursor-pointer"
        src="/menu.png"
        alt="menu"
        width={28}
        height={28}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="to-20 absolute left-0 z-50 flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center gap-8 bg-black text-xl text-white">
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
};
export default Menu;
