import { Text, HStack, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomeLinks = () => {
    const navigate = useNavigate();
    const [t] = useTranslation("global");

    const homeRedirect = (route: string) => {
        navigate(route);
    };

    const links = [
        {
            text: `${t("homeLinks.firstLink")}`,
            link: "/products",
        },
        {
            text: `${t("homeLinks.secondLink")}`,
            link: "/contact",
        },
        {
            text: `${t("homeLinks.thirdLink")}`,
            link: "/about",
        },
    ];
    return (
        <HStack
            width={"100%"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            mb={5}
            mt={5}
        >
            {links.map((el, idx) => (
                <VStack
                    key={idx}
                    bgGradient={"linear(to-t, black, #808182)"}
                    width={"full"}
                    height={"12rem"}
                    borderRadius={"0.3rem"}
                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                    cursor={"pointer"}
                    onClick={() => homeRedirect(`${el.link}`)}
                    _hover={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                    m={1}
                >
                    <VStack
                        justifyContent={"center"}
                        alignItems={"center"}
                        h={"100%"}
                        w={"full"}
                        px={1}
                    >
                        <Text
                            textAlign={"center"}
                            color={"whitesmoke"}
                            fontWeight={"extrabold"}
                            fontSize={{
                                base: "0.6rem",
                                sm: "0.6rem",
                                md: "0.8rem",
                                lg: "1rem",
                                xl: "1.5rem",
                            }}
                        >
                            {el.text}
                        </Text>
                    </VStack>
                </VStack>
            ))}
        </HStack>
    );
};

export default HomeLinks;
