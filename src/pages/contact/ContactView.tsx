import { Box } from "@chakra-ui/react";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import MapAndCards from "./MapAndCards";
import { useTranslation } from "react-i18next";
import WhatsappIcon from "../../assets/images/whatsapp-icon.png";

const ContactView = () => {
    const [t] = useTranslation("global");
    const contactInfo = [
        {
            title: `${t("contact.businessHoursTitle")}`,
            description: `${t("contact.businessHours")}`,
        },
        {
            title: `${t("contact.contactTitle")}`,
            description: `${t("contact.contact.clients")}`,
            description2: `${t("contact.contact.providers")}`,
            description3: `${t("contact.contact.phone")}`,
            whatsapp: WhatsappIcon,
        },
    ];
    return (
        <Box position={"relative"}>
            <Banner />
            <ContactForm />
            <MapAndCards contactInfo={contactInfo} />
        </Box>
    );
};

export default ContactView;
