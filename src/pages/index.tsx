import type { NextPage } from 'next';
import { Header } from '../components';
import Hero from '@/components/Hero';
import Filter from '@/components/Filter';
import Neighborhood from '@/components/Neighborhood';
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
import { fetcher } from '@/pages/api/api';
import ImageBlur from "@/components/ImageBlur";
// @ts-ignore
const Home: NextPage = ({ produses }) => {
  const Neighborhood = dynamic(() => import('../components/Neighborhood'), {
    ssr: false,
  });
  return (
    <div>
      <Header />
      <Hero />
      <Filter produses={produses} max={10} />
      <Neighborhood />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

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
