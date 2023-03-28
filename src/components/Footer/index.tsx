import Image from "next/image";

import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
i18n.t("translation.key")

const Footer = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (event:any) => {
        const lang = event.target.value;
        i18n.changeLanguage(lang);
    };
  return(
      <footer>
          <div className="px-[20px] sm:px-[100px] md:px-[150px] flex flex-col lg:flex-row justify-between py-[64px] gap-10 lg:gap-0">
              <div className="flex flex-col gap-[18px]">
                  <div className="relative w-[90px] h-[82px]">
                      <Image src="/logo.svg" alt="image news" layout="fill"  objectFit="contain"/>
                  </div>
                  <div className="text-[16px] leading-[158%] text-w/[80%] w-[300px]">
                      {t('footer.0.subtitleLogo')}
                  </div>
              </div>
              <div className="flex flex-col gap-[18px] text-w/[80%]">
                  <div className="font-semibold leading-[29px] tracking-[0.02em]">
                      {t('footer.0.contact')}
                  </div>
                  <div className="flex flex-col gap-[16px]">
                      <div className="flex flex-row gap-[8px]  text-[16px] leading-[20px]">
                          <div>Deam home villas San <br/> Diego, CA, USA</div>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center">
                          <div className="relative w-[20px] h-[20px]">
                              <Image src="/phone.svg" alt="phone call" fill style={{objectFit: 'contain'}}/>
                          </div>
                          <div>025-777-3067</div>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center">
                          <div className="relative w-[20px] h-[20px]">
                              <Image src="/mail.svg" alt="phone call" fill style={{objectFit: 'contain'}}/>
                          </div>
                          <div>025-777-3067</div>
                      </div>
                  </div>
              </div>
              <div className="flex flex-col gap-[64px] text-w/[80%]">
                  <div className="flex flex-col gap-[18px]">
                      <div className="font-semibold leading-[29px] tracking-[0.02em]">
                          {t('footer.0.follow')}
                      </div>
                      <div className="flex flex-row gap-[25px] lg:justify-center items-center ">
                          <div className="p-[8px] rounded-[8px] bg-[#2C2B2B] flex justify-center items-center">
                              <div className="relative w-[25px] h-[25px]">
                                  <Image src="/youtube.svg" alt="image" fill={true} style={{objectFit: 'contain'}}/>
                              </div>
                          </div>
                          <div className="p-[8px] rounded-[8px] bg-[#2C2B2B] flex justify-center items-center">
                              <div className="relative w-[25px] h-[25px]">
                                  <Image src="/youtube.svg" alt="image" fill={true} style={{objectFit: 'contain'}}/>
                              </div>
                          </div>
                          <div className="p-[8px] rounded-[8px] bg-[#2C2B2B] flex justify-center items-center">
                              <div className="relative w-[25px] h-[25px]">
                                  <Image src="/youtube.svg" alt="image" fill={true} style={{objectFit: 'contain'}}/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <select id="languages"
                          className="w-fit lg:w-full bg-[#1B1B1B] border border-w/[65%] text-w/[65%] text-sm rounded-lg focus:ring-w/[65%] focus:border-w/[65%] block p-2.5 border border-w/[65%] rounded-[8px] py-[15px] px-[18px]"
                          onChange={changeLanguage}>
                      <option selected>{t('English - En')}</option>
                      <option value="ro">{t('Romana - Ro')}</option>
                      <option value="ru">{t('Rusa - Ru')}</option>
                  </select>

              </div>
          </div>
          <div className="h-[1px] w-full bg-w/[35%]"/>
          <div className="flex justify-center items-center text-w/[35%] py-[32px]">
              © 2022 Dandelion | {t('footer.0.rights')}
          </div>
      </footer>
  )
}
export default Footer;
