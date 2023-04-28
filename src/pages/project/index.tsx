import { Header } from '../../components';
import { fetcher } from '../api/api';
import Filter from '@/components/Filter';
import Footer from '@/components/Footer';

// @ts-ignore
const Project = ({ produses }) => {
  return (
    <div>
      <Header />
      <div className="pt-[150px] px-[20px] xs:px-[50px] md:px-[80px] lg:px-[150px] text-w text-[30px]">
        <div className="text-[#FF9505] text-[38px] lg:text-[48px] font-semibold">
          Modele disponibile
        </div>
      </div>
      <Filter produses={produses} max={50} />
      <Footer />
    </div>
  );
};

export default Project;

export async function getStaticProps() {
  const productResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/produses?populate=*`,
  );

  return {
    props: {
      produses: productResponse,
    },
  };
}
