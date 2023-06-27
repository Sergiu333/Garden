import React, {useState, useEffect, useRef} from 'react';
import Link from 'next/link';

const items = [
    {
        number: 500,
        type: 'Comenzi',
        description: 'Peste 500 de comenzi executate rapid și calitativ.',
    },
    {
        number: 40,
        type: 'Locații',
        description: 'Experiență extinsă în peste 40 de locații servite.',
    },
    {
        number: 60,
        type: 'Modele',
        description: 'Mai mult de 60 de modele variate realizate.',
    },
];

const AboutUs = () => {
    const elementRef = useRef(null);
    const [shouldStartCount, setShouldStartCount] = useState(false);
    const [counts, setCounts] = useState(Array(items.length).fill(0));

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setShouldStartCount(true);
            }
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [elementRef]);

    useEffect(() => {
        if (!shouldStartCount) {
            return;
        }

        const steps = 50;
        const durations = 3000;
        const diffs = items.map(({number}, index) => number / steps);

        const interval = setInterval(() => {
            setCounts((counts) =>
                counts.map((count, index) => {
                    const {number} = items[index];
                    const diff = diffs[index];
                    const newCount = count + diff;
                    return newCount >= number ? number : newCount;
                }),
            );
        }, durations / steps);

        return () => {
            clearInterval(interval);
        };
    }, [shouldStartCount, items]);
    return (
        <div
            className="px-[20px] xs:px-[50px] md:px-[80px] lg:px-[150px] relative mb-[50px] lg:mb-[150px] w-full"
            ref={elementRef}
        >
            <div className="bg-about-rectangle-top w-[90vw] xs:w-[93vw] md:w-[85vw] h-[200px] absolute top-0"/>
            <div className="bg-about-rectangle-bottom w-[90vw] xs:w-[93vw] md:w-[85vw] h-[200px] absolute bottom-0"/>
            <div className="flex flex-col xl:flex-row justify-between bg-about-us px-10">
                <div className="flex flex-col gap-[16px] justify-center">
                    <div className="text-[32px] font-semibold leading-[139%] text-[#FF9505] z-10">
                        Despre noi
                    </div>
                    <div className="text-[16px] leading-[158%] text-[#FFFBFB] lg:w-[70%]">
                        Suntem o echipă dedicată în producția personalizată de mobilier pentru grădină, desfășurând
                        această activitate cu pasiune timp de 10 ani. Stejarul, cu siguranță, reprezintă materialul
                        nostru de bază, conferindu-i pieselor noastre o calitate superioară și un farmec aparte.
                    </div>
                    <Link href="/">
                        <div
                            className="text-[#1B1B1B] bg-[#FFFBFB] rounded-[8px] px-[24px] py-[12px] border font-semibold lg:w-fit">
                            Modele disponibile
                        </div>
                    </Link>
                </div>
                <div className="flex flex-row xl:flex-col gap-[25px] lg:gap-[48px] py-[80px]">
                    {items.map(({number, description, type}, index) => {
                        return (
                            <div
                                className="flex flex-col gap-[8px] text-center items-center justify-center"
                                key={`${index}`}
                            >
                                <div className="text-[#FF9505]/[80%] font-semibold text-[32px] leading-[39px]">
                                    {Math.round(counts[index])}+
                                </div>
                                <div className="text-[#FFFBFB]/[65%] font-semibold text-[16px] leading-[20px]">
                                    {type}
                                </div>
                                <div className="hidden md:block text-[#FFFBFB]/[50%] text-[16px] leading-[158%]">
                                    {description}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default AboutUs;
