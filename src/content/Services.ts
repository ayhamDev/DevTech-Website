import consult1 from "@public/images/consult1.png";
import consult2 from "@public/images/consult2.png";
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
    imgs: ["/images/consult1.png", "/images/consult2.png"],
    details: [
      {
        title: "Consultation",
        title_ar: "استشارة",
        text: `Consultations, are designed to help our clients make informed decisions and navigate complex challenges. Our team of experts, is dedicated to advising our clients and putting them in the right direction to achieve their goals. 
        We understand that every situation is unique, which is why we take the time to listen to our clients and offer tailored solutions that meet their specific needs. With our consultation service, you can rest assured that you will receive the guidance and support you need to succeed.`,
        text_ar: `لمساعدة عملائنا على اتخاذ قرارات مستنيرة والتغلب على التحديات المعقدة.
        فريق الخبراء لدينا مكرس لتقديم المشورة لعملائنا ووضعهم في الاتجاه الصحيح لتحقيق أهدافهم.نحن ندرك أن كل موقف فريد من نوعه، ولهذا السبب نأخذ الوقت الكافي للاستماع إلى عملائنا وتقديم حلول مخصصة تلبي احتياجاتهم الخاصة. ومن خلال خدمة الاستشارة التي نقدمها، يمكنك أن تطمئن إلى أنك ستحصل على التوجيه والدعم الذي تحتاجه لتحقيق النجاح.
        `,
      },
    ],
  },
  {
    id: 2,
    type: "Marketing",
    type_ar: "تسويق",
    imgs: ["/images/marketing1.png", "/images/marketing2.png"],
    details: [
      {
        title: "Marketing",
        title_ar: "تسويق",
        text: `We offer our valued clients the best possible assistance in creating a campaign that will elevate their online presence and brand to new heights. Our Marketing service is specifically designed to help our clients identify the correct target demographic, enabling them to grow their brand in a manner that resonates with their audience. With our vast expertise and experience, we can help you achieve your Marketing goals and surpass your expectations.`,
        text_ar: `نقدم لعملائنا الكرام أفضل مساعدة ممكنة في إنشاء حملة من شأنها رفع مستوى تواجدهم وعلامتهم التجارية عبر الإنترنت إلى آفاق جديدة. تم تصميم خدمة التسويق لدينا خصيصًا لمساعدة عملائنا على تحديد الفئة السكانية المستهدفة الصحيحة، وتمكينهم من تنمية علامتهم التجارية بطريقة تلقى صدى لدى جمهورهم. بفضل خبرتنا الواسعة وتجاربنا، يمكننا مساعدتك في تحقيق أهدافك التسويقية وتجاوز توقعاتك.`,
      },
      {
        title: "What specific services are included in the marketing service?",
        title_ar: "ما هي الخدمات المحددة المضمنة في خدمة التسويق؟",
        text: `Our marketing service includes social media management, email marketing, and advertising campaigns.`,
        text_ar: `تشمل خدماتنا التسويقية إدارة وسائل التواصل الاجتماعي والتسويق عبر البريد الإلكتروني والحملات الإعلانية.`,
      },
      {
        title:
          "What kind of businesses can benefit from this marketing service?",
        title_ar:
          "ما نوع الشركات التي يمكنها الاستفادة من هذه الخدمة التسويقية؟",
        text: `ur marketing service is beneficial for businesses of all sizes and industries that want to increase their brand awareness and reach their target audience.`,
        text_ar: `تعد خدمة التسويق الخاصة بك مفيدة للشركات من جميع الأحجام والصناعات التي ترغب في زيادة الوعي بعلامتها التجارية والوصول إلى جمهورها المستهدف.`,
      },
    ],
  },
  {
    id: 3,
    type: "Design",
    type_ar: "تصميم",
    imgs: ["/images/design1.png", "/images/design2.png"],

    details: [
      {
        title: "Design",
        title_ar: "تصميم",
        text: `Design is a service dedicated to helping businesses establish a strong visual identity that resonates with their customers and sets them apart from their competitors. 
        Design services include refreshing logos, website redesigns, and creating new brand identities. Devtech's team of experienced designers provides high-quality, custom solutions that meet each client's unique needs. If a business is seeking a reliable partner to help take its brand to the next level.`,
        text_ar: `التصميم عبارة عن خدمة مخصصة لمساعدة الشركات على إنشاء هوية بصرية قوية تلقى صدى لدى عملائها وتميزهم عن منافسيهم.
        تشمل خدمات التصميم تحديث الشعارات وإعادة تصميم مواقع الويب وإنشاء هويات جديدة للعلامة التجارية. يقدم فريق Devtech من المصممين ذوي الخبرة حلولاً مخصصة عالية الجودة تلبي الاحتياجات الفريدة لكل عميل. إذا كانت الشركة تبحث عن شريك موثوق به للمساعدة في الارتقاء بعلامتها التجارية إلى المستوى التالي.`,
      },
    ],
  },
  {
    id: 4,
    type: "Development",
    type_ar: "تطوير",
    imgs: ["/images/development1.png", "/images/development2.png"],

    details: [
      {
        title: "Development",
        title_ar: "تطوير",
        text: `Our development services cover a wide range of projects, from simple landing pages to complex web applications and mobile apps. 
        Our team of experienced developers is proficient in various programming languages and frameworks, with a workflow that will allow our client to easily keep track of the progress.
        Whether you need a custom solution or want to use an existing platform, we can help you bring your ideas to life.
        Our team of Developers will ensure that your project is delivered on time, and to your satisfaction.`,
        text_ar: `تغطي خدمات التطوير لدينا مجموعة واسعة من المشاريع، بدءًا من الصفحات المقصودة البسيطة وحتى تطبيقات الويب المعقدة وتطبيقات الهاتف المحمول.
        يتقن فريقنا من المطورين ذوي الخبرة العديد من لغات وأطر البرمجة، مع سير عمل يسمح لعملائنا بتتبع التقدم المحرز بسهولة.
        سواء كنت بحاجة إلى حل مخصص أو ترغب في استخدام منصة موجودة، يمكننا مساعدتك في تحقيق أفكارك على أرض الواقع.
        سيضمن فريق المطورين لدينا تسليم مشروعك في الوقت المحدد وبشكل يرضيك.`,
      },
    ],
  },
];
export default data;
