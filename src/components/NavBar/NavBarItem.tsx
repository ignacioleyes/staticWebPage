import { Link, Text, VStack } from "@chakra-ui/react";

interface Props {
    label: string;
    to: string;
    isActive: boolean;
    isDisabled?: boolean;
}

const NavbarItem = ({ label, to, isActive, isDisabled }: Props) => {
    return (
        <Link
            href={isDisabled ? "#" : to}
            px={8}
            color={isDisabled ? "gray" : "white"}
            borderBottomColor={"#ef810a"}
            borderBottomWidth={isActive ? 3 : 0}
            h={"full"}
            cursor={isDisabled ? "not-allowed" : "pointer"}
            textDecor={"none !important"}
            title={
                isDisabled
                    ? "Not serving on current env. Check deploy.json"
                    : ""
            }
        >
            <VStack justifyContent={"center"} h={"full"}>
                <Text
                    fontSize={"1.3rem"}
                    _hover={{
                        transform: "scale(1.09)",
                        fontWeight: "bold",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)"
                        
                    }}
                >
                    {label}
                </Text>
            </VStack>
        </Link>
    );
};

export default NavbarItem;
