let prodacts = document.querySelector(".prodact .container .protacts");
let heatrIcone = document.getElementById("heart");

let countSpan = document.getElementById("countspan");

// add fovret To Page
function addFovretFromLo() {
  let items = JSON.parse(localStorage.getItem("fovret"));
  let prodact = items.map((i) => {
    return `  <div class="pro">
<div class="img">
    <img class="one" src="${i.imgOneC}" alt="">
    <img class="two" src="${i.imgOneC}" alt="">
</div>
<div class="cont">
    <p>${i.name}</p>
    <p>
       ${i.title}
    </p>
</div>
<div class="i">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
</div>
<div class="icone">
    <i class="fa-regular fa-eye"></i>
    <i class="fa-solid fa-cart-shopping" onclick="addProdactToCard(${i.id})"></i>
    <i class="fa-solid fa-bookmark"></i>
    <i class="fa-solid fa-trash" onclick=deleatItem(${i.id})></i>
</div>
<span class="o">$253</span>
<del class="b">$365</del>
</div>`;
  });
  prodacts.innerHTML = prodact.join("");
  heatrIcone.innerText = items.length;
}
addFovretFromLo();

// deleat Items From Page

function deleatItem(i) {
  let filres = JSON.parse(localStorage.getItem("fovret")).filter(
    (item) => item.id !== i
  );
  localStorage.setItem("fovret", JSON.stringify(filres));
  addFovretFromLo(filres);
}

// add prodact To Card
let arryProdact = [];

if (localStorage.getItem("payItem")) {
  arryProdact = JSON.parse(localStorage.getItem("payItem"));
  countSpan.innerHTML = arryProdact.length;
}

function addProdactToCard(e) {
  let item = items.find((i) => i.id == e);
  let countItem = arryProdact.some((i) => i.id == item.id);

  if (countItem) {
    arryProdact = arryProdact.map((p) => {
      if (p.id === item.id) p.count += 1;
      return p;
    });
  } else {
    arryProdact.push(item);
  }
  localStorage.setItem("payItem", JSON.stringify(arryProdact));

  // localStorage.setItem("payItem", JSON.stringify(arryProdact));
  // get span item cuont number

  countSpan.innerHTML = arryProdact.length;
}
