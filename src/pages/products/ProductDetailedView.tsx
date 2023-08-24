import { useQuery } from "@tanstack/react-query";
import { useAuthHeader } from "react-auth-kit";
import { useParams } from "react-router-dom";
import { getResource } from "../../api/api";
import { Product } from "../../api/types";
import {
    HStack,
    VStack,
    Image,
    Text,
    Heading,
    Box,
    Flex,
} from "@chakra-ui/react";
import Loading from "../../components/Loading";
import { useTranslation } from "react-i18next";

const ProductDetailedView = () => {
    const { id } = useParams();
    const getAuthHeader = useAuthHeader();
    const [t] = useTranslation("global");

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
                    width="98%"
                    borderRadius={"2rem"}
                    bg={"white"}
                    p={1}
                    m={5}
                >
                    <Flex>
                        <Heading textAlign={"left"}>{product.name}</Heading>
                    </Flex>
                    <HStack>
                        <VStack width={"60%"}>
                            <Image src={product.productImage} width={"80%"} />
                        </VStack>
                        <VStack
                            pl={3}
                            pr={3}
                            width={"40%"}
                            justifyContent={"flex-start"}
                        >
                            <Text width={"100%"} fontSize={"1.2rem"}>
                                {product.description}
                            </Text>
                        </VStack>
                    </HStack>
                    <Box>
                        <Heading textAlign={"left"}>{t("products.featuresTitle")}</Heading>
                    </Box>
                    <HStack width={"30%"} justifyContent={"center"}>
                        <Box textAlign="left">
                            {product.characteristics
                                .split("*")
                                .map((part) => part.trim()) // Trim each part
                                .filter((part) => part !== "") // Filter out empty parts
                                .map((filteredPart, index) => (
                                    <Text key={index}>- {filteredPart}</Text>
                                ))}
                        </Box>
                    </HStack>
                    <HStack width={"100%"} justifyContent={"center"}>
                        <Image
                            w="10%"
                            src={product.characteristicsImages[0]}
                            alt={product.characteristicsImages[0]}
                        />
                        <Image
                            w="40%"
                            src={product.characteristicsImages[1]}
                            alt={product.characteristicsImages[1]}
                        />
                    </HStack>
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
