import { HStack, Image, Box, Divider, Text, VStack } from "@chakra-ui/react";
import Logo from "../../assets/images/logo-medio.png";

const Footer = () => {
    return (
        <Box w={"full"} h={"6rem"} bg={"#CCD9E2"} mt={3}>
            <VStack
                w={"full"}
                h={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <HStack>
                    <Image src={Logo} alt={"Conduflex"} h={"3rem"} />
                </HStack>
                <Divider
                    orientation="horizontal"
                    variant={"solid"}
                    borderColor={"whitesmoke"}
                />
                <HStack>
                    <Text>
                        Angel Pini 4980, (1678) Caseros, 3 de Febrero. Buenos
                        Aires, Argentina. | Derechos Reservados © 2020
                    </Text>
                </HStack>
            </VStack>
        </Box>
    );
};

export default Footer;
