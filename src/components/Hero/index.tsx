import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
i18n.t("translation.key")

const Hero = () => {
    const { t } = useTranslation();
    return (
        <div className="flex justify-center items-center flex-col relative">
            <div className="z-40 w-full h-[80px] lg:h-[153px] hero-gradient-1 absolute top-0"/>
            <div className="absolute top-[50%] z-10 left-[20px] mg:left-auto sm:px-[100px] md:px-[150px]">
                <div className="flex flex-col font-bold text-[20px] md:text-[50px] lg:text-[64px] leading-[139%] tracking-[0.03em] whitespace-nowrap">
                    <div className="text-[#FFFBFB]">{t("hero-title-1")} <span className="text-[#FF9505]">{t("hero-title-2")}</span></div>
                    <div className="text-[#FFFBFB]">{t("hero-title-3")}</div>
                </div>
            </div>
            <div className="relative w-full h-[300px] md:h-[776px] 2xl:h-[900px]">
                <Image
                    src="/hero-image.jpg"
                    alt="image for hero card"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/hero-image.jpg"
                />
            </div>
            <div className="z-40 w-full h-[50px] lg:h-[104px] -mt-[50px] lg:-mt-[104px] hero-gradient-2"/>
        </div>
    )
}

export default Hero;


