import { GetStaticPaths, GetStaticProps } from 'next';
import {fetcher} from "@/pages/api/api";
import Link from "next/link";
import {Header} from "@/components";
import Image from "next/image";
import React, {useState} from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";


const Modal = ({ imageUrl, onClose, children, subtitle }) => {
    return (
        <div
            className="fixed top-0 left-0 bottom-0 w-full h-full flex justify-center items-center bg-black/[.8]"
            onClick={onClose}
        >
            <div className="w-full h-[30px] absolute z-[99] bottom-0 flex justify-center items-center bg-[#181A1F] opacity-50 text-white uppercase">
                {subtitle}
            </div>
            <button
                className="bg-white text-black p-2 w-[35px] h-[35px] absolute right-[5%] md:right-[25%] top-[20%] md:top-[5%] z-[9999] flex justify-center items-center opacity-30 border border-red-400"
                onClick={onClose}
            >
                X
            </button>
            <div
                className="relative w-[90vw] lg:w-[50vw] h-full"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="hidden lg:block">
                    <Image src={imageUrl} alt="image url" layout="fill" objectFit="cover" />
                </div>
                <div className="block lg:hidden">
                    <Image src={imageUrl} alt="image url" layout="fill" objectFit="contain" />
                </div>
                {children}
            </div>
        </div>
    );
};


interface Product {
    id: number;
    attributes: {
        name: string;
        price: number;
        category: string;
        description: string;
        lemn:[
            {
                lemn: string;
            }
        ];
        acoperis:[
            {
                acoperis: string;
            }
        ];
        latimea: string;
        lungimea: string;
        multi:{
            data:[
                {
                    attributes:{
                        url:string;
                    }
                }
            ]
        }

    }
}

interface ProductPageProps {
    product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {

    const item = product.attributes;

    const [woodType, setWoodType] = useState(item.lemn[0].lemn);
    const [roofType, setRoofType] = useState(item.acoperis[0].acoperis);
    const [price, setPrice] = useState(item.price);
    const [defaultWoodType, setDefaultWoodType] = useState(item.lemn[0].lemn);
    const [defaultRoofType, setDefaultRoofType] = useState(item.acoperis[0].acoperis);
    const [currentIndex, setCurrentIndex] = useState(0);


    function woodChange(event, currentPrice) {
        const woodType = event.target.value;
        let newPrice = currentPrice;

        if (woodType === "Stejar") {
            newPrice += 1000; // increase price by 20%
        } else if (woodType === "Sosna") {
            newPrice -= 1000; // decrease price by 20%
        }

        setPrice(newPrice);
        setWoodType(woodType);
        setDefaultWoodType(woodType); // set default wood type to selected wood type
    }

    function roofChange(event, currentPrice) {
        const roofType = event.target.value;
        let newPrice = currentPrice;

        if (roofType === "Tigla") {
            newPrice += 1000; // increase price by 20%
        } else if (roofType === "Catapal") {
            newPrice -= 1000; // decrease price by 20%
        }

        setPrice(newPrice);
        setRoofType(roofType);
        setDefaultRoofType(roofType); // set default roof type to selected roof type
    }

    function lengthChange(event, currentPrice) {
        const height = parseFloat(event.target.value);
        let newPrice = currentPrice;
        if (height > item.lungimea) {
            newPrice += 300 * (height - item.lungimea);
        } else if (height < item.lungimea) {
            newPrice -= 300 * (item.lungimea - height);
        }
        setPrice(newPrice);
    }

    function widthChange(event, currentPrice) {
        const width = parseFloat(event.target.value);
        let newPrice = currentPrice;
        if (width > item.latimea) {
            newPrice += 300 * (width - item.latimea);
        } else if (width < item.latimea) {
            newPrice -= 300 * (item.latimea - width);
        }
        setPrice(newPrice);
    }

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? item.multi.data.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === item.multi.data.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (index:any) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };


