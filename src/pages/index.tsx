import type {NextPage} from 'next'
import {Header} from "../components";
import Hero from "@/components/Hero";
import Filter from "@/components/Filter";
import Neighborhood from "@/components/Neighborhood";
import AboutUs from "@/components/AboutUs";

const Home: NextPage = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Filter/>
            <Neighborhood/>
            <AboutUs/>
        </div>
    )
}

export default Home
