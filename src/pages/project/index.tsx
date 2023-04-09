import items from '../../constants/items'
import Link from "next/link";
import {Header} from "../../components";
import {fetcher} from "../api/api";
import Filter from "@/components/Filter";
import Footer from "@/components/Footer";

const Project = ({produses}) => {
  return(
      <div>
          <Header/>
          <div className="pt-[150px] px-[20px] xs:px-[50px] md:px-[80px] lg:px-[150px] text-w text-[30px]">
              <div className="text-[#FF9505] text-[38px] lg:text-[48px] font-semibold">Toate modelele disponibile</div>
          </div>
          <Filter produses={produses} max={50}/>
          <Footer/>
      </div>
  )
}

export default Project;

export async function getStaticProps(){
    const productResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/produses?populate=*`);
    // console.log(productResponse.data[0].id, 'aici sergiu')

    return{
        props:{
            produses: productResponse,
        }
    }
}
