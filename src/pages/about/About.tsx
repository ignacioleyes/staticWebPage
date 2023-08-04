import {
    VStack,
    Box,
    Text,
    HStack,
    Avatar,
    Heading,
    Divider,
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
        <VStack height={"80vh"} spacing={0} bg={"whitesmoke"} mb={5}>
            <HStack
                width={"80%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box width={"100%"}>
                    <Text
                        color={"secondary"}
                        textAlign={"justify"}
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
            </HStack>
            <HStack
                width={"80%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                {companyInfo.map((el, idx) => (
                    <VStack
                        key={idx}
                        bgColor={"white"}
                        width={"full"}
                        height={"15rem"}
                        borderRadius={"1rem"}
                        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                        borderWidth={1}
                    >
                        <VStack justifyContent={"center"} h={"30%"} w={"full"}>
                            <HStack spacing={3}>
                                <Avatar
                                    borderColor={"orange"}
                                    borderWidth={2}
                                    src={el.icon}
                                    size={"sm"}
                                />
                                <Heading
                                    fontSize={{
                                        base: "0.5rem",
                                        sm: "0.7rem",
                                        md: "1rem",
                                        lg: "1rem",
                                        xl: "1.5rem",
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
                                    base: "0.5rem",
                                    sm: "0.5rem",
                                    md: "0.6rem",
                                    lg: "0.6rem",
                                    xl: "1rem",
                                }}
                            >
                                {el.description}
                            </Text>
                        </VStack>
                    </VStack>
                ))}
            </HStack>
        </VStack>
    );
};

export default About;
