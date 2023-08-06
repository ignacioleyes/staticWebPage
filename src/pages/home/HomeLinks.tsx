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
        >
            {links.map((el, idx) => (
                <VStack
                    key={idx}
                    bgGradient={"linear(to-t, black, #808182)"}
                    width={"15rem"}
                    height={"5rem"}
                    borderRadius={"1rem"}
                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                    cursor={"pointer"}
                    onClick={() => homeRedirect(`${el.link}`)}
                    _hover={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                >
                    <VStack
                        justifyContent={"center"}
                        alignItems={"center"}
                        h={"100%"}
                        w={"full"}
                        px={1}
                    >
                        <Text
                            textAlign={"justify"}
                            color={"whitesmoke"}
                            fontWeight={"extrabold"}
                            fontSize={{
                                base: "0.5rem",
                                sm: "0.5rem",
                                md: "0.6rem",
                                lg: "0.6rem",
                                xl: "1rem",
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
