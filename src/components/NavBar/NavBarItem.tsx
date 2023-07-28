import { Link, Text, VStack } from "@chakra-ui/react";

interface Props {
    label: string;
    to: string;
    isActive: boolean;
}

const NavbarItem = ({ label, to, isActive }: Props) => {
    return (
        <Link
            href={to}
            px={8}
            borderBottomColor={"#ef810a"}
            borderBottomWidth={isActive ? 3 : 0}
            h={"full"}
            cursor={"pointer"}
            textDecor={"none !important"}
        >
            <VStack justifyContent={"center"} h={"full"}>
                <Text
                    fontSize={"1.3rem"}
                    _hover={{
                        transform: "scale(1.09)",
                        fontWeight: "bold",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                    }}
                >
                    {label}
                </Text>
            </VStack>
        </Link>
    );
};

export default NavbarItem;
