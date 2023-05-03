import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import { useRouter } from 'next/router';
import convertImageToBase64 from '../../../utils/hooks/convertImageToBase64';
import ImageBlur from "@/components/ImageBlur";

i18n.t('translation.key');

const items=[
  {title: 'Calitate'},
  {title: 'Personalizam'},
  {title: 'Pret avantajos'},
]

// @ts-ignore
const Filter = ({produses, max}) => {
  const page = useRouter().asPath;
  const [activeCategory, setActiveCategory] = useState('Foisor');
  const [currentIndex, setCurrentIndex] = useState(null);
  const { t } = useTranslation();
  const [currentCategory, setCurrentCategory] = useState('Foisor');
  // @ts-ignore
  const allCategories = Array.from(new Set(produses.data.map((item) => item.attributes.category)));

  const handleCategoryClick = (category: any) => {
    setActiveCategory(category);
    setCurrentIndex(null);
    window.history.pushState({}, '', `?category=${category}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFromUrl = urlParams.get('category');
    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
    }
  }, []);

  const filteredProducts = produses.data.filter((product: any) => {
    const isMatch = currentCategory === 'all' || product.attributes.category === currentCategory;
    return isMatch;
    setCurrentIndex(null);
  });

  const [imageBase64, setImageBase64] = useState<string | null>(null);

  useEffect(() => {
    convertImageToBase64(
      `${filteredProducts.map((link: any) => link.attributes.poster.data.attributes.url)[0]}`,
    )
      .then((base64) => setImageBase64(base64))
      .catch((error) => console.error('Error converting image to base64:', error));
  }, []);

  return (
    <div>
      <div className="px-[20px] sm:px-[100px] md:px-[150px] flex flex-col relative mt-[50px] 2xl:mt-[70px]">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="overflow-auto scroll-hidden pb-[32px] lg:pb-0">
            <div className="flex flex-row gap-[24px] w-fit">
              {allCategories.map((category: any, index) => {
                const isActive = category === currentCategory;
                return (
                  <button
                    className="flex flex-row gap-[24px] items-center whitespace-nowrap"
                    key={`${index}`}
                    onClick={() => setCurrentCategory(category)}
                  >
                    <div
                      onClick={() => handleCategoryClick(category)}
                      className={`py-[11px] px-[24px] rounded-[8px] border border-[1.5px] text-[14px] 2xl:text-[18px] ${
                        isActive
                          ? 'border-[#FF9505] text-[#FF9505]'
                          : 'border-[#FFFBFB]/[35%] text-[#FFFBFB]'
                      }`}
                    >
                      {category}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="py-[11px] px-[24px] bg-[#FFFBFB] rounded-[8px]">
            <div className="flex flex-row gap-[14px] text-[#1B1B1B] items-center">
              <div className="font-semibold text-[14px] 2xl:text-[18px] leading-[139%] text-[#1B1B1B]">
                {t('filters')}
              </div>
              <div className="relative w-[24px] h-[24px]">
                <Image
                  src="/filter.svg"
                  fill={true}
                  style={{ objectFit: 'contain' }}
                  alt="this image is from filter"
                  priority={true}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:grid  lg:grid-cols-2 2xl:grid-cols-3 gap-10 pt-[32px]">
          {filteredProducts.slice(0, max).map((product: any, index: any) => (
            <Link
              href={'/project/' + product.id}
              className="flex flex-row gap-[32px] justify-center"
              key={`${product.id}`}
            >
              <div className="flex flex-col bg-[#2C2B2B] w-fit rounded-[8px] overflow-hidden">
                <div className="relative w-[380px] lg:w-[577px] h-[300px] lg:h-[450px]">
                  <ImageBlur
                      src={`${filteredProducts.map((link: any) => link.attributes.poster.data.attributes.url,)[index]}`}
                      alt="this image is from filter" typeObject="cover" formatImage="jpg"/>
                </div>
                <div className="p-[16px]">
                  <div className="flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between">
                      <div className="text-[#FFFBFB] font-semibold text-[24px] leading-[139%]">
                        {product.attributes.price}$
                      </div>
                      <button className="py-[11px] px-[24px] bg-[#FFFBFB] rounded-[8px] text-[#1B1B1B] font-semibold text-[14px] leading-[139%]">
                        Detalii
                      </button>
                    </div>
                    <div className="flex flex-row justify-between border border-[#FFFBFB]/[35%] rounded-l-[8px] rounded-r-[8px] p-[11px] child-card" key={`${index}`}>
                    {items.map(({title}, index)=>{
                      return(
                            <div className="flex flex-row gap-[5.5px] items-center" key={`${index}`}>
                              <div className="relative w-[16px] h-[16px]">
                                <Image
                                    src="/check.svg"
                                    fill={true}
                                    style={{ objectFit: 'contain' }}
                                    alt="this image is from filter"
                                />
                              </div>
                              <div className="flex items-center justify-center text-[#FFFBFB]/[65%] font-semibold text-[12px] md:text-[14px] leading-[139%]">
                                {title}
                              </div>
                            </div>
                      )
                    })}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {page === '/project' ? (
          ''
        ) : (
          <Link href="/project">
            <div className="flex justify-center items-center flex-col gap-1 py-[35px]">
              <div className="relative w-[48px] h-[48px]">
                <Image
                  src="/circle.svg"
                  alt="view more"
                  fill
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL="/circle.svg"
                />
              </div>
              <div className="text-[#FFFBFB] text-[14px] leading-[139%] font-medium">
                {t('more')}
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Filter;
