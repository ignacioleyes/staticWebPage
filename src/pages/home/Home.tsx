import { Box } from "@chakra-ui/react";
import Carousel from "./Carousel";
import HomeLinks from "./HomeLinks";
import FadingTexts from "./FadingTexts";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <Box bg={"#FFF9E9"}>
            <Carousel />
            <FadingTexts />
            <HomeLinks />
            <Footer />
        </Box>
    );
};

export default Home;
