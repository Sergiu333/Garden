import Image from 'next/image';

import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import Link from "next/link";

i18n.t('translation.key');

const Footer = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (event: any) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer id="contact">
      <div className="px-[20px] xs:px-[50px] md:px-[80px] lg:px-[150px] flex flex-col lg:flex-row justify-between py-[64px] gap-10 lg:gap-0">
        <div className="flex flex-col gap-[18px] justify-center">
          <div className="relative">
            <div className="w-[100px] h-[100px] 2xl:w-[200px] 2xl:h-[200px]">
              <Image
                src="/logo_white.png"
                alt="image news"
                layout="fill"
                objectFit="contain"
                quality={100}
                priority={true}
              />
            </div>
          </div>
          <div className="text-[16px] leading-[158%] text-w/[80%] lg:w-[300px]">
            Cu pasiune și măiestrie, realizăm foisoare personalizate, transformând grădinile în oaze de relaxare și frumusețe.
          </div>
        </div>
        <div className="flex flex-col gap-[18px] text-w/[80%]">
          <div className="font-semibold leading-[29px] tracking-[0.02em]">
            {t('footer.0.contact')}
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-row gap-[8px]  text-[16px] leading-[20px]">
              <div>
                r. Soldanesti st. Cobilea
              </div>
            </div>
            <div className="flex flex-row gap-[8px] items-center">
              <div className="relative w-[20px] h-[20px]">
                <Image src="/phone.svg" alt="phone call" fill style={{ objectFit: 'contain' }} />
              </div>
              <div>+373 60 895 533</div>
            </div>
            <div className="flex flex-row gap-[8px] items-center">
              <div className="relative w-[20px] h-[20px]">
                <Image src="/mail.svg" alt="phone call" fill style={{ objectFit: 'contain' }} />
              </div>
              <div>anghelenicis59@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[64px] text-w/[80%]">
          <div className="flex flex-col gap-[18px]">
            <div className="font-semibold leading-[29px] tracking-[0.02em]">
              {t('footer.0.follow')}
            </div>
            <div className="flex flex-row gap-[25px] lg:justify-center items-center ">
              <Link href="https://www.instagram.com/foisoare_md/" target="_blank">
                <div className="p-[8px] rounded-[8px] bg-[#2C2B2B] flex justify-center items-center">
                  <div className="relative w-[25px] h-[25px]">
                    <Image
                        src="/instagram.svg"
                        alt="image"
                        fill={true}
                        style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </Link>
              <Link href="https://www.tiktok.com/@foisoare.la.comanda" target="_blank">
                <div className="p-[8px] rounded-[8px] bg-[#2C2B2B] flex justify-center items-center">
                  <div className="relative w-[25px] h-[25px]">
                    <Image
                        src="/TikTok.svg"
                        alt="image"
                        fill={true}
                        style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100091588904774" target="_blank">
                <div className="p-[8px] rounded-[8px] bg-[#2C2B2B] flex justify-center items-center">
                  <div className="relative w-[25px] h-[25px]">
                    <Image
                        src="/facebook.svg"
                        alt="image"
                        fill={true}
                        style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/*<select*/}
          {/*  id="languages"*/}
          {/*  className="w-fit lg:w-full bg-[#1B1B1B] border border-w/[65%] text-w/[65%] text-sm rounded-lg focus:ring-w/[65%] focus:border-w/[65%] block p-2.5 border border-w/[65%] rounded-[8px] py-[15px] px-[18px]"*/}
          {/*  onChange={changeLanguage}*/}
          {/*>*/}
          {/*  <option selected>{t('Romana - Ro')}</option>*/}
          {/*  <option value="ro">{t('English - En')}</option>*/}
          {/*  <option value="ru">{t('Rusa - Ru')}</option>*/}
          {/*</select>*/}
        </div>
      </div>
      <div className="h-[1px] w-full bg-w/[35%]" />
      <div className="flex justify-center items-center text-w/[35%] py-[32px]">
        © {currentYear} FoișorulMeu.md | {t('footer.0.rights')}
      </div>
    </footer>
  );
};
export default Footer;
