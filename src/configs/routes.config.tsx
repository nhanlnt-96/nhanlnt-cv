import ContactComponent from "../module/contact";
import Homepage from "../module/homepage";
import Portfolio from "../module/portfolio";
import Resume from "../module/resume";

export const routes = [
  {
    path: "/",
    isExact: true,
    module: Homepage,
  },
  {
    path: "/resume",
    isExact: true,
    module: Resume,
  },
  {
    path: "/portfolio",
    isExact: true,
    module: Portfolio,
  },
  {
    path: "/contact",
    isExact: true,
    module: ContactComponent,
  },
];
