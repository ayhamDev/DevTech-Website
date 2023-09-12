// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";
import type { ServiceType } from "@content/Services";

const main = document.querySelector("main") as HTMLElement;
const service_link = document.querySelectorAll(
  ".service_link",
) as NodeListOf<HTMLAnchorElement>;
const OurServices = document.querySelector("#OurServices") as HTMLElement;
const ServicesSwiper = document.querySelector(
  ".services_swiper",
) as HTMLDivElement;
const LoadingBox = document.querySelector(".loading") as HTMLDivElement;
const ServiceContentContainer = document.querySelector(
  ".ServiceContentContainer",
) as HTMLDivElement;

service_link.forEach((link) => {
  link.addEventListener("click", () => {
    OurServices.scrollIntoView();
  });
});

// init Swiper:
const swiper = new Swiper(".swiper", {
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // configure Swiper to use modules
  slidesPerView: 4,
  spaceBetween: 40,
  freeMode: false,
  breakpoints: {
    // when window width is >= 320px
    120: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
window.addEventListener("hashchange", () => handleHashChange(true));
window.addEventListener("resize", () => handleHashChange(false));
handleHashChange(true);
function handleHashChange(routing) {
  LoadingBox.classList.add("hidden");
  ServicesSwiper.classList.remove("hidden");

  // @ts-ignore
  const ServiceType: ServiceType | undefined = location.hash.split("/")[1];
  if (ServiceType == "Consultation") {
    swiper.slideTo(0);
  }
  if (ServiceType == "Marketing") {
    swiper.slideTo(1);
  }
  if (ServiceType == "Design") {
    swiper.slideTo(2);
  }
  if (ServiceType == "Development") {
    swiper.slideTo(3);
  }
  if (ServiceType == undefined) {
    swiper.slideTo(0);
  }
  document.querySelectorAll(".serivce_content").forEach((service) => {
    service.classList.add("hidden");
  });
  document
    .querySelector(
      `.serivce_content[data-service="${
        !ServiceType ? "Consultation" : ServiceType
      }"]`,
    )
    ?.classList.remove("hidden");
  ServiceContentContainer.classList.remove("hidden");
  if (routing) {
    var headerOffset = 100;
    // @ts-ignore
    var elementPosition = OurServices.getBoundingClientRect().top;

    var offsetPosition = elementPosition + main.scrollTop - headerOffset;
    if (ServiceType)
      return main.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
  }
}
