import { VStack, Text, HStack, Flex } from "@chakra-ui/react";
import {useNavigate} from "react-router-dom"

const HomeLinks = () => {
    const navigate = useNavigate();

    const homeRedirect = (route: string) => {
        navigate(route);
    }
    return (
        <HStack width={"100%"} height={"15rem"}>
            <VStack
                width={"33%"}
                justifyContent={"center"}
            >
                <Flex
                    bg={"#5A8100"}
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
                    _hover={{boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)"}}
                >
                    <Text textAlign={"center"}>Conocé nuestros productos</Text>
                </Flex>
            </VStack>
            <VStack
                width={"33%"}
                justifyContent={"center"}
            >
                <Flex
                    bg={"#FFB400"}
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
                    _hover={{boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)"}}
                >
                    <Text textAlign={"center"}>¿Tenés un proyecto?</Text>
                </Flex>
            </VStack>
            <VStack
                width={"33%"}
                justifyContent={"center"}
            >
                <Flex
                    bg={"#FF6C02"}
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
                    _hover={{boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)"}}
                >
                    <Text textAlign={"center"}>Conocé nuestra trayectoria</Text>
                </Flex>
            </VStack>
        </HStack>
    );
};

export default HomeLinks;
