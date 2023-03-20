import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
    {
        url: "/image-card.jpg",
        price: "100.000$",
        category: "all"
    }, {
        url: "/image-card.jpg",
        price: "100.000$",
        category: "all"
    },
    {
        url: "/image-card.jpg",
        price: "100.000$",
        category: "Studio"
    }, {
        url: "/image-card.jpg",
        price: "100.000$",
        category: "all"
    }, {
        url: "/image-card.jpg",
        price: "100.000$",
        category: "all"
    },
    {
        url: "/image-card.jpg",
        price: "100.000$",
        category: "1 Badd Room"
    }, {
        url: "/image-card.jpg",
        price: "100.000$",
        category: "2 Bad Room"
    },
];


const category = [
    {
        title: "All",
        id: "all",
    },
    {
        title: "Studio",
        id: "Studio",
    },
    {
        title: "1 Badd Room",
        id: "1 Badd Room",
    },
    {
        title: "2 Bad Room",
        id: "2 Bad Room",
    },

];

const subitems = [
    {
        title: "1 Bedrooms",
        src: "/icon-card.svg"
    },
    {
        title: "1 Bedrooms",
        src: "/icon-card.svg"
    },
    {
        title: "1 Bedrooms",
        src: "/icon-card.svg"
    },
]


const Filter = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredItems = activeCategory ? items.filter((item) => item.category === activeCategory) : items;

    const handleCategoryClick = (category: any) => {
        setActiveCategory(category);
        setCurrentIndex(null);
        // add the following line to update the URL when a category is selected
        window.history.pushState({}, "", `?category=${category}`);
        setActiveCategory(category);

    };
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryFromUrl = urlParams.get("category");
        if (categoryFromUrl) {
            setActiveCategory(categoryFromUrl);
        }
    }, []);

    const [currentIndex, setCurrentIndex] = useState(null);

    return (
        <div>
            <div className="px-[20px] sm:px-[100px] md:px-[150px] flex flex-col relative mt-[50px] 2xl:mt-[70px]">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="overflow-auto scroll-hidden pb-[32px] lg:pb-0">
                        <div className="flex flex-row gap-[24px] w-fit">
                            {category.map(({title, id}, index) => {
                                const isActive = activeCategory === id;
                                return (
                                    <button className="flex flex-row gap-[24px] items-center whitespace-nowrap"
                                            key={`${index}`}>
                                        <div className={`py-[11px] px-[24px] rounded-[8px] border border-[1.5px] text-[14px] 2xl:text-[18px]
                                            ${isActive ? 'border-[#FF9505] text-[#FF9505]' : 'border-[#FFFBFB]/[35%] text-[#FFFBFB]'}`}
                                             onClick={() => handleCategoryClick(id)}>
                                            {title}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="py-[11px] px-[24px] bg-[#FFFBFB] rounded-[8px]">
                        <div className="flex flex-row gap-[14px] text-[#1B1B1B] items-center">
                            <div
                                className="font-semibold text-[14px] 2xl:text-[18px] leading-[139%] text-[#1B1B1B]">Filters
                            </div>
                            <div className="relative w-[24px] h-[24px]">
                                <Image src="/filter.svg" fill objectFill="contain"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:grid  lg:grid-cols-2 2xl:grid-cols-3 gap-10 pt-[32px]">
                    {filteredItems.map(({url, price}, index) => (
                        <div className="flex flex-row gap-[32px] justify-center">
                            <div className="flex flex-col bg-[#2C2B2B] w-fit rounded-[8px] overflow-hidden"
                                 key={`${index}`}>
                                <div className="relative w-[577px] h-[450px]">
                                    <Image src="/image-card.jpg" fill objectFit="contain"/>
                                </div>
                                <div className="p-[16px]">
                                    <div className="flex flex-col gap-[16px]">
                                        <div className="flex flex-row justify-between">
                                            <div
                                                className="text-[#FFFBFB] font-semibold text-[24px] leading-[139%]">100.000
                                                $
                                            </div>
                                            <div
                                                className="py-[11px] px-[24px] bg-[#FFFBFB] rounded-[8px] text-[#1B1B1B] font-semibold text-[14px] leading-[139%]">View
                                                Details
                                            </div>
                                        </div>
                                        <div
                                            className="flex flex-row justify-between border border-[#FFFBFB]/[35%] rounded-l-[8px] rounded-r-[8px] p-[11px] child-card">
                                            {subitems.map(({src, title}, index) => {
                                                return (
                                                    <div className="flex flex-row gap-[5.5px] items-center"
                                                         key={`${index}`}>
                                                        <div className="relative w-[16px] h-[16px]">
                                                            <Image src={src} fill objectFit="contain"/>
                                                        </div>
                                                        <div
                                                            className="flex items-center justify-center text-[#FFFBFB]/[65%] font-semibold text-[12px] md:text-[14px] leading-[139%]">
                                                            {title}
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Link href="/">
                    <div className="flex justify-center items-center flex-col gap-1 py-[35px]">
                        <div className="relative w-[48px] h-[48px]">
                            <Image src="/circle.svg" alt="view more" fill objectFit="contain"/>
                        </div>
                        <div className="text-[#FFFBFB] text-[14px] leading-[139%] font-medium">View more</div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Filter;
