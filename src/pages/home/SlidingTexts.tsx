import { VStack, HStack, Text, Center, Heading } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const SlidingTexts = () => {
    const fadeAnimation = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;
    return (
        <HStack bg={"#FFC63E"}>
            <Center width="100%" height="15rem">
                <VStack>
                    <Heading
                        size={"3xl"}
                        color={"tertiary"}
                        textShadow={"2px 2px 4px rgba(0, 0, 0, 0.4)"}
                        p={5}
                    >
                        CONDUCTORES ELÉCTRICOS
                    </Heading>
                    <Text
                        color={"secondary"}
                        fontSize={"1.5rem"}
                        animation={`${fadeAnimation} 6s ease infinite`}
                    >
                        Más de 20 años de trayectoria avalan nuestra experiencia
                    </Text>

                    <Text
                        color={"secondary"}
                        fontSize={"1.4rem"}
                        animation={`${fadeAnimation} 6s ease infinite 2s`}
                    >
                        Productos de la más alta calidad, fabricados en
                        conformidad con las normas de seguridad
                    </Text>

                    <Text
                        color={"secondary"}
                        fontSize={"1.3rem"}
                        animation={`${fadeAnimation} 6s ease infinite 3s`}
                    >
                        Servicios personalizados a medida
                    </Text>
                </VStack>
            </Center>
        </HStack>
    );
};

export default SlidingTexts;
