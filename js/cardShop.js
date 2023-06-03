let container = document.querySelector(".card .container");
let countSpan = document.getElementById("countspan");
let table = document.querySelector(".card .container table");
let tableTbody = document.querySelector(".card .container table .tb");
let checkout = document.querySelector(".card .container .chekOut");
let totalePrice = document.getElementById("T");
let totalePricet = document.getElementById("t");
let checkoutbutton = document.getElementById("checkout");
if (
  localStorage.getItem("payItem") == null ||
  JSON.parse(localStorage.getItem("payItem")).length == 0
) {
  container.innerHTML = `<h1>no item to add</h1> `;
  table.classList.add("remove");
  checkout.classList.add("remove");
} else {
  addProtactFromLo();
}

function addProtactFromLo() {
  let dataFromL = JSON.parse(localStorage.getItem("payItem"));
  table.classList.remove("remove");
  checkout.classList.remove("remove");
  let totlae = 0;

  let getData = dataFromL.map((item) => {
    let totlePrice = item.price * item.count;
    totlae += item.price * item.count;
    return `<div><tr>
            <td><img src="${item.imgOneC}" alt=""></td>
            <td>${item.name}</td>
           <td>$${item.price}</td>
             <td><span id="count">${item.count}</span></td>
            <td id="tot">$${totlePrice}</td>
            <td><i class="fa-solid fa-trash" onclick="delatItem(${item.id})"></i></td>
            </div></tr> `;
  });
  totalePrice.innerHTML = totlae;
  totalePricet.innerHTML = totlae;
  tableTbody.innerHTML = getData.join("");
  countSpan.innerHTML = dataFromL.length;
  // CHECK OUT TO
  checkoutbutton.onclick = function () {
    localStorage.removeItem("payItem");
    container.innerHTML = `<h1>Thank you for using our site</h1>`;
  };
}
// function To Delat Item From Card

function delatItem(i) {
  let dataFromL = JSON.parse(localStorage.getItem("payItem"));
  let filters = dataFromL.filter((items) => items.id !== i);
  localStorage.setItem("payItem", JSON.stringify(filters));
  addProtactFromLo();
}
