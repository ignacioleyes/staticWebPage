import { Box, HStack, Hide, Link, Image } from "@chakra-ui/react";
import { routes } from "../../config/routes";
import NavbarItem from "./NavBarItem";
import Logo from "../../assets/images/logoConduflex.png";

const Navbar = () => {
    const navRoutes = routes;
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
                        {navRoutes.map((route) => (
                            <NavbarItem
                                key={route.path}
                                label={route.label}
                                to={route.path}
                                isActive={
                                    window.location.pathname === route.path
                                }
                            />
                        ))}
                    </HStack>
                </Hide>
            </HStack>
        </Box>
    );
};

export default Navbar;
