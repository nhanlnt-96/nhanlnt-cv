import Homepage from "../module/homepage";
import Resume from "../module/resume";

export const routes = [
  {
    path: '/',
    isExact: true,
    module: Homepage
  },
  {
    path: '/resume',
    isExact: true,
    module: Resume
  },
]