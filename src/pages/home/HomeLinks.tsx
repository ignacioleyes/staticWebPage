import { Text, HStack, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomeLinks = () => {
    const navigate = useNavigate();
    const [t] = useTranslation("global");

    const homeRedirect = (route: string) => {
        navigate(route);
    };
    return (
        <HStack width={"100%"} height={"15rem"}>
            <Flex justifyContent={"space-evenly"} width={"100%"} mb={5}>
                <Flex
                    bgGradient={"linear(to right, #808182, #5A8100)"}
                    borderTopLeftRadius={"50%"}
                    borderTopRightRadius={"10%"}
                    borderBottomRightRadius={"50%"}
                    borderBottomLeftRadius={"10%"}
                    width={{ sm: "12rem", md: "15rem", lg: "15rem" }}
                    height={{ sm: "12rem", md: "15rem", lg: "15rem" }}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDir={"column"}
                    cursor={"pointer"}
                    onClick={() => homeRedirect("/products")}
                    _hover={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                >
                    <Text
                        textAlign={"center"}
                        fontWeight={"bold"}
                        fontSize={{ sm: "1rem", md: "1.5rem", lg: "1.5rem" }}
                        textShadow={"1px 1px 4px white"}
                    >
                        {t("homeLinks.firstLink")}
                    </Text>
                </Flex>
                <Flex
                    bgGradient={"linear(to right, #808182, #FFB400)"}
                    borderTopLeftRadius={"50%"}
                    borderTopRightRadius={"10%"}
                    borderBottomRightRadius={"50%"}
                    borderBottomLeftRadius={"10%"}
                    width={{ sm: "12rem", md: "15rem", lg: "15rem" }}
                    height={{ sm: "12rem", md: "15rem", lg: "15rem" }}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDir={"column"}
                    cursor={"pointer"}
                    onClick={() => homeRedirect("/contact")}
                    _hover={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                >
                    <Text
                        textAlign={"center"}
                        fontWeight={"bold"}
                        fontSize={{ sm: "1rem", md: "1.5rem", lg: "1.5rem" }}
                        textShadow={"1px 1px 4px white"}
                    >
                        {t("homeLinks.secondLink")}
                    </Text>
                </Flex>
                <Flex
                    bgGradient={"linear(to right, #808182, #FF6C02)"}
                    borderTopLeftRadius={"50%"}
                    borderTopRightRadius={"10%"}
                    borderBottomRightRadius={"50%"}
                    borderBottomLeftRadius={"10%"}
                    width={{ sm: "12rem", md: "15rem", lg: "15rem" }}
                    height={{ sm: "12rem", md: "15rem", lg: "15rem" }}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDir={"column"}
                    cursor={"pointer"}
                    onClick={() => homeRedirect("/about")}
                    _hover={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                >
                    <Text
                        textAlign={"center"}
                        fontWeight={"bold"}
                        fontSize={{ sm: "1rem", md: "1.5rem", lg: "1.5rem" }}
                        textShadow={"1px 1px 4px white"}
                    >
                        {t("homeLinks.thirdLink")}
                    </Text>
                </Flex>
            </Flex>
        </HStack>
    );
};

export default HomeLinks;
