import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import useWindowWidth from '../../../utils/hooks/use-window-width';
import Hamburger from '../../../public/Hamburger';
import useScrollY from '../../../utils/hooks/use-scroll-y';
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import ImageBlur from "@/components/ImageBlur";
i18n.t('translation.key');

const Header = () => {
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const width = useWindowWidth();
  const scrollY = useScrollY();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const { t } = useTranslation();

  const mapHeaderLinks = () => {
    const header = t('header', { returnObjects: true });
    const headerArray = Array.isArray(header) ? header : [header];
    return headerArray.map(({ url, text }, index) => {
      return (
        <Link href={url} key={index} onClick={toggleHamburger}>
          <div className="text-[20px] leading-[25px] text-[#FFFBFB]">{text}</div>
        </Link>
      );
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 z-[999] w-full transition-colors delay-100 ${
        scrollY > 80 ? 'bord er-b border-b-white/[30%] bg-[#1B1B1B]' : 'bg-transparent'
      }`}
    >
      <div className="px-[20px] xs:px-[50px] md:px-[80px] lg:px-[150px] bg-transparent h-[70px] py-[16px] lg:py-[30px] 2xl:py-[55px] flex flex-row justify-between items-center">
        <Link href="/" className="flex flex-row">
          <div className="relative">
            <div className="w-[90px] h-[56px] 2xl:w-[70px] 2xl:h-[56px]">
              <Image
                src="/foisoare.svg"
                alt="image news"
                layout="fill"
                objectFit="contain"
                quality={100}
                priority={true}
              />
            </div>
          </div>
          <div className="relative mt-2.5 overflow-hidden">
            <div className="w-[190px] h-[156px] 2xl:w-[200px] 2xl:h-[196px]">
              <Image
                src="/font.svg"
                alt="image news"
                layout="fill"
                objectFit="contain"
                quality={100}
                priority={true}
              />
            </div>
          </div>
        </Link>
        <div className="flex flex-row gap-[40px]">
          <div className="relative z-[100]">
            <div
              className={`${
                hamburgerOpen && width <= 1024
                  ? 'fixed flex flex-col bg-[#1B1B1B] top-0 right-0 bottom-0 w-3/5 py-[50px] justify-center items-center gap-6 -mt-[400px]'
                  : 'relative grid-cols-4 hidden lg:flex lg:gap-[35px] flex items-center'
              }`}
            >
              {mapHeaderLinks()}
              <Link href="#contact">
                <div className="text-[#1B1B1B] bg-[#FFFBFB] rounded-[8px] px-[24px] py-[12px] border font-semibold" onClick={toggleHamburger}>
                  {t('footer.0.contact')}
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={`w-full flex justify-end lg:hidden py-6 z-[9999]`} onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
