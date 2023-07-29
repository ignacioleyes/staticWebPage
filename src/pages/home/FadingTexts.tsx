import { VStack, HStack, Text, Heading } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const FadingTexts = () => {
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
                    CONDUCTORES ELÉCTRICOS
                </Heading>
                <Text
                    color={"tertiary"}
                    fontSize={"1.7rem"}
                    textShadow={"2px 2px 4px rgba(0, 0, 0, 0.3)"}
                    animation={`${fadeAnimation} 6s ease infinite`}
                >
                    Más de 20 años de trayectoria avalan nuestra experiencia
                </Text>

                <Text
                    color={"tertiary"}
                    fontSize={"1.6rem"}
                    textShadow={"2px 2px 4px rgba(0, 0, 0, 0.1)"}
                    animation={`${fadeAnimation} 6s ease infinite 2s`}
                >
                    Productos de la más alta calidad, fabricados en conformidad
                    con las normas de seguridad
                </Text>

                <Text
                    color={"tertiary"}
                    fontSize={"1.5rem"}
                    textShadow={"2px 2px 4px rgba(0, 0, 0, 0.1)"}
                    animation={`${fadeAnimation} 6s ease infinite 3s`}
                >
                    Servicios personalizados a medida
                </Text>
            </VStack>
        </HStack>
    );
};

export default FadingTexts;
