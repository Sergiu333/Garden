import Link from "next/link";
import {Header} from "../../components";
import {fetcher} from "../api/api";

const Project = ({produses}) => {
  return(
      <div>
          <Header/>
          <div className="pt-[150px] px-[20px] xs:px-[50px] md:px-[80px] lg:px-[150px] text-w text-[30px]">
              <div>all project</div>
              ------------------------------------------------------
              {
                  produses.data.map((produs) => {
                      return(
                          <div key={produs.id}>
                              <Link  href={'/project/'+ produs.id}>
                                  <div>id- {produs.id}</div>
                                  <div>name- {produs.attributes.name}</div>
                                  {/*<div>price- {produs.attributes.price}</div>*/}
                                  {/*<div>category- {produs.attributes.category}</div>*/}
                                  {/*<div>description- {produs.attributes.description}</div>*/}
                                  {/*<div>{produs.attributes.lemn[0].lemn}</div>*/}
                                  {/*<div>latimea- {produs.attributes.latimea}</div>*/}
                                  {/*<div>{produs.attributes.lungimea}</div>*/}
                                  {/*<div>url- {produses.data[0].attributes.multi.data[0].attributes.name}</div>*/}
                                  {/*<img src={`http://localhost:1337${produses.data[3].attributes.multi.data[5].attributes.url}`} alt="aici"/>*/}
                                  _______________________________________________________________________________________
                              </Link>
                          </div>
                      )
                  })
              }
          </div>
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
