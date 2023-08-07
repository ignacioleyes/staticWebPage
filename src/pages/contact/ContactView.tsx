import { Box } from "@chakra-ui/react";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import MapAndCards from "./MapAndCards";

const ContactView = () => {
    return (
        <Box>
            <Banner />
            <MapAndCards />
            <ContactForm />
        </Box>
    );
};

export default ContactView;
