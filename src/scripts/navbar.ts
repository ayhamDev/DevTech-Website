const SCROLL_TOP_OFFSET = 100;
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
const OurServices = document.querySelector("#OurServices") as HTMLElement;
const HeroSection = document.querySelector("#HeroSection") as HTMLElement;

const HomeBtns = document.querySelectorAll("a[data-section=HeroSection]");
const ServicesBtns = document.querySelectorAll(
  "a[data-section=OurServices]",
);
HomeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    HeroSection.scrollIntoView();
    MobileMenu.classList.remove("mobile__menu-show");
    main.classList.remove("!overflow-hidden");
  });
});
ServicesBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    OurServices.scrollIntoView({
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
      if (entry.isIntersecting) {
        let elem = entry.target;
        if (entry.intersectionRatio >= 0.5) {
          document
            .querySelectorAll("a.link")
            .forEach((link) => link.classList.remove("navbar__Link-selected"));
          document
            .querySelectorAll(`a.link[data-section=${elem.id}]`)
            .forEach((link) => link.classList.add("navbar__Link-selected"));
        }
      }
    });
  },
  {
    root: main,
    rootMargin: "0px",
    threshold: 1,
  },
);
observer.observe(HeroSection);
observer.observe(OurServices);

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
