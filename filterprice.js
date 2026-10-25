import { items } from "./data.js";
import { displayItems } from "./displayItems.js";

const inputPrice = document.querySelector(".price");
const btnSearch = document.querySelector(".btn-search");
const btnClear = document.querySelector(".btn-cancel");

export function filterByPirce(){
    inputPrice.addEventListener("keyup", function(e){
        e.preventDefault();
        const price = inputPrice.value;
        
        const filtering = items.filter(item =>{
            return item.price == price;
        })

        btnSearch.addEventListener("click", function(){
            displayItems(filtering);
        })
        btnClear.addEventListener("click", function(){
            inputPrice.value="";

            if(inputPrice.value == ""){
                displayItems(items);
            }
        })
        
    })
}