import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

import { mainReadMore } from "./definition";
import "./../scss/style.scss";

import { heightGrow, heightGrowTwo, checker } from "./myswiper";
import { mainPopup } from "./popup";

import { mainSidebar } from "./sidebar.js";
mainPopup();
mainReadMore();
heightGrow();
heightGrowTwo();
checker();
mainSidebar();
