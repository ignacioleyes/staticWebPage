import WhatsappIcon from "../../assets/images/whatsapp-icon.png";
export interface KeyValuePair {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export interface ContactInfoItem {
    title: string;
    description: string;
    description2?: string;
    description3?: string;
    whatsapp?: typeof WhatsappIcon;
  }