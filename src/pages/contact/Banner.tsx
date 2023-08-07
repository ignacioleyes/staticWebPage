import { Box } from "@chakra-ui/react";
import BannerContactUs from "/contactImage.jpg";

const Banner = () => {
    return (
        <Box
            bgImage={BannerContactUs}
            w={"full"}
            minH={"15vh"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
        />
    );
};
export default Banner;
