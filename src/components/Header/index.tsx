import Image from "next/image";
import Link from "next/link";
import useWindowWidth from "../../../utils/hooks/use-window-width";
import Hamburger from '../../../public/Hamburger';
import {useState} from "react";
import useTopbarColor from "../../../utils/hooks/useTopbarColor";

const Header = () => {

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    const width = useWindowWidth();
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const topbarColor = useTopbarColor();

    const routes = [
        {
            url: '/',
            text: 'Acasă',
        },
        {
            url: '/project',
            text: 'Proiecte',
        },{
            url: '/project',
            text: 'Other',
        },
        // {
        //     url: '#contacte',
        //     text: 'Contacte',
        // },
    ];

    return (
        <header className={`fixed top-0 left-0 z-[999] w-full transition-colors delay-100 ${topbarColor}`}>
            <div
                className="px-[20px] sm:px-[100px] md:px-[150px] bg-white h-[70px] lg:px-[135px] py-[16px] lg:py-[30px] 2xl:py-[55px] flex flex-row justify-between items-center">
                <Link href="/" className="relative">
                    <div className="w-[90px] h-[56px] 2xl:w-[100px] 2xl:h-[96px]">
                        <Image src="/logo.svg" alt="image news" layout="fill"  objectFit="contain"/>
                    </div>
                </Link>
                <div className="flex flex-row gap-[40px]">
                    <div className='relative z-[100]'>
                        <div
                            className={`${
                                hamburgerOpen && width <= 1024
                                    ? 'fixed flex flex-col bg-[#2C2B2B] top-0 right-0 bottom-0 w-3/5 py-[50px] justify-center items-center gap-6 -mt-[400px]'
                                    : 'relative grid-cols-4 hidden lg:flex lg:gap-[35px] flex items-center'
                            }`}
                        >
                            {routes.map(({url, text}, index) => {
                                return (
                                    <Link href={`${url}`} key={`${index}`}  onClick={toggleHamburger}>
                                        <div
                                            className="text-[20px] leading-[25px] text-[#F4F0EC] lg:text-[#292F36]">{text}</div>
                                    </Link>
                                )
                            })}
                            <Link href="#contact">
                                <div className="text-[#1B1B1B] bg-[#FFFBFB] rounded-[8px] px-[24px] py-[12px] border">Contact</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`w-full flex justify-end lg:hidden py-6 z-[9999]`} onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>
            </div>
        </header>

    )
}

export default Header;
