import { Box } from "@chakra-ui/react";
import Carousel from "./Carousel";
import HomeLinks from "./HomeLinks";
import FadingTexts from "./FadingTexts";
import { useQuery } from "@tanstack/react-query";
import { useAuthHeader } from "react-auth-kit";
import { getResource } from "../../api/api";
import { Home } from "../../api/types";

const HomeInfo = () => {
    const getAuthHeader = useAuthHeader();

    const { data: home, isSuccess } = useQuery (
        ["home"],
        async () => getResource<Home>("home", getAuthHeader()),
        { select: (r) => r.data }
    );

    return (
        <>
            {isSuccess &&
                <Box>
                    <Carousel images={home.images} />
                    <FadingTexts description={home.description} englishDescription={home.englishDescription} />
                    <HomeLinks />
                </Box>
            }
        </>
    );
};

export default HomeInfo;
