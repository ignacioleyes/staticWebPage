import { VStack, HStack, Text, Heading } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useTranslation } from "react-i18next";

const FadingTexts = () => {
    const [t] = useTranslation("global");
    const fadeAnimation = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;
    return (
        <HStack justifyContent={"center"} height="25rem" width="100%">
            <VStack>
                <Heading
                    size={"3xl"}
                    color={"secondary"}
                    textShadow={"2px 2px 4px rgba(0, 0, 0, 1)"}
                    p={5}
                >
                    {t("fadingTexts.title")}
                </Heading>
                <Text
                    color={"tertiary"}
                    fontSize={"1.7rem"}
                    textShadow={"2px 2px 4px rgba(0, 0, 0, 0.3)"}
                    animation={`${fadeAnimation} 6s ease infinite`}
                >
                    {t("fadingTexts.fading1")}
                </Text>

                <Text
                    color={"tertiary"}
                    fontSize={"1.6rem"}
                    textShadow={"2px 2px 4px rgba(0, 0, 0, 0.1)"}
                    animation={`${fadeAnimation} 6s ease infinite 2s`}
                >
                    {t("fadingTexts.fading2")}
                </Text>

                <Text
                    color={"tertiary"}
                    fontSize={"1.5rem"}
                    textShadow={"2px 2px 4px rgba(0, 0, 0, 0.1)"}
                    animation={`${fadeAnimation} 6s ease infinite 3s`}
                >
                    {t("fadingTexts.fading3")}
                </Text>
            </VStack>
        </HStack>
    );
};

export default FadingTexts;