    const CloseModal = () => {
        setIsModalOpen(false);
    };
    console.log(product.attributes)
    return(
        <div>
            <Header/>

            <div className="pt-[100px] text-w px-[20px] xs:px-[50px] md:px-[80px] lg:px-[150px]">
                <div className="flex flex-col gap-6 lg:gap-4">
                    <div className="text-[38px] lg:text-[48px] font-bold">Numele Produsului: <span
                        className="text-[#FF9505] font-semibold">{item.name}</span></div>
                    <div className="flex flex-col xl:flex-row gap-6 md:10 2xl:gap-24">
                        <div className='max-w-[1400px] h-[300px] lg:h-[680px] xl:h-[720px] w-full relative group pb-10 md:pb-0'>
                            <div
                                className="relative w-[99%] md:h-[99%] w-full h-full rounded-2xl bg-center bg-cover duration-500 overflow-hidden" onClick={() => handleCardClick(currentIndex)}>
                                <Image src={`http://localhost:1337${product.attributes.multi.data[currentIndex].attributes.url}`} alt="images" fill={true}
                                       style={{objectFit: 'cover'}}/>
                            </div>
                            <div
                                className='block lg:hidden lg:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                                <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                            </div>
                            <div
                                className='block lg:hidden lg:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                                <BsChevronCompactRight onClick={nextSlide} size={30}/>
                            </div>
                            <div className='flex top-4 justify-center py-2'>
                                {product.attributes.multi.data.map((slide, slideIndex) => (
                                    <div
                                        key={slideIndex}
                                        onClick={() => goToSlide(slideIndex)}
                                        className='text-2xl cursor-pointer'
                                    >
                                        {slideIndex === currentIndex ? (
                                            <RxDotFilled color="#FF9505"/>
                                        ) : (
                                            <RxDotFilled color="#FFFBFB"/>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 text-[24px] lg:text-[26px] select-none">
                            <div><span className="text-[#FF9505] font-bold">Pretul: </span>{price}$</div>
                            <div className="flex flex-row gap-4">
                                <div className="text-[#FF9505] font-bold">Tip lemn:</div>
                                <select
                                    id="lemn"
                                    onChange={(event) => woodChange(event, price)}
                                    className="cursor-pointer w-fit bg-[#1B1B1B] border border-w/[65%] text-w/[65%] text-[20px] rounded-lg focus:ring-w/[65%] focus:border-w/[65%] block border border-w/[65%] rounded-[8px]"
                                    value={`${defaultWoodType}`}
                                >
                                    <option value={item.lemn[0].lemn}>{item.lemn[0].lemn}</option>
                                    <option value={item.lemn[1].lemn}>{item.lemn[1].lemn}</option>
                                </select>
                            </div>
                            <div className="flex flex-row gap-4">
                                <div className="text-[#FF9505] font-bold">Tip acoperis:</div>
                                <select
                                    id="acoperis"
                                    onChange={(event) => roofChange(event, price)}
                                    className="cursor-pointer w-fit bg-[#1B1B1B] border border-w/[65%] text-w/[65%] text-[20px] rounded-lg focus:ring-w/[65%] focus:border-w/[65%] block border border-w/[65%] rounded-[8px]"
                                    value={`${defaultRoofType}`}
                                >
                                    <option value={item.acoperis[0].acoperis}>{item.acoperis[0].acoperis}</option>
                                    <option value={item.acoperis[1].acoperis}>{item.acoperis[1].acoperis}</option>
                                </select>
                            </div>
                            <div className="flex flex-row gap-2.5">
                                <div className="text-[#FF9505] font-bold">Dimensiunea:</div>
                                <div className="flex justify-center">
                                    <div className="relative">
                                        <input
                                            id="inaltime"
                                            type="number"
                                            min="3"
                                            max="20"
                                            onChange={(event) => lengthChange(event, price)}
                                            className="cursor-pointer px-2 py-1 w-[75px] bg-[#1B1B1B] border border-w/[65%] text-w/[65%] text-[20px] rounded-lg focus:ring-w/[65%] focus:border-w/[65%] block border border-w/[65%] rounded-[8px]"
                                            placeholder={item.lungimea + 'm'} // set default value as item's height
                                        />
                                    </div>
                                </div>
                                <div> X</div>
                                <div className="relative">
                                    <input
                                        id="latime"
                                        type="number"
                                        min="3"
                                        max="20"
                                        onChange={(event) => widthChange(event, price)}
                                        className="cursor-pointer px-2 py-1 w-[75px] bg-[#1B1B1B] border border-w/[65%] text-w/[65%] text-[20px] rounded-lg focus:ring-w/[65%] focus:border-w/[65%] block border border-w/[65%] rounded-[8px]"
                                        placeholder={item.latimea + 'm'} // set default value as item's width
                                    />
                                </div>
                            </div>
                            <Link href="tel://+37368069937">
                                <div className="text-center font-bold text-[24px] text-[#1B1B1B] bg-[#FFFBFB] rounded-[8px] px-[24px] py-[12px] border">
                                    Comanda
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div
                            className="select-none text-[20px] leading-[158%] pt-12">
                            <div>description- {product.attributes.description}</div>
                        </div>
                        <div className="text-transparent">.</div>
                    </div>
                </div>
            </div>
            <div className="absolute z-[999] w-fit">
                {isModalOpen && (
                    <Modal imageUrl={`http://localhost:1337${product.attributes.multi.data[currentIndex].attributes.url}`} subtitle={item.category} onClose={CloseModal} currentIndex={currentIndex} >
                        <button className="bg-[#181A1F] p-1 lg:p-4 hover:bg-[#35363A] active:bg-black h-[10%] opacity-50 absolute top-[50%] left-0 -translate-y-[50%]"
                                onClick={prevSlide}
                        >
                            <svg width="26" height="26" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L7.705 12.295L3.915 8.5H14V7.5H3.915L7.705 3.705L7 3L2 8L7 13Z"
                                      fill="white"/>
                            </svg>
                        </button>
                        <button
                            className="bg-[#181A1F] p-1 lg:p-4 hover:bg-[#35363A] active:bg-black h-[10%] opacity-50 absolute top-[50%] right-0 -translate-y-[50%]"
                            onClick={nextSlide}
                        >
                            <svg width="26" height="26" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 3L8.285 3.6965L12.075 7.5H2V8.5H12.075L8.285 12.2865L9 13L14 8L9 3Z"
                                      fill="white"/>
                            </svg>
                        </button>
                    </Modal>
                )}
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const productResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/produses?populate=*`);

    // generează un array cu toate ID-urile produselor
    const productIds = productResponse.data.map((produs) => produs.id);

    // generează un array cu toate obiectele `params` pentru fiecare ID de produs
    const paths = productIds.map((id) => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: false, // schimbă la `true` dacă există și produse care nu au pagină asociată
    };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
    const productId = parseInt(params?.id as string, 10);
    const productResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/produses/${productId}?populate=*`);
    const product = productResponse.data;

    return {
        props: {
            product,
        },
    };
};
