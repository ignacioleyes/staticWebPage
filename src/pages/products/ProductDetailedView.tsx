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
    Box,
    Center,
    Divider,
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
                        width="80%"
                        borderRadius={"0.5rem"}
                        bg={"white"}
                        p={1}
                        m={5}
                    >
                        <HStack
                            justifyContent={"flex-start"}
                            width={"90%"}
                            mt={4}
                        >
                            <Text
                                fontSize={{
                                    base: "1rem",
                                    sm: "1rem",
                                    md: "1.2rem",
                                    lg: "1.5rem",
                                    xl: "2rem",
                                }}
                            >
                                {i18n.language === "es"
                                    ? product.name
                                    : product.englishName}
                            </Text>
                        </HStack>
                        <HStack
                            width={"90%"}
                            justifyContent={"flex-start"}
                            mt={2}
                        >
                            <Text
                                fontSize={{
                                    base: "0.8rem",
                                    sm: "0.8rem",
                                    md: "1rem",
                                    lg: "1rem",
                                    xl: "1.2rem",
                                }}
                            >
                                {i18n.language === "es"
                                    ? product.description
                                    : product.englishDescription}
                            </Text>
                        </HStack>
                        <HStack>
                            <Image src={product.productImage} width={"100%"} />
                        </HStack>
                        <HStack
                            width={"90%"}
                            justifyContent={"flex-start"}
                            mt={2}
                        >
                            <Text
                                fontSize={{
                                    base: "0.8rem",
                                    sm: "0.8rem",
                                    md: "1rem",
                                    lg: "1rem",
                                    xl: "1.1rem",
                                }}
                                fontStyle={"italic"}
                            >
                                {t("products.marking")}:{" "}
                                {i18n.language === "es"
                                    ? product.brand
                                    : product.brand}
                            </Text>
                        </HStack>
                        {product.certificationsImage && (
                            <HStack width={"90%"} justifyContent={"flex-end"}>
                                <Image
                                    w="8%"
                                    src={product.certificationsImage}
                                    alt={product.certificationsImage}
                                    borderRadius={"2rem"}
                                />
                            </HStack>
                        )}
                        <HStack justifyContent={"flex-start"} width={"90%"}>
                            <Text
                                fontSize={{
                                    base: "1rem",
                                    sm: "1rem",
                                    md: "1.2rem",
                                    lg: "1.5rem",
                                    xl: "2rem",
                                }}
                                fontWeight={"bold"}
                            >
                                {t("products.applicationTitle")}
                            </Text>
                        </HStack>
                        <Divider
                            orientation={"horizontal"}
                            variant={"solid"}
                            borderColor={"primary"}
                            borderWidth={"0.1rem"}
                            width={"90%"}
                        />
                        <HStack
                            width={"90%"}
                            justifyContent={"flex-start"}
                            mt={1}
                            mb={1}
                        >
                            <Text
                                fontSize={{
                                    base: "0.8rem",
                                    sm: "0.8rem",
                                    md: "1rem",
                                    lg: "1rem",
                                    xl: "1.2rem",
                                }}
                            >
                                {i18n.language === "es"
                                    ? product.application
                                    : product.englishApplication}
                            </Text>
                        </HStack>
                        <HStack
                            width={"80%"}
                            justifyContent={"flex-start"}
                            mt={2}
                        >
                            <Text
                                fontSize={{
                                    base: "1rem",
                                    sm: "1rem",
                                    md: "1.2rem",
                                    lg: "1.5rem",
                                    xl: "2rem",
                                }}
                                fontWeight={"bold"}
                            >
                                {t("products.featuresTitle")}
                            </Text>
                        </HStack>
                        <Divider
                            orientation={"horizontal"}
                            variant={"solid"}
                            borderColor={"primary"}
                            borderWidth={"0,1rem"}
                            width={"80%"}
                        />
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
                                              <Text
                                                  fontSize={{
                                                      base: "0.8rem",
                                                      sm: "0.8rem",
                                                      md: "1rem",
                                                      lg: "1rem",
                                                      xl: "1.2rem",
                                                  }}
                                                  key={index}
                                              >
                                                  - {filteredPart}
                                              </Text>
                                          ))
                                    : product.englishCharacteristics
                                          .split("*")
                                          .map((part) => part.trim())
                                          .filter((part) => part !== "")
                                          .map((filteredPart, index) => (
                                              <Text
                                                  fontSize={{
                                                      base: "0.8rem",
                                                      sm: "0.8rem",
                                                      md: "1rem",
                                                      lg: "1rem",
                                                      xl: "1.2rem",
                                                  }}
                                                  key={index}
                                              >
                                                  - {filteredPart}
                                              </Text>
                                          ))}
                            </Box>
                        </HStack>
                        <HStack
                            width={"80%"}
                            justifyContent={"flex-start"}
                            mt={2}
                        >
                            <Text
                                fontSize={{
                                    base: "1rem",
                                    sm: "1rem",
                                    md: "1.2rem",
                                    lg: "1.5rem",
                                    xl: "2rem",
                                }}
                                fontWeight={"bold"}
                            >
                                {t("products.codificationTitle")}
                            </Text>
                        </HStack>
                        <Divider
                            orientation={"horizontal"}
                            variant={"solid"}
                            borderColor={"primary"}
                            borderWidth={"0,1rem"}
                            width={"80%"}
                        />
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
                        <VStack width={"100%"} justifyContent={"center"}>
                            <HStack
                                width={"80%"}
                                justifyContent={"flex-start"}
                                mt={2}
                            >
                                <Text
                                    fontSize={{
                                        base: "1rem",
                                        sm: "1rem",
                                        md: "1.2rem",
                                        lg: "1.5rem",
                                        xl: "2rem",
                                    }}
                                    fontWeight={"bold"}
                                >
                                    {t("products.table")}
                                </Text>
                            </HStack>
                            <Divider
                                orientation={"horizontal"}
                                variant={"solid"}
                                borderColor={"primary"}
                                borderWidth={"0,8px"}
                                width={"80%"}
                            />
                            <Image
                                w="80%"
                                src={product.tablesImage}
                                alt={product.tablesImage}
                            />
                        </VStack>
                    </VStack>
                </Center>
            )}
            {isLoading && <Loading />}
        </>
    );
};

export default ProductDetailedView;
