import { Text, HStack, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const HomeLinks = () => {
    const navigate = useNavigate();

    const homeRedirect = (route: string) => {
        navigate(route);
    };
    return (
        <HStack width={"100%"} height={"15rem"}>
            <Flex justifyContent={"space-evenly"} width={"100%"}>
                <Flex
                    bgGradient={"linear(to right, #808182, #5A8100)"}
                    borderTopLeftRadius={"50%"}
                    borderTopRightRadius={"10%"}
                    borderBottomRightRadius={"50%"}
                    borderBottomLeftRadius={"10%"}
                    width={"15rem"}
                    height={"15rem"}
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
                        fontSize={"1.5rem"}
                        textShadow={"1px 1px 4px white"}
                    >
                        Conocé nuestros productos
                    </Text>
                </Flex>
                <Flex
                    bgGradient={"linear(to right, #808182, #FFB400)"}
                    borderTopLeftRadius={"50%"}
                    borderTopRightRadius={"10%"}
                    borderBottomRightRadius={"50%"}
                    borderBottomLeftRadius={"10%"}
                    width={"15rem"}
                    height={"15rem"}
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
                        fontSize={"1.5rem"}
                        textShadow={"1px 1px 4px white"}
                    >
                        ¿Tenés un proyecto?
                    </Text>
                </Flex>
                <Flex
                    bgGradient={"linear(to right, #808182, #FF6C02)"}
                    borderTopLeftRadius={"50%"}
                    borderTopRightRadius={"10%"}
                    borderBottomRightRadius={"50%"}
                    borderBottomLeftRadius={"10%"}
                    width={"15rem"}
                    height={"15rem"}
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
                        fontSize={"1.5rem"}
                        textShadow={"1px 1px 4px white"}
                    >
                        Conocé nuestra trayectoria
                    </Text>
                </Flex>
            </Flex>
        </HStack>
    );
};

export default HomeLinks;
