import Agenda from "../components/sections/Agenda"
import { Hero } from "../components/sections/Hero"
import Newsletter from "../components/sections/Newsletter"
import Services from "../components/sections/Services"
import StrategicAxes from "../components/sections/StrategicAxes"

export const Home = () => {
    return (
        <>
            <Hero/>
            <StrategicAxes />
            <Agenda />
            <Services />
            <Newsletter />
        </>
    )
}