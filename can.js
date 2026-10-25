import { items } from "./data.js";
import { displayItems } from "./displayItems.js";
import { filterByName } from "./filterByName.js";
import { filterByCat } from "./filtercat.js";
import { filterByPirce } from "./filterprice.js";



displayItems(items);
filterByName();
filterByCat();
filterByPirce();