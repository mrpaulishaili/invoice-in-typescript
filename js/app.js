import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector(".new-item-form"), type = document.querySelector("#type"), toFrom = document.querySelector("#tofrom"), details = document.querySelector("#details"), amount = document.querySelector("#amount"), 
//   list template instance
ul = document.querySelector("ul"), list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
    console.log(doc);
    clearForm();
});
function clearForm() {
    type.value = "invoice";
    toFrom.value = "";
    details.value = "";
    amount.value = "";
}
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 40 });
console.log(docOne.name);
