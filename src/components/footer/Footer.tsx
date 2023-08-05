import { HStack, Image, Box, Divider, Text, VStack } from "@chakra-ui/react";
import Logo from "../../assets/images/logo-medio.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const [t] = useTranslation("global");
    return (
        <Box
            w={"full"}
            h={"15vh"}
            bg={"#a2a1a5"}
      
        >
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
                    <Text>{t("footer.address")}</Text>
                </HStack>
            </VStack>
        </Box>
    );
};

export default Footer;
