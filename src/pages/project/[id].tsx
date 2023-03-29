import items from '../../constants/items';
import {Header} from "@/components";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ItemPage({ itemId }) {
    const item = items.find(item => item.id === itemId);

    return (
        <div className="">
            <Header/>
            <div className="pt-[100px] text-w px-[20px] sm:px-[100px] md:px-[150px]">
                <div className="flex flex-col gap-14">
                    <div className="text-[48px] font-bold">Categoria: <span className="text-[#FF9505] font-semibold">{item.category}</span></div>
                    <div className="flex flex-col md:flex-row gap-10 md:gap-24">
                        <div className="relative w-[99%] h-[50vh] md:w-[50vw] md:h-[50vh]">
                            <Image src={item.url} alt={item.id} fill={true} style={{objectFit: 'cover'}} />
                        </div>
                        <div className="flex flex-col gap-6 text-[26px]">
                            <div><span className="text-[#FF9505] font-bold">Pretul: </span>{item.price}</div>
                            <div><span className="text-[#FF9505] font-bold">Tip lemn: </span>{item.lemn}</div>
                            <div><span className="text-[#FF9505] font-bold">Tip acoperis: </span>{item.acoperis}</div>
                            <div><span className="text-[#FF9505] font-bold">Dimensiunea: </span>{item.dimensiune}</div>
                        </div>
                    </div>
                    <div className="text-[20px] leading-[158%]">{item.description}{item.description}{item.description}</div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export async function getStaticPaths() {
    return {
        paths: items.map(item => ({
            params: { id: item.id },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    return {
        props: {
            itemId: params.id,
        },
    };
}
