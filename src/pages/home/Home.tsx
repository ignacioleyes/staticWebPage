import { Box } from "@chakra-ui/react";
import Carousel from "./Carousel";
import HomeLinks from "./HomeLinks";
import FadingTexts from "./FadingTexts";

const Home = () => {
    return (
        <Box bg={"#FFF9E9"}>
            <Carousel />
            <FadingTexts />
            <HomeLinks />
        </Box>
    );
};

export default Home;
