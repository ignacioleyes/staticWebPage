import {
    VStack,
    HStack,
    chakra,
    Heading,
    Divider,
    Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const MapAndCards = () => {
    const [t] = useTranslation("global");
    const contactInfo = [
        {
            title: `${t("contact.businessHoursTitle")}`,
            description: `${t("contact.businessHours")}`,
        },
        {
            title: `${t("contact.contactTitle")}`,
            description: `${t("contact.contact.clients")}`,
            description2: `${t("contact.contact.providers")}`,
            description3: `${t("contact.contact.phone")}`,
        },
    ];
    return (
        <VStack height={"auto"} spacing={0} mb={5} mt={5}>
            <HStack
                width={"75%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={5}
            >
                {contactInfo.map((el, idx) => (
                    <VStack
                        key={idx}
                        bgColor={"whitesmoke"}
                        width={"full"}
                        height={"10rem"}
                        borderRadius={"1rem"}
                        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                        borderWidth={1}
                    >
                        <VStack justifyContent={"center"} h={"30%"} w={"full"}>
                            <HStack spacing={3}>
                                <Heading
                                    fontSize={{
                                        base: "0.6rem",
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
                            justifyContent={"center"}
                            alignItems={"center"}
                            h={"70%"}
                            w={"full"}
                            px={1}
                        >
                            <Text
                                textAlign={"center"}
                                fontSize={{
                                    base: "0.6rem",
                                    sm: "0.5rem",
                                    md: "0.6rem",
                                    lg: "0.6rem",
                                    xl: "1rem",
                                }}
                            >
                                {el.description}
                            </Text>
                            {el.description2 && (
                                <>
                                    <Text
                                        textAlign={"center"}
                                        fontSize={{
                                            base: "0.6rem",
                                            sm: "0.5rem",
                                            md: "0.6rem",
                                            lg: "0.6rem",
                                            xl: "1rem",
                                        }}
                                    >
                                        {el.description2}
                                    </Text>
                                    <Text
                                        textAlign={"justify"}
                                        fontSize={{
                                            base: "0.6rem",
                                            sm: "0.5rem",
                                            md: "0.6rem",
                                            lg: "0.6rem",
                                            xl: "1rem",
                                        }}
                                    >
                                        {el.description3}
                                    </Text>
                                </>
                            )}
                        </VStack>
                    </VStack>
                ))}
            </HStack>
            <HStack
                width={"75%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <chakra.iframe
                    width={"full"}
                    height={"30rem"}
                    border={0}
                    borderRadius={"1rem"}
                    loading="lazy"
                    allowFullScreen
                    src={import.meta.env["VITE_GOOGLEMAPS_KEY"]}
                ></chakra.iframe>
            </HStack>
        </VStack>
    );
};

export default MapAndCards;
