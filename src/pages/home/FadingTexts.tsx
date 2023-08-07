import { VStack, HStack, Text, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const FadingTexts = () => {
    const [t] = useTranslation("global");
    const [message, setMessage] = useState("");
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        const messages = [
            t("fadingTexts.fading1"),
            t("fadingTexts.fading2"),
            t("fadingTexts.fading3"),
        ];

        const timer = setTimeout(() => {
            setMessage(messages[currentMessageIndex]);
            setCurrentMessageIndex(
                (prevIndex) => (prevIndex + 1) % messages.length
            );
        }, 3000);

        return () => clearTimeout(timer);
    }, [currentMessageIndex, t]);

    return (
        <HStack justifyContent={"center"} height="auto" width="100%"  mt={5}>
            <VStack>
                <Heading
                    size={{ base:"lg", sm:"lg", md:"lg", lg:"2xl", xl:"3xl" }}
                    color={"secondary"}
                    textShadow={"2px 2px 4px rgba(0, 0, 0, 0.4)"}
                    p={5}
                    textAlign={"center"}
                >
                    {t("fadingTexts.title")}
                </Heading>
                <Text
                    color={"secondary"}
                    fontSize={{ base:"lg", sm:"lg", md:"lg", lg:"2xl", xl:"3xl" }}
                    textShadow={"2px 2px 4px rgba(0, 0, 0, 0.4)"}
                    textAlign={"center"}
                >
                    {message}
                </Text>
            </VStack>
        </HStack>
    );
};

export default FadingTexts;
