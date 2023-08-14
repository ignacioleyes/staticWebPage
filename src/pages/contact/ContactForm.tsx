import {
    chakra,
    SimpleGrid,
    useToast,
    GridItem,
    FormLabel,
    FormControl,
    FormErrorMessage,
    Textarea,
    Button,
    HStack,
    VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import FormikInput from "../../components/FormikInput";
import { postResource } from "../../api/api";
import { useAuthHeader } from "react-auth-kit";
import { useTranslation } from "react-i18next";
import moment from "moment";

const initialValues = {
    name: "",
    company: "",
    email: "",
    message: "",
    creationDate: moment().format("yyyy-MM-DD"),
};

const ContactForm = () => {
    const getAuthHeader = useAuthHeader();
    const [t] = useTranslation("global");
    const toast = useToast();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(t("contactForm.nameError")),
        email: Yup.string()
            .required(t("contactForm.emailError"))
            .email(t("contactForm.emailErrorFormat")),
        company: Yup.string().nullable(),
        message: Yup.string().required(t("contactForm.messageError")),
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema,
        onSubmit: async () => {
            await contact();
            formik.resetForm();
        },
    });

    const onSuccess = () => {
        toast({
            title: "Message Sent",
            status: "success",
            isClosable: true,
        });
    };

    const onError = (err: AxiosError) => {
        console.log(err);
        toast({
            title: "Error",
            description: <>{err?.response?.data || "Try again later"}</>,
            status: "error",
        });
    };

    const { mutateAsync: contact, isLoading } = useMutation(
        () => postResource("contacts", getAuthHeader(), formik.values),
        {
            onSuccess: onSuccess,
            onError: onError,
        }
    );

    return (
        <VStack height={"auto"} spacing={0} mb={5}>
            <HStack
                width={"75%"}
                height={"auto"}
                justifyContent={"center"}
                alignItems={"center"}
                bg={"whitesmoke"}
                borderRadius={"1rem"}
                boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
            >
                <chakra.form
                    w={"full"}
                    onSubmit={formik.handleSubmit}
                    px={5}
                    m={2}
                >
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                        <GridItem colSpan={1}>
                            <FormikInput
                                name="name"
                                id="name"
                                placeholder={t("contactForm.namePlaceholder")}
                                isRequired={true}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.errors.name}
                                touched={formik.touched.name}
                                label={t("contactForm.nameLabel")}
                            />
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormikInput
                                name="email"
                                id="email"
                                placeholder={t("contactForm.emailPlaceholder")}
                                isRequired={true}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.errors.email}
                                touched={formik.touched.email}
                                label={t("contactForm.emailLabel")}
                            />
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormikInput
                                name="company"
                                id="company"
                                placeholder={t(
                                    "contactForm.companyPlaceholder"
                                )}
                                value={formik.values.company}
                                onChange={formik.handleChange}
                                error={formik.errors.company}
                                touched={formik.touched.company}
                                label={t("contactForm.companyLabel")}
                            />
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl
                                isInvalid={
                                    formik.errors.message !== undefined &&
                                    formik.touched.message
                                }
                                isRequired
                            >
                                <FormLabel htmlFor="message">
                                    {t("contactForm.messageLabel")}
                                </FormLabel>
                                <Textarea
                                    errorBorderColor="none"
                                    placeholder={t(
                                        "contactForm.messagePlaceholder"
                                    )}
                                    id="message"
                                    name="message"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    rows={3}
                                    resize={"none"}
                                    bgColor={"white"}
                                />
                                <FormErrorMessage>
                                    {formik.errors.message}
                                </FormErrorMessage>
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={{ base: 1, md: 2 }}>
                            <HStack
                                w="full"
                                justifyContent={"flex-end"}
                                spacing={5}
                                marginTop={"1rem"}
                            >
                                <Button
                                    type="submit"
                                    minWidth={"8rem"}
                                    isLoading={isLoading}
                                    bgColor={"primary"}
                                >
                                    {t("contactForm.button")}
                                </Button>
                            </HStack>
                        </GridItem>
                    </SimpleGrid>
                </chakra.form>
            </HStack>
        </VStack>
    );
};

export default ContactForm;
