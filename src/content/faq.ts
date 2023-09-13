export interface Ifaq {
  question: string;
  question_ar: string;
  answer: string;
  answer_ar: string;
}
const faq: Ifaq[] | null = [
  {
    question: "What does DevTech specialize in?",
    question_ar: " ما الذي تتخصص به شركتنا",
    answer: `DevTech specializes in offering a range of services including Consultation, Marketing, Design, and Development. We help clients solve complex challenges in the digital space, establish their digital presence, create marketing campaigns, design visual identities, and develop various digital solutions.`,
    answer_ar: `نتخصص في تقديم مجموعة من الخدمات بما في ذلك الاستشارات والتسويق والتصميم والتطوير. نحن نساعد العملاء على حل التحديات المعقدة في الفضاء الرقمي، وتأسيس تواجدهم الرقمي، وإنشاء الحملات التسويقية، وتصميم الهويات المرئية، وتطوير الحلول الرقمية المتنوعة.`,
  },
  {
    question: "How can DevTech's consultation service benefit my business?",
    question_ar: "كيف يمكن لخدمة الاستشارات التي نقدمها أن تفيد أعمالي؟",
    answer: `Our consultation service is designed to help clients overcome their digital challenges. We provide expert guidance and offer tailored solutions for their specific issues. Whether it's optimizing business processes, implementing new technologies, or improving digital strategies, our consultation service can help you make informed decisions and achieve your goals.`,
    answer_ar: ` تم تصميم خدمتنا الاستشارية لمساعدة العملاء على التغلب على تحدياتهم الرقمية. نحن نقدم إرشادات الخبراء ونقدم حلولاً مخصصة لقضاياهم المحددة. سواء كان الأمر يتعلق بتحسين العمليات التجارية، أو تنفيذ تقنيات جديدة، أو تحسين الاستراتيجيات الرقمية، يمكن أن تساعدك خدمة الاستشارة لدينا على اتخاذ قرارات مستنيرة وتحقيق أهدافك.`,
  },
  {
    question: " What can DevTech do to enhance my company's digital presence?",
    question_ar: " ما الذي يمكن أن نفعله لتعزيز التواجد الرقمي لشركتك؟",
    answer: `DevTech's marketing service focuses on establishing and growing your online presence. We work closely with clients to create effective marketing campaigns, identify target demographics, and optimize strategies to reach a wider audience. Our goal is to help your business thrive in the digital landscape and maximize its online visibility.`,
    answer_ar: ` تركز خدمة التسويق التي نقدمها على تأسيس تواجدك على الإنترنت وتنميته. نحن نعمل بشكل وثيق مع العملاء لإنشاء حملات تسويقية فعالة، وتحديد التركيبة السكانية المستهدفة، وتحسين الاستراتيجيات للوصول إلى جمهور أوسع. هدفنا هو مساعدة عملك على الازدهار في المشهد الرقمي وزيادة ظهوره عبر الإنترنت.`,
  },
  {
    question:
      "How does DevTech's design service contribute to brand development?",
    question_ar:
      "كيف تساهم خدمة التصميم التي نقدمها في تطوير العلامة التجارية؟",
    answer: `DevTech's design service plays a crucial role in establishing a strong visual identity for your company. We offer comprehensive design solutions ranging from logo creation to website design. Whether you need a brand refresh for an established company or assistance with branding for a startup, our team of designers will work closely with you to create a compelling and cohesive brand image.`,
    answer_ar: `  إنشاء هوية بصرية قوية لشركتك. نحن نقدم حلول تصميم شاملة تتراوح من إنشاء الشعار إلى تصميم مواقع الويب. سواء كنت بحاجة إلى تحديث العلامة التجارية لشركة قائمة أو المساعدة في إنشاء علامة تجارية لشركة ناشئة، سيعمل فريق المصممين لدينا بشكل وثيق معك لإنشاء صورة علامة تجارية مقنعة ومتماسكة.`,
  },
  {
    question: "What kind of development projects does DevTech undertake?",
    question_ar: "ما هي أنواع المشاريع التطوير التي نقوم بها؟",
    answer: `DevTech's development service covers a wide range of projects, from simple landing pages to complex mobile applications and full-scale platforms. We collaborate closely with clients to understand their unique requirements and tailor our development services accordingly. Our team is committed to delivering high-quality results within agreed timelines.`,
    answer_ar: ` تغطي خدمة التطوير التي نقدمها مجموعة واسعة من المشاريع، بدءًا من الصفحات المقصودة البسيطة وحتى تطبيقات الهاتف المحمول المعقدة والمنصات واسعة النطاق. نحن نتعاون بشكل وثيق مع العملاء لفهم متطلباتهم الفريدة وتصميم خدمات التطوير لدينا وفقًا لذلك. يلتزم فريقنا بتقديم نتائج عالية الجودة ضمن الجداول الزمنية المتفق عليها.`,
  },
  {
    question: "How does DevTech ensure the quality of its services?",
    question_ar: " كيف يمكنني البدء في استخدام الخدمات ؟",
    answer: `At DevTech, we prioritize delivering high-quality services to our clients. We have a team of experienced professionals who are well-versed in their respective domains. Additionally, we follow industry best practices, conduct thorough testing, and maintain regular communication with our clients to ensure their satisfaction throughout the project.`,
    answer_ar: ` للبدء في استخدام الخدمات ، ما عليك سوى التواصل معنا من خلال صفحة الاتصال بموقعنا الإلكتروني أو الاتصال بفريق دعم العملاء لدينا. سنقوم بجدولة استشارة لمناقشة احتياجاتك الخاصة وتزويدك بحل شخصي يتوافق مع أهدافك وغاياتك.`,
  },
  {
    question: " How can I get started with DevTech's services?",
    question_ar: "  كيف نضمن جودة خدماتنا؟",
    answer: `To get started with DevTech's services, simply reach out to us through our website's contact page or contact our customer support team. We will schedule a consultation to discuss your specific needs and provide you with a personalized solution that aligns with your goals and objectives.`,
    answer_ar: `نحن نعطي الأولوية لتقديم خدمات عالية الجودة لعملائنا. لدينا فريق من المهنيين ذوي الخبرة الذين هم على دراية جيدة في مجالات تخصصهم. بالإضافة إلى ذلك، نحن نتبع أفضل ممارسات الصناعة، ونجري اختبارات شاملة، ونحافظ على التواصل المنتظم مع عملائنا لضمان رضاهم طوال المشروع.`,
  },
];
export default faq;
