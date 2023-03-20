import Image from 'next/image'

const FilterCategory = () => {

    const items = [
        {
            url: "/image-card.jpg",
            price: "100.000$",
        }
    ]
    const subitems=[
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



    return (
        <div className="px-[20px] sm:px-[100px] md:px-[150px] flex flex-col text-white pt-[64px] gap-[32px]">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-[24px] items-center">
                    <div className="py-[11px] px-[24px] rounded-[8px] border border-[1.5px] border-[#FF9505] text-[#FF9505] text-[14px] 2xl:text-[18px]">
                        buton
                    </div>
                    <div className="py-[11px] px-[24px] rounded-[8px] border border-[1.5px] border-[#FFFBFB]/[35%] text-[#FFFBFB] text-[14px] 2xl:text-[18px]">
                        buton
                    </div>
                    <div className="py-[11px] px-[24px] rounded-[8px] border border-[1.5px] border-[#FFFBFB]/[35%] text-[#FFFBFB] text-[14px] 2xl:text-[18px]">
                        buton
                    </div>
                    <div className="py-[11px] px-[24px] rounded-[8px] border border-[1.5px] border-[#FFFBFB]/[35%] text-[#FFFBFB] text-[14px] 2xl:text-[18px]">
                        buton
                    </div>

                </div>
                <div className="py-[11px] px-[24px] bg-[#FFFBFB] rounded-[8px]">
                    <div className="flex flex-row gap-[14px] text-[#1B1B1B] items-center">
                        <div className="font-semibold text-[14px] 2xl:text-[18px] leading-[139%] text-[#1B1B1B]">Filters</div>
                        <div className="relative w-[24px] h-[24px]">
                            <Image src="/filter.svg" fill objectFill="contain"/>
                        </div>
                    </div>
                </div>
            </div>
            {items.map(({ price, url}, index)=>{
                return(
                    <div className="flex flex-col bg-[#2C2B2B] w-fit rounded-[8px] overflow-hidden" key={`${index}`}>
                        <div className="relative w-[577px] h-[450px]">
                            <Image src="/image-card.jpg" fill objectFit="contain"/>
                        </div>
                        <div className="p-[16px]">
                            <div className="flex flex-col gap-[16px]">
                                <div className="flex flex-row justify-between">
                                    <div className="text-[#FFFBFB] font-semibold text-[24px] leading-[139%]">100.000 $</div>
                                    <div className="py-[11px] px-[24px] bg-[#FFFBFB] rounded-[8px] text-[#1B1B1B] font-semibold text-[14px] leading-[139%]">View Details</div>
                                </div>
                                <div className="flex flex-row justify-between border border-[#FFFBFB]/[35%] rounded-l-[8px] rounded-r-[8px] p-[11px] child-card">
                                    {subitems.map(({src, title}, index)=>{
                                        return(
                                            <div className="flex flex-row gap-[5.5px] " key={`${index}`}>
                                                <div className="relative w-[16px] h-[16px]">
                                                    <Image src={src} fill objectFit="contain" />
                                                </div>
                                                <div className="flex items-center justify-center text-[#FFFBFB]/[65%] font-semibold text-[14px] leading-[139%]">
                                                    {title}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FilterCategory;
