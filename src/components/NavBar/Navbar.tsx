import { Box, HStack, Hide, Link, Image, Icon, Show } from "@chakra-ui/react";
import NavbarItem from "./NavBarItem";
import Logo from "../../assets/images/logoConduflex.png";
import USAFLAG from "../../assets/images/usa-flag.png";
import ARGFLAG from "../../assets/images/argentina-flag.png";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import SidebarHamburgerMenu from "./SidebarHamburgerMenu";

const Navbar = () => {
    const [t, i18n] = useTranslation("global");
    const [isOpen, setIsOpen] = useState(false);

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
            bgGradient={"linear(to-t, #000000, #808182)"}
            mb={0}
        >
            <HStack
                w={"full"}
                h={"full"}
                py={2}
                justifyContent={{
                    base: "space-between",
                    sm: "space-between",
                    md: "space-around",
                    lg: "space-around",
                }}
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
                        <Box
                            maxW={"3.5rem"}
                            height={"2.1rem"}
                            _hover={{
                                cursor: "pointer",
                                transform: "scale(1.09)",
                            }}
                            onClick={() => i18n.changeLanguage("es")}
                        >
                            <Image src={ARGFLAG} alt={"usa"} h={"full"} />
                        </Box>
                        <Box
                            maxW={"3.5rem"}
                            height={"2rem"}
                            _hover={{
                                cursor: "pointer",
                                transform: "scale(1.09)",
                            }}
                            onClick={() => i18n.changeLanguage("en")}
                        >
                            <Image src={USAFLAG} alt={"arg"} h={"full"} />
                        </Box>
                    </HStack>
                </Hide>
                <Show below="md">
                    <Icon
                        boxSize={6}
                        as={RxHamburgerMenu}
                        color={"whitesmoke"}
                        onClick={() => setIsOpen(true)}
                        _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
                        m={3}
                    />
                </Show>
                {isOpen && <SidebarHamburgerMenu setIsOpen={setIsOpen} />}
            </HStack>
        </Box>
    );
};

export default Navbar;
