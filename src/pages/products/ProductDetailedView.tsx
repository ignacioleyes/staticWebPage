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
    Center,
} from "@chakra-ui/react";
import Loading from "../../components/Loading";
import { useTranslation } from "react-i18next";

const ProductDetailedView = () => {
    const { id } = useParams();
    const getAuthHeader = useAuthHeader();
    const [t, i18n] = useTranslation("global");

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
                <Center>
                    <VStack
                        width="60%"
                        borderRadius={"2rem"}
                        bg={"white"}
                        p={1}
                        m={5}
                    >
                        <Flex
                            justifyContent={"flex-start"}
                            flexDir={"row"}
                            width={"80%"}
                        >
                            <Heading>
                                {i18n.language === "es"
                                    ? product.name
                                    : product.englishName}
                            </Heading>
                        </Flex>
                        <HStack>
                            <VStack width={"60%"}>
                                <Image
                                    src={product.productImage}
                                    width={"90%"}
                                />
                            </VStack>
                            <VStack
                                pl={3}
                                pr={3}
                                width={"40%"}
                                justifyContent={"flex-start"}
                            >
                                <Text width={"100%"} fontSize={"1.2rem"}>
                                    {i18n.language === "es"
                                        ? product.description
                                        : product.englishDescription}
                                </Text>
                            </VStack>
                        </HStack>
                        <Flex
                            justifyContent={"flex-start"}
                            flexDir={"row"}
                            width={"80%"}
                            mb={2}
                            mt={2}
                        >
                            <Heading>{t("products.featuresTitle")}</Heading>
                        </Flex>
                        <HStack
                            justifyContent={"flex-start"}
                            width={"80%"}
                            mb={2}
                        >
                            <Box>
                                {i18n.language === "es"
                                    ? product.characteristics
                                          .split("*")
                                          .map((part) => part.trim())
                                          .filter((part) => part !== "")
                                          .map((filteredPart, index) => (
                                              <Text key={index}>
                                                  - {filteredPart}
                                              </Text>
                                          ))
                                    : product.englishCharacteristics
                                          .split("–")
                                          .map((part) => part.trim())
                                          .filter((part) => part !== "")
                                          .map((filteredPart, index) => (
                                              <Text key={index}>
                                                  - {filteredPart}
                                              </Text>
                                          ))}
                            </Box>
                        </HStack>
                        {product.characteristicsImages.length > 1 && (
                            <>
                                <HStack
                                    width={"80%"}
                                    justifyContent={"flex-start"}
                                    p={2}
                                >
                                    <Image
                                        w="20%"
                                        src={product.characteristicsImages[0]}
                                        alt={product.characteristicsImages[0]}
                                    />
                                </HStack>
                                <HStack
                                    width={"80%"}
                                    justifyContent={"flex-start"}
                                    p={2}
                                >
                                    <Image
                                        w="80%"
                                        src={product.characteristicsImages[1]}
                                        alt={product.characteristicsImages[1]}
                                    />
                                </HStack>
                            </>
                        )}
                        {product.characteristicsImages.length === 1 && (
                            <HStack
                                width={"80%"}
                                justifyContent={"flex-start"}
                                p={2}
                            >
                                <Image
                                    w="50%"
                                    src={product.characteristicsImages[0]}
                                    alt={product.characteristicsImages[0]}
                                />
                            </HStack>
                        )}
                        {product.certificationsImage && (
                            <>
                                <Flex
                                    justifyContent={"flex-start"}
                                    flexDir={"row"}
                                    width={"80%"}
                                    mb={2}
                                    mt={2}
                                >
                                    <Heading>
                                        {t("products.certifications")}
                                    </Heading>
                                </Flex>
                                <VStack
                                    width={"100%"}
                                    justifyContent={"center"}
                                >
                                    <Image
                                        w="20%"
                                        src={product.certificationsImage}
                                        alt={product.certificationsImage}
                                        borderRadius={"2rem"}
                                    />
                                </VStack>
                            </>
                        )}
                        <VStack width={"100%"} justifyContent={"center"}>
                            <Flex
                                justifyContent={"flex-start"}
                                flexDir={"row"}
                                width={"80%"}
                            >
                                <Heading>{t("products.table")}</Heading>
                            </Flex>
                            <Image
                                w="90%"
                                src={product.tablesImage}
                                alt={product.tablesImage}
                            />
                            <Text
                                textAlign={"center"}
                                fontSize={"1.5rem"}
                                width={"80%"}
                            >
                                {i18n.language === "es"
                                    ? product.alternatives
                                    : product.englishAlternatives}
                            </Text>
                        </VStack>
                    </VStack>
                </Center>
            )}
            {isLoading && <Loading />}
        </>
    );
};

export default ProductDetailedView;
