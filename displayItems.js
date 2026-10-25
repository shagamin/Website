import { items } from "./data.js";


const allitem = document.querySelector("tbody");

export function displayItems (data){
    allitem.innerHTML = data.map(items => {
        return `
        <tr>
            <td>${items.id}</td>
            <td>${items.name}</td>
            <td id="price">$${items.price}</td>
            <td>${items.cat}</td>
            <td>${items.stock}</td>
        </tr>
    `;
    }).join("")

}



