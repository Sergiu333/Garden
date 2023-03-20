import type {NextPage} from 'next'
import {Header} from "../components";
import Hero from "@/components/Hero";
import Filter from "@/components/Filter";
import Neighborhood from "@/components/Neighborhood";

const Home: NextPage = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Filter/>
            <Neighborhood/>
        </div>
    )
}

export default Home
