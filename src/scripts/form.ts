import { getLangFromUrl, useTranslations } from "@i18n/utils";
import Swal from "sweetalert2";
import type { FormEvent } from "react";
import { API_URL } from "@const";
// @ts-ignore
const lang = getLangFromUrl(location);
const t = useTranslations(lang);

const form = document.querySelector(".contactus_form") as HTMLFormElement;
const email_btn = document.querySelector(".email_btn") as HTMLButtonElement;
const email_loading = document.querySelector(
  ".email_loading",
) as HTMLButtonElement;
const inputName = document.querySelector(
  "input[name=name]",
) as HTMLInputElement;
const inputCompany = document.querySelector(
  "input[name=company]",
) as HTMLInputElement;
const inputEmail = document.querySelector(
  "input[name=email]",
) as HTMLInputElement;
const inputPhone = document.querySelector(
  "input[name=phone]",
) as HTMLInputElement;
const inputSubject = document.querySelector(
  "input[name=subject]",
) as HTMLInputElement;
const Message = document.querySelector(
  "textarea[name=message]",
) as HTMLInputElement;

const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  email_btn.classList.add("hidden");
  email_loading.classList.remove("hidden");

  fetch(API_URL(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: inputName.value,
      company: inputCompany.value,
      email: inputEmail.value,
      phone: inputPhone.value,
      subject: inputSubject.value,
      message: Message.value,
    }),
  })
    .then((res) => {
      if (res.status != 200) return EmailNotSent();
      EmailSent();
    })
    .catch((err) => {
      EmailNotSent();
    })
    .finally(() => {
      email_btn.classList.remove("hidden");
      email_loading.classList.add("hidden");
    });
};
form.addEventListener("submit", handleSubmit);
inputPhone.addEventListener(
  "input",
  () => (inputPhone.value = inputPhone.value.replace(/[a-z]|[A-Z],/g, "")),
);
function EmailSent() {
  Swal.fire({
    title: t("email.success.title"),
    text: `${t("email.success.text")}`,
    icon: "success",
    confirmButtonText: lang == "en" ? "Okay" : "موافق",
  });
}
function EmailNotSent() {
  Swal.fire({
    title: t("email.fail.title"),
    text: t("email.fail.text"),
    icon: "error",
    confirmButtonText: lang == "en" ? "Okay" : "موافق",
  });
}
