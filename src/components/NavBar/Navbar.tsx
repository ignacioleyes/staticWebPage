import { Box, HStack, Hide, Link, Image, Button } from "@chakra-ui/react";
import NavbarItem from "./NavBarItem";
import Logo from "../../assets/images/logoConduflex.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [t, i18n] = useTranslation("global");

    const routes = [
        {
            label: `${t("navbar.company")}`,
            path: "/about",
        },
        {
            label: `${t("navbar.products")}`,
            path: "/products",
        },
        {
            label: `${t("navbar.contact")}`,
            path: "/contact",
        },
    ];
    return (
        <Box
            w={"full"}
            h={"10vh"}
            bgGradient={"linear(to-t, #FFC63E, #808182)"}
            mb={0}
        >
            <HStack
                w={"full"}
                h={"full"}
                py={2}
                justifyContent={"space-around"}
                alignItems={"center"}
            >
                <HStack spacing={5} h="full" alignItems={"center"}>
                    <Link href={"/"} h={"full"}>
                        <Image src={Logo} alt={"Conduflex"} h={"full"} />
                    </Link>
                </HStack>
                <Hide below="md">
                    <HStack h={"full"}>
                        {routes.map((route) => (
                            <NavbarItem
                                key={route.path}
                                label={route.label}
                                to={route.path}
                                path={route.path}
                            />
                        ))}
                    </HStack>
                    <HStack>
                        <Button onClick={() => i18n.changeLanguage("es")}>
                            ES
                        </Button>
                        <Button onClick={() => i18n.changeLanguage("en")}>
                            EN
                        </Button>
                    </HStack>
                </Hide>
            </HStack>
        </Box>
    );
};

export default Navbar;
