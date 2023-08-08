import {
    VStack,
    Box,
    Text,
    HStack,
    Avatar,
    Heading,
    Divider,
    Flex,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import MissionIcon from "../../assets/images/missionIcon.png";
import PhilosofyIcon from "../../assets/images/philosophyIcon.png";
import PolicyIcon from "../../assets/images/policyIcon.png";

const About = () => {
    const [t] = useTranslation("global");

    const companyInfo = [
        {
            title: `${t("about.visionTitle")}`,
            description: `${t("about.visionDescription")}`,
            icon: MissionIcon,
        },
        {
            title: `${t("about.philosophyTitle")}`,
            description: `${t("about.philosophyDescription")}`,
            icon: PhilosofyIcon,
        },
        {
            title: `${t("about.policyTitle")}`,
            description: `${t("about.policyDescription")}`,
            icon: PolicyIcon,
        },
    ];
    return (
        <VStack height={"98vh"} spacing={0} mt={5}>
            <HStack
                width={"80%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"1rem"}
                boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
            >
                <Box width={"80%"}>
                    <Text
                        color={"secondary"}
                        textAlign={"justify"}
                        fontWeight={"bold"}
                        fontSize={{
                            base: "0.75rem",
                            sm: "0.9rem",
                            md: "0.9rem",
                            lg: "1rem",
                            xl: "1.5rem",
                        }}
                    >
                        {t("about.history")}
                    </Text>
                </Box>
            </HStack>
            <Flex
                width={"80%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                }}
            >
                {companyInfo.map((el, idx) => (
                    <VStack
                        key={idx}
                        bgColor={"whitesmoke"}
                        width={"full"}
                        height={{
                            base: "7rem",
                            sm: "8rem",
                            md: "15rem",
                            lg: "15rem",
                            xl: "15rem",
                        }}
                        borderRadius={"1rem"}
                        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                        borderWidth={1}
                        p={5}
                        m={2}
                    >
                        <VStack justifyContent={"center"} h={"30%"} w={"full"}>
                            <HStack spacing={3}>
                                <Avatar
                                    borderColor={"orange"}
                                    borderWidth={2}
                                    src={el.icon}
                                    size={{
                                        base: "sm",
                                        sm: "sm",
                                        md: "md",
                                        lg: "lg",
                                        xl: "lg",
                                    }}
                                />
                                <Heading
                                    fontSize={{
                                        base: "0.5rem",
                                        sm: "0.7rem",
                                        md: "1rem",
                                        lg: "1rem",
                                        xl: "1.8rem",
                                    }}
                                >
                                    {el.title}
                                </Heading>
                            </HStack>
                        </VStack>
                        <Divider
                            orientation={"horizontal"}
                            variant={"solid"}
                            borderColor={"lightgray"}
                        />
                        <VStack
                            justifyContent={"flex-start"}
                            alignItems={"center"}
                            h={"70%"}
                            w={"full"}
                            px={1}
                        >
                            <Text
                                textAlign={"justify"}
                                fontSize={{
                                    base: "0.45rem",
                                    sm: "0.6rem",
                                    md: "0.7rem",
                                    lg: "0.8rem",
                                    xl: "1.1rem",
                                }}
                            >
                                {el.description}
                            </Text>
                        </VStack>
                    </VStack>
                ))}
            </Flex>
        </VStack>
    );
};

export default About;
