import { VStack, HStack, Text, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface Props {
    description: string[];
    englishDescription: string[];
}

const FadingTexts = ({ description, englishDescription }: Props) => {
    const [t, i18n] = useTranslation("global");
    const [message, setMessage] = useState("");
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        setMessage(i18n.language === "es" ? description[currentMessageIndex] : englishDescription[currentMessageIndex]);
    }, [i18n.language])

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage(i18n.language === "es" ? description[currentMessageIndex] : englishDescription[currentMessageIndex]);
            setCurrentMessageIndex(
                (prevIndex) => i18n.language === "es" ? (prevIndex + 1) % description.length : (prevIndex + 1) % englishDescription.length
            );
        }, 3000);
        return () => clearTimeout(timer);
    }, [currentMessageIndex, t, i18n.language, message]);

    return (
        <HStack justifyContent={"center"} height="20rem" width="100%"  mt={5}>
            <VStack>
                <Heading
                    size={{ base:"lg", sm:"lg", md:"lg", lg:"2xl", xl:"3xl" }}
                    color={"primary"}
                    textShadow={"2px 2px 4px rgba(0, 0, 0, 0.1)"}
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
