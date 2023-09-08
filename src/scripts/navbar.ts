import isMobile from "is-mobile";

const SCROLL_TOP_OFFSET = 100;
const CanAnimateSection =
  !isMobile() &&
  "hardwareConcurrency" in navigator &&
  navigator.hardwareConcurrency >= 8;

const main = document.querySelector("main") as HTMLElement;
const navbar = document.querySelector(".navbar") as HTMLDivElement;
const navbarLinks = document.querySelectorAll(
  ".navbar__links",
) as NodeListOf<HTMLAnchorElement>;
const svg_black = document.querySelectorAll(".Logo__black");
const svg_blue = document.querySelectorAll(".Logo__blue");
const MobileBtn = document.querySelector(".mobile-btn") as HTMLButtonElement;
const MobileMenu = document.querySelector(".mobile__menu") as HTMLDivElement;

// Sections
const HeroSection = document.querySelector("#HeroSection") as HTMLElement;
const OurServices = document.querySelector("#OurServices") as HTMLElement;
const Aboutus = document.querySelector("#Aboutus") as HTMLElement;
const ContactUs = document.querySelector("#Contactus");

const HomeBtns = document.querySelectorAll("a[data-section=HeroSection]");
const ServicesBtns = document.querySelectorAll("a[data-section=OurServices]");
const AboutusBtns = document.querySelectorAll("a[data-section=Aboutus]");
const contactus_btns = document.querySelectorAll(
  ".contactus_btns",
) as NodeListOf<HTMLButtonElement>;

contactus_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    var headerOffset = 100;
    // @ts-ignore
    var elementPosition = ContactUs.getBoundingClientRect().top;

    var offsetPosition = elementPosition + main.scrollTop - headerOffset;

    main.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    MobileMenu.classList.remove("mobile__menu-show");
    main.classList.remove("!overflow-hidden");
  });
});

HomeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    HeroSection.scrollIntoView();
    MobileMenu.classList.remove("mobile__menu-show");
    main.classList.remove("!overflow-hidden");
  });
});
ServicesBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    var headerOffset = 100;
    // @ts-ignore
    var elementPosition = OurServices.getBoundingClientRect().top;

    var offsetPosition = elementPosition + main.scrollTop - headerOffset;

    main.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    MobileMenu.classList.remove("mobile__menu-show");
    main.classList.remove("!overflow-hidden");
  });
});
AboutusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    var headerOffset = 100;
    // @ts-ignore
    var elementPosition = Aboutus.getBoundingClientRect().top;

    var offsetPosition = elementPosition + main.scrollTop - headerOffset;

    main.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    MobileMenu.classList.remove("mobile__menu-show");
    main.classList.remove("!overflow-hidden");
  });
});

// Selecting The Link For Current Sections
let observer = new IntersectionObserver(
  (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      let elem = entry.target;
      if (!entry.isIntersecting)
        return document
          .querySelectorAll(`a.link[data-section=${elem.id}]`)
          .forEach((link) => link.classList.remove("navbar__Link-selected"));

      if (entry.isIntersecting) {
        document
          .querySelectorAll("a.link")
          .forEach((link) => link.classList.remove("navbar__Link-selected"));
        document
          .querySelectorAll(`a.link[data-section=${elem.id}]`)
          .forEach((link) => link.classList.add("navbar__Link-selected"));
      }
    });
  },
  {
    root: main,
    threshold: 0.3,
  },
);
observer.observe(HeroSection);
observer.observe(OurServices);
observer.observe(Aboutus);

// Events
MobileBtn.addEventListener("click", () => {
  MobileMenu.classList.add("mobile__menu-show");
  main.classList.add("!overflow-hidden");
});
document.querySelectorAll(".close").forEach((sec) =>
  sec.addEventListener("click", (e) => {
    MobileMenu.classList.remove("mobile__menu-show");
    main.classList.remove("!overflow-hidden");
  }),
);
const handleNavbar = () => {
  if (!main || !navbar) return null;
  if (CanAnimateSection) {
    if (main.scrollTop > 25 && main.scrollTop <= 500) {
      const amount = main.scrollTop - 25;
      OurServices.style.borderRadius = `${amount}px ${amount}px 0px 0px`;
    }
  }

  if (main?.scrollTop >= SCROLL_TOP_OFFSET) {
    navbar.classList.add("bg-white");
    navbarLinks.forEach((link) => link.classList.remove("text-white"));
    svg_black.forEach((svg) => svg.setAttribute("fill", "black"));
    svg_blue.forEach((svg) => svg.setAttribute("fill", "rgb(var(--primary))"));
    MobileBtn.querySelectorAll("span").forEach((line) =>
      line.classList.add("!bg-black"),
    );
  } else {
    navbar.classList.remove("bg-white");
    navbarLinks.forEach((link) => link.classList.add("text-white"));
    svg_black.forEach((svg) => svg.setAttribute("fill", "white"));
    svg_blue.forEach((svg) => svg.setAttribute("fill", "white"));
    MobileBtn.querySelectorAll("span").forEach((line) =>
      line.classList.remove("!bg-black"),
    );
  }
};
handleNavbar();
main.addEventListener("scroll", handleNavbar);
