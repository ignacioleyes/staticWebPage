import { Tooltip, Image } from "@chakra-ui/react";
import DownloadPdfIcon from "../../assets/images/download-pdf.png";
import { useTranslation } from "react-i18next";
import { useAuthHeader } from "react-auth-kit";
import { getPdf } from "../../api/api";
import { useMutation /* , useQuery */ } from "@tanstack/react-query";

interface Props {
    id: number;
}

const PdfDownload = ({ id }: Props) => {
    const getAuthHeader = useAuthHeader();
    const [t] = useTranslation("global");

    const downloadPdfMutation = useMutation(async () =>
        getPdf(`products/downloadPdf/${id}`, getAuthHeader())
    );

    const DownloadPdf = async () => {
        const { data: pdf } = await downloadPdfMutation.mutateAsync();      

        const url = window.URL.createObjectURL(pdf);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "conduflex.pdf");
        document.body.appendChild(link);
        link.click();

        document.body.appendChild(link);
        link.click();

        if (link.parentNode) {
            link.parentNode.removeChild(link);
        }

        window.URL.revokeObjectURL(url);
    };

    return (
        <Tooltip
            hasArrow
            label={t("products.tooltipPdf")}
            bg={"primary"}
            color={"secondary"}
        >
            <Image
                width={"2.5rem"}
                src={DownloadPdfIcon}
                cursor={"pointer"}
                _hover={{ transform: "scale(1.1)" }}
                onClick={() => DownloadPdf()}
            ></Image>
        </Tooltip>
    );
};

export default PdfDownload;
