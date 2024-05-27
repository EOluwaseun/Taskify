import { cn } from '@/lib/utils';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const textFont = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/next.svg" alt="logo" height={30} width={30} />
        <p className={cn('text-lg text-neutral-700 pb-1', textFont.className)}>
          Taskify
        </p>
      </div>
    </Link>
  );
};
