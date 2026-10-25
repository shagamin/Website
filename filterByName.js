import { displayItems } from "./displayItems.js";
import { items } from "./data.js";

const inputName = document.querySelector(".name");


export function filterByName(){
    inputName.addEventListener("keyup", function(e){
        e.preventDefault();
        const inputValue = inputName.value.trim().toLowerCase();

        const filtering = items.filter( item => {
            return item.name.toLowerCase().includes(inputValue);
        })
        displayItems(filtering);
    })
};

