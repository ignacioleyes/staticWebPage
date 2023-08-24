import { useQuery } from "@tanstack/react-query";
import { useAuthHeader } from "react-auth-kit";
import { getResourceList } from "../../api/api";
import { Product } from "../../api/types";
import { Image, SimpleGrid, Text, VStack, HStack } from "@chakra-ui/react";
import Loading from "../../components/Loading";
import SearchIcon from "../../assets/images/search.png";
import { Link } from "react-router-dom";

const Products = () => {
    const getAuthHeader = useAuthHeader();

    const {
        data: items,
        isSuccess,
        isLoading,
    } = useQuery(
        ["products"],
        () => getResourceList<Product>("products", getAuthHeader()),
        { select: (r) => r.data }
    );

    const products = items?.items;

    return (
        <SimpleGrid
            columns={1}
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
            m={2}
        >
            {isSuccess &&
                products?.map((el) => (
                    <HStack
                        key={el.id}
                        width="95%"
                        borderRadius={"2rem"}
                        bg={"white"}
                        justifySelf={"center"}
                    >
                        <VStack width={"30%"} justifyContent={"center"}>
                            <Image
                                w="100%"
                                src={el.productImage}
                                alt={el.productImage}
                                borderRadius={"2rem"}
                            />
                        </VStack>
                        <VStack
                            width="40%"
                            h="100%"
                            justifyContent={"flex-start"}
                            p={2}
                        >
                            <Text textAlign={"center"} fontSize={"1.5rem"}>
                                {el.name}
                            </Text>
                            <Text textAlign={"center"}>{el.description}</Text>
                        </VStack>
                        <HStack>
                            <Link to={`/products/${el.id}`}>
                                <Image
                                    width={"2rem"}
                                    src={SearchIcon}
                                    cursor={"pointer"}
                                    _hover={{ transform: "scale(1.1)" }}
                                ></Image>
                            </Link>
                        </HStack>
                    </HStack>
                ))}
            {isLoading && <Loading />}
        </SimpleGrid>
    );
};

export default Products;
