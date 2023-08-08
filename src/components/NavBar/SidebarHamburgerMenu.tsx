import { Link } from "react-router-dom";
import { Box, VStack, Center, Image, Icon } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import USAFLAG from "../../assets/images/usa-flag.png";
import ARGFLAG from "../../assets/images/argentina-flag.png";
import { MdOutlineClose } from "react-icons/md";
import { keyframes } from "@emotion/react";
import { useEffect } from "react";

interface Props {
    setIsOpen: (value: boolean) => void;
}

const SidebarHamburgerMenu = ({ setIsOpen }: Props) => {
    const [t, i18n] = useTranslation("global");

    // Function to close the sidebar when clicking outside
    const handleCloseSidebar = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const sidebar = document.getElementById("sidebar");

        // Check if the click occurred outside the sidebar using the element ID
        if (sidebar && !sidebar.contains(target)) {
            setIsOpen(false);
        }
    };

    // Add event listener to handle clicks outside the sidebar
    useEffect(() => {
        document.addEventListener("mousedown", handleCloseSidebar);
        return () => {
            document.removeEventListener("mousedown", handleCloseSidebar);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const NAV_ITEMS = [
        {
            label: `${t("navbar.main")}`,
            path: "/",
        },
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

    const expandSidebarAnimation = keyframes`
    from {
      width: 0.1rem;
    }
    to {
      width: 10rem;
    }
  `;

    return (
        <VStack
            id="sidebar"
            bg={"blackAlpha.900"}
            opacity={"0.95"}
            width={"10rem"}
            height="100%"
            position="absolute"
            zIndex={2}
            spacing={10}
            top={0}
            right={0}
            justifyContent={"flex-start"}
            animation={`${expandSidebarAnimation} 0.3s ease forwards`}
        >
            <Icon
                as={MdOutlineClose}
                color={"whitesmoke"}
                onClick={() => setIsOpen(false)}
                mt={5}
                _hover={{ transform: "scale(1.3)", cursor: "pointer" }}
            />
            <VStack width={"100%"} color={"whitesmoke"} spacing={8}>
                {NAV_ITEMS.map((item, idx) => (
                    <Link
                        to={item.path!}
                        key={idx}
                        onClick={() => setIsOpen(false)}
                    >
                        <Box>
                            <Center
                                color={"FFFFFF"}
                                _hover={{ transform: "scale(1.09)" }}
                            >
                                {item.label}
                            </Center>
                        </Box>
                    </Link>
                ))}
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
            </VStack>
        </VStack>
    );
};

export default SidebarHamburgerMenu;
