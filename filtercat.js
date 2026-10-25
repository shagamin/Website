import { items } from "./data.js";
import { displayItems } from "./displayItems.js";

const inputCat = document.querySelector(".select");

export function filterByCat(){
    inputCat.addEventListener("change", function(e) {
        e.preventDefault();
        const selectValue = inputCat.value.toLowerCase();

        const filtering = items.filter(item => {
            return item.cat.toLowerCase().includes(selectValue);
        })

        if(selectValue === "all"){
            displayItems(items);
        }else{
            displayItems(filtering);
        }

    })
}