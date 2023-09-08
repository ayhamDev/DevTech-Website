import { getLangFromUrl } from "@i18n/utils";
import isMobile from "is-mobile";
import { useEffect, useState, type EventHandler } from "react";
export interface Ifaq {
  question: string;
  question_ar: string;
  answer: string;
  answer_ar: string;
}
function FAQ() {
  const [selected, SetSelected] = useState<number | null>(null);
  const [lang, setlang] = useState<"ar" | "en" | null>(null);
  const [data, setData] = useState<Ifaq[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    // @ts-ignore
    setlang(getLangFromUrl(location));
    const loadData = async () => {
      const data = await import(`@content/faq`);
      setData(data.default);
      setLoading(false);
    };
    loadData();
  }, []);
  return (
    <div className="px-5 py-6 flex w-full flex-col gap-4 bg-white shadow-main rounded-main">
      <h3 className="mb-4 text-center">
        {lang == "en" ? "Common Questions" : "الاسئلة الشائعة"}
      </h3>
      <div className={loading ? "block" : "hidden"}>
        <div className="w-full m-auto flex justify-center items-center">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {!loading &&
          data &&
          data.map((item, index) => (
            <div key={index}>
              <div
                role="button"
                onClick={(e) => {
                  const main = document.querySelector("main") as HTMLElement;
                  // console.log(main.getBoundingClientRect());

                  var element = e.target;
                  var headerOffset = isMobile() ? 400 : 300;
                  // @ts-ignore
                  var elementPosition = element.getBoundingClientRect().top;

                  var offsetPosition =
                    elementPosition + main.scrollTop - headerOffset;

                  main.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                  SetSelected(selected == index ? null : index);
                }}
                className="px-8 select-none cursor-pointer py-3 bg-gray-200 rounded-main rounded-primary flex justify-between items-center"
              >
                <p>{lang == "en" ? item.question : item.question_ar}</p>
                <svg
                  width="22"
                  height="13"
                  viewBox="0 0 22 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-all duration-300 ${
                    selected == index ? "rotate-[-180deg]" : null
                  }`}
                >
                  <path
                    d="M20 2L11 11L2 2"
                    stroke="#111111"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className={`grid transition-all duration-500 ${
                  selected == index
                    ? !isMobile()
                      ? "faq-expand"
                      : "block"
                    : !isMobile()
                    ? "faq-init"
                    : "hidden"
                }`}
              >
                <p className="opacity-90 body1 overflow-hidden pt-4 px-6">
                  {lang == "en" ? item.answer : item.answer_ar}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FAQ;
