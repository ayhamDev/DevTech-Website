// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import ENV from "@script/env";

export const SITE_TITLE = "DevTech";
export const SITE_DESCRIPTION = "DevTech Company official Website";
export const SITE_DESCRIPTION_AR = "DevTech Company official Website العربية";
export const API_URL = () =>
  ENV() == "dev" ? "http://localhost:4200" : "https://mailapi.devtechsl.com";
