import { useQuery } from "@tanstack/react-query";
import { useAuthHeader } from "react-auth-kit";
import { useParams } from "react-router-dom";
import { getResource } from "../../api/api";
import { Product } from "../../api/types";
import { HStack, VStack, Image, Text, Heading } from "@chakra-ui/react";
import Loading from "../../components/Loading";

const ProductDetailedView = () => {
    const { id } = useParams();
    const getAuthHeader = useAuthHeader();

    const {
        data: product,
        isSuccess,
        isLoading,
    } = useQuery(
        [`products/${id}`],
        async () => getResource<Product>(`products/${id}`, getAuthHeader()),
        { select: (r) => r.data }
    );
    return (
        <>
            {isSuccess && (
                <VStack
                    width="95%"
                    borderRadius={"2rem"}
                    bg={"white"}
                    justifySelf={"center"}
                    p={2}
                    mt={2}
                    mb={5}
                >
                    <VStack width="40%" h="100%" justifyContent={"flex-start"}>
                        <Heading textAlign={"center"} fontSize={"1.5rem"}>
                            {product.name}
                        </Heading>
                    </VStack>
                    <VStack width={"30%"} justifyContent={"center"}>
                        <Image
                            w="100%"
                            src={product.productImage}
                            alt={product.productImage}
                            borderRadius={"2rem"}
                        />
                    </VStack>
                    <VStack width="40%" h="100%" justifyContent={"flex-start"}>
                        <Text textAlign={"center"}>{product.description}</Text>
                    </VStack>
                    {product.certificationsImage && (
                        <VStack width={"10%"} justifyContent={"center"}>
                            <Image
                                w="100%"
                                src={product.certificationsImage}
                                alt={product.certificationsImage}
                                borderRadius={"2rem"}
                            />
                        </VStack>
                    )}
                    <VStack width="40%" h="100%" justifyContent={"flex-start"}>
                        <Text textAlign={"center"}>
                            {product.characteristics}
                        </Text>
                    </VStack>

                    <HStack width={"30%"} justifyContent={"center"}>
                        <Image
                            w="30%"
                            src={product.characteristicsImages[0]}
                            alt={product.characteristicsImages[0]}
                        />
                        <Image
                            w="100%"
                            src={product.characteristicsImages[1]}
                            alt={product.characteristicsImages[1]}
                        />
                    </HStack>
                    <VStack width={"50%"} justifyContent={"center"}>
                        <Image
                            w="100%"
                            src={product.tablesImage}
                            alt={product.tablesImage}
                            borderRadius={"2rem"}
                        />
                    </VStack>
                    <VStack width="40%" h="100%" justifyContent={"flex-start"}>
                        <Text textAlign={"center"}>{product.alternatives}</Text>
                    </VStack>
                </VStack>
            )}
            {isLoading && <Loading />}
        </>
    );
};

export default ProductDetailedView;
