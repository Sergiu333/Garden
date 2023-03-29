import type {NextPage} from 'next'
import {Header} from "../components";
import Hero from "@/components/Hero";
import Filter from "@/components/Filter";
import Neighborhood from "@/components/Neighborhood";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
    const Neighborhood = dynamic(() => import('../components/Neighborhood'), {
        ssr: false,
    });
    return (
        <div>
            <Header/>
            <Hero/>
            <Filter/>
            <Neighborhood/>
            <AboutUs/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home
