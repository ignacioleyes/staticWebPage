import { VStack, HStack, Text } from "@chakra-ui/react";
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
        <HStack
            justifyContent={"center"}
            height="25rem"
            width="100%"
            position={"absolute"}
            top={10}
        >
            <VStack>
                <Text
                    color={"whitesmoke"}
                    fontSize={{ sm: "0.9rem", md: "1.5rem", lg: "3rem" }}
                    textShadow={"2px 2px 4px rgba(0, 0, 0, 0.3)"}
                    textAlign={"center"}
                >
                    {message}
                </Text>
            </VStack>
        </HStack>
    );
};

export default FadingTexts;
