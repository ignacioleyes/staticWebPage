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

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Full name is required"),
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
    company: Yup.string().nullable(),
    message: Yup.string().required("Message is required"),
});

const initialValues = {
    name: "",
    company: "",
    email: "",
    message: "",
};

const ContactForm = () => {
    const getAuthHeader = useAuthHeader();
    const toast = useToast();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema,
        onSubmit: async () => {
            await contact();
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
        <VStack height={"40vh"} spacing={0} mb={5} mt={2}>
            <HStack
                width={"60%"}
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
                                placeholder="Full name"
                                isRequired={true}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.errors.name}
                                touched={formik.touched.name}
                                label="Full Name"
                            />
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormikInput
                                name="email"
                                id="email"
                                placeholder="Type your email"
                                isRequired={true}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.errors.email}
                                touched={formik.touched.email}
                                label="Email"
                            />
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormikInput
                                name="company"
                                id="company"
                                value={formik.values.company}
                                onChange={formik.handleChange}
                                error={formik.errors.company}
                                touched={formik.touched.company}
                                label="Company"
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
                                    Message:
                                </FormLabel>
                                <Textarea
                                    errorBorderColor="none"
                                    placeholder="Type a message..."
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
                                    colorScheme={"orange"}
                                    minWidth={"8rem"}
                                    isLoading={isLoading}
                                >
                                    Submit
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
