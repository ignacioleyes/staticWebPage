import WhatsappIcon from "../../assets/images/whatsapp-icon.png";
export interface KeyValuePair {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export interface ApiListResponse<T> {
    items: T[];
    totalCount: number;
}

export interface ContactInfoItem {
    title: string;
    description: string;
    description2?: string;
    description3?: string;
    whatsapp?: typeof WhatsappIcon;
}

export interface Product {
    id: number;
    name: string;
    englishName: string;
    description: string;
    englishDescription: string;
    brand: BrandEnum;
    characteristics: string;
    englishCharacteristics: string;
    price: number;
    productImage: string;
    certificationsImage: string;
    characteristicsImages: string[];
    tablesImage: string;
    application: string;
    englishApplication: string;
}

export interface Home {
    id: number;
    images: string[];
    title: string;
    englishTitle: string;
    description: string[];
    englishDescription: string[];
}

export enum BrandEnum {
    Test,
}
