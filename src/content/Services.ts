export type ServiceType =
  | "Consultation"
  | "Marketing"
  | "Design"
  | "Development";
export type ServiceTypeArabic = "استشارة" | "تسويق" | "تصميم" | "تطوير";
export interface IServiceData {
  id: number;
  type: ServiceType;
  type_ar: ServiceTypeArabic;
  imgs: string[];
  details: {
    title: string;
    title_ar: string;
    text: string;
    text_ar: string;
  }[];
}
const data: IServiceData[] = [
  {
    id: 1,
    type: "Consultation",
    type_ar: "استشارة",
    imgs: ["/images/consult1.jpg", "/images/consult2.jpg"],
    details: [
      {
        title: "Consultation",
        title_ar: "استشارة",
        text: `Consultations, are designed to help our clients make informed decisions and navigate complex challenges. Our team of experts, is dedicated to advising our clients and putting them in the right direction to achieve their goals. 
            We understand that every situation is unique, which is why we take the time to listen to our clients and offer tailored solutions that meet their specific needs. With our consultation service, you can rest assured that you will receive the guidance and support you need to succeed.`,
        text_ar: ``,
      },
      {
        title:
          "What specific types of challenges does the consultation service address?",
        title_ar: "استشارة",
        text: `The consultation service is designed to address a wide range of challenges that individuals or businesses may face, such as strategic planning, financial management, marketing, customer service, human resources, technology implementation, and more. The specific types of challenges that the service can help with may vary depending on the expertise of the consultant and the needs of the client.`,
        text_ar: ``,
      },
    ],
  },
  {
    id: 2,
    type: "Marketing",
    type_ar: "تسويق",
    imgs: ["/images/marketing1.jpg", "/images/marketing2.jpg"],
    details: [
      {
        title: "Marketing",
        title_ar: "استشارة",
        text: `Consultations, are designed to help our clients make informed decisions and navigate complex challenges. Our team of experts, is dedicated to advising our clients and putting them in the right direction to achieve their goals. 
            We understand that every situation is unique, which is why we take the time to listen to our clients and offer tailored solutions that meet their specific needs. With our consultation service, you can rest assured that you will receive the guidance and support you need to succeed.`,
        text_ar: ``,
      },
      {
        title:
          "What specific types of challenges does the consultation service address?",
        title_ar: "استشارة",
        text: `The consultation service is designed to address a wide range of challenges that individuals or businesses may face, such as strategic planning, financial management, marketing, customer service, human resources, technology implementation, and more. The specific types of challenges that the service can help with may vary depending on the expertise of the consultant and the needs of the client.`,
        text_ar: ``,
      },
    ],
  },
  {
    id: 3,
    type: "Design",
    type_ar: "تصميم",
    imgs: ["/images/design1.jpg", "/images/design2.jpg"],

    details: [
      {
        title: "Design",
        title_ar: "kofpek",
        text: `Consultations, are designed to help our clients make informed decisions and navigate complex challenges. Our team of experts, is dedicated to advising our clients and putting them in the right direction to achieve their goals. 
            We understand that every situation is unique, which is why we take the time to listen to our clients and offer tailored solutions that meet their specific needs. With our consultation service, you can rest assured that you will receive the guidance and support you need to succeed.`,
        text_ar: ``,
      },
      {
        title:
          "What specific types of challenges does the consultation service address?",
        title_ar: "استشارة",
        text: `The consultation service is designed to address a wide range of challenges that individuals or businesses may face, such as strategic planning, financial management, marketing, customer service, human resources, technology implementation, and more. The specific types of challenges that the service can help with may vary depending on the expertise of the consultant and the needs of the client.`,
        text_ar: ``,
      },
    ],
  },
  {
    id: 4,
    type: "Development",
    type_ar: "تطوير",
    imgs: ["/images/Development1.jpg", "/images/Development2.jpg"],

    details: [
      {
        title: "Development",
        title_ar: "استشارة",
        text: `Consultations, are designed to help our clients make informed decisions and navigate complex challenges. Our team of experts, is dedicated to advising our clients and putting them in the right direction to achieve their goals. 
            We understand that every situation is unique, which is why we take the time to listen to our clients and offer tailored solutions that meet their specific needs. With our consultation service, you can rest assured that you will receive the guidance and support you need to succeed.`,
        text_ar: ``,
      },
      {
        title:
          "What specific types of challenges does the consultation service address?",
        title_ar: "استشارة",
        text: `The consultation service is designed to address a wide range of challenges that individuals or businesses may face, such as strategic planning, financial management, marketing, customer service, human resources, technology implementation, and more. The specific types of challenges that the service can help with may vary depending on the expertise of the consultant and the needs of the client.`,
        text_ar: ``,
      },
    ],
  },
];
export default data;
