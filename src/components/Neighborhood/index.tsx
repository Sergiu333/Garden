import Image from "next/image";

const Neighborhood = () => {
  return(
      <div className="px-[20px] sm:px-[100px] md:px-[150px] flex flex-col gap-[32px] pb-10">
          <div className="flex flex-col">
              <div className="text-[32px] font-semibold leading-[139%] text-[#FF9505]">Neighborhood</div>
              <div className="text-[16px] leading-[158%] text-white/[50%]">Deam home villas San Diego, CA, USA</div>
          </div>
          <div className="relative w-full h-[60vh]">
              <Image src="/map.jpg" alt="map" fill objectFit="cover"/>
          </div>
      </div>
  )
}

export default Neighborhood;
