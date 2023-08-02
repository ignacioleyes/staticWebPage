import { VStack, HStack, Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const About = () => {
    const [t] = useTranslation("global");
    return (
        <HStack
            height={"100%"}
            spacing={0}
            bgImage={"url('/companyBG.jpeg')"}
            bgSize={"cover"}
        >
            <VStack
                width={"50%"}
                height={"80vh"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box width={"50%"}>
                    <Text
                        color={"secondary"}
                        fontWeight={"bold"}
                        fontSize={{
                            base: "0.6rem",
                            sm: "0.7rem",
                            md: "0.8rem",
                            lg: "1rem",
                            xl: "1.2rem",
                        }}
                    >
                        {t("about.history")}
                    </Text>
                </Box>
            </VStack>
            <VStack width={"50%"} height={"80vh"} justifyContent={"center"}>
                <VStack
                    bgGradient={"linear(to right, #808182, #E1DCD9, #808182)"}
                    borderRadius={"2rem"}
                    width={"50%"}
                    height={"12rem"}
                    alignItems={"center"}
                >
                    <Text
                        color={"whitesmoke"}
                        textShadow={"1px 1px 4px black"}
                        fontSize={{ base: "0.6rem", sm:"0.7rem", md:"1.2rem", lg:"1.5rem" }}
                    >
                        {t("about.visionTitle")}
                    </Text>
                    <Text
                        textAlign={"center"}
                        fontWeight={"bold"}
                        fontSize={{ base: "0.6rem", sm: "0.6rem", md: "0.8rem", lg: "1rem" }}
                        textShadow={"1px 1px 4px white"}
                    >
                        {t("about.visionDescription")}
                    </Text>
                </VStack>
                <VStack
                    bgGradient={"linear(to right, #808182, #A67F78, #808182)"}
                    borderRadius={"2rem"}
                    width={"50%"}
                    height={"12rem"}
                    alignItems={"center"}
                >
                    <Text
                        color={"whitesmoke"}
                        textShadow={"1px 1px 4px black"}
                        fontSize={{ base:"0.6rem", sm:"0.7rem", md:"1.2rem", lg:"1.5rem" }}
                    >
                        {t("about.philosophyTitle")}
                    </Text>
                    <Text
                        textAlign={"center"}
                        fontWeight={"bold"}
                        fontSize={{ base:"0.6rem", sm:"0.6rem", md:"0.8rem", lg:"1rem" }}
                        textShadow={"1px 1px 4px white"}
                    >
                        {t("about.philosophyDescription")}
                    </Text>
                </VStack>
                <VStack
                    bgGradient={"linear(to right, #808182, #E1DCD9, #808182)"}
                    borderRadius={"2rem"}
                    width={"50%"}
                    height={"12rem"}
                    alignItems={"center"}
                    flexDir={"column"}
                >
                    <Text
                        color={"whitesmoke"}
                        textShadow={"1px 1px 4px black"}
                        fontSize={{ base:"0.6rem", sm:"0.7rem", md:"1.2rem", lg:"1.5rem" }}
                    >
                        {t("about.policyTitle")}
                    </Text>
                    <Text
                        textAlign={"center"}
                        fontWeight={"bold"}
                        fontSize={{ base:"0.6rem", sm:"0.6rem", md:"0.8rem", lg:"1rem" }}
                        textShadow={"1px 1px 4px white"}
                    >
                        {t("about.policyDescription")}
                    </Text>
                </VStack>
            </VStack>
        </HStack>
    );
};

export default About;
