import type {NextPage} from 'next'
import {Header} from "../components";
import Hero from "@/components/Hero";
import Filter from "@/components/Filter";
import Neighborhood from "@/components/Neighborhood";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
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
