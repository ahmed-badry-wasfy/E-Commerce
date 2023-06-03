// get datt From Page MasterJs
// get Item from Ht To Create The Prodact To Page

let viowItemDiv = document.querySelector(".vio");
let prodactHtml = document.querySelector(".prodact .container .protacts");
let countSpan = document.getElementById("countspan");

// create prodact

(masterCreatProdact = function (prodactPage = []) {
  let prodact = prodactPage.map((item) => {
    return `<div class="pro">
   <div class="img">
       <img class="one" src="${item.imgOne}" alt="">
       <img class="two" src="${item.imgTow}" alt="">
   </div>
   <div class="cont">
       <p>${item.name}</p>
       <p>${item.title}</p>
   </div>
   <div class="i">
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-regular fa-star"></i>
       <i class="fa-regular fa-star"></i>
   </div>
   <div class="icone">
       <i class="fa-regular fa-eye" onclick="viowItems(${item.id})" ></i>
       <i class="fa-solid fa-cart-shopping" onclick="addProdactToCard(${
         item.id
       })"></i>
       <i class="fa-regular fa-heart" onclick="addFovrets(${item.id})"></i>
       <i class="fa-solid fa-bookmark"></i>
       ${
         item.imMe == "Yes"
           ? ` <i class="fa-solid fa-trash" onclick="delatCreat(${item.id})"></i>`
           : ""
       }
   </div>
   <span class="o">$${item.price}</span>
   <del class="b">$${item.priceB}</del>
</div>`;
  });
  prodactHtml.innerHTML = prodact.join("");
})(JSON.parse(localStorage.getItem("masterDfL")) || masterData);

// add prodact To Card
let arryProdact = [];

if (localStorage.getItem("payItem")) {
  arryProdact = JSON.parse(localStorage.getItem("payItem"));
  countSpan.innerHTML = arryProdact.length;
}

function addProdactToCard(e) {
  if (localStorage.getItem("user") == null) {
    alertToSing();
  } else {
    let masterDtatFromPage =
      JSON.parse(localStorage.getItem("masterDfL")) || masterData;
    let findProdact = masterDtatFromPage.find((i) => i.id == e);

    let countItem = arryProdact.some((i) => i.id == findProdact.id);

    if (countItem) {
      arryProdact = arryProdact.map((p) => {
        if (p.id === findProdact.id) p.count += 1;
        return p;
      });
    } else {
      arryProdact.push(findProdact);
    }

    localStorage.setItem("payItem", JSON.stringify(arryProdact));

    // get span item cuont number
    countSpan.innerHTML = arryProdact.length;
  }
}

// Add Fovret item to Card
let heatrIcone = document.getElementById("heart");
let arryFovrets = [];
if (localStorage.getItem("fovret")) {
  arryFovrets = JSON.parse(localStorage.getItem("fovret"));
  heatrIcone.innerText = arryFovrets.length;
}

function addFovrets(i) {
  let masterDtatFromPage =
    JSON.parse(localStorage.getItem("masterDfL")) || masterData;
  let fovrets = masterDtatFromPage.find((item) => item.id == i);
  arryFovrets.push(fovrets);
  localStorage.setItem("fovret", JSON.stringify(arryFovrets));
  heatrIcone.innerText = arryFovrets.length;
}

// function alert To Sing In
// if (localStorage.getItem("user") == null) {
//   userIcone.style.display = "none";
// } else {
//   userIcone.style.display = "";
// }

function alertToSing() {
  let alret = document.querySelector(".alert");
  alret.style.display = "flex";
  alret.onclick = function () {
    alret.style.display = "none";
  };
}

// dealt item creat
function delatCreat(e) {
  let masterDtatFromPage = JSON.parse(localStorage.getItem("masterDfL"));
  let fitleD = masterDtatFromPage.filter((i) => i.id !== e);
  localStorage.setItem("masterDfL", JSON.stringify(fitleD));
  masterCreatProdact(fitleD);
}

// seash ittems
let searsh = document.getElementById("searsh");

searsh.onkeyup = function () {
  function searshItems(name, e) {
    let titleS = e.filter((item) => item.name.indexOf(name) != -1);
    masterCreatProdact(titleS);
  }
  searshItems(searsh.value.toUpperCase().trim(), masterData);
};

let arryToViowItem = [];
function viowItems(e) {
  let master = JSON.parse(localStorage.getItem("masterDfL")) || masterData;
  viowItemDiv.classList.add("display");
  let viwocard = master.find((m) => m.id == e);
  viowItemDiv.innerHTML = `<div class="box">
  <i class="fa-solid fa-x" id="removeI"></i>
  <div class="img">
      <img src="${viwocard.imgOne}" alt="">
      <img src="${viwocard.imgTow}" alt="">
  </div>
  <img id="img" src="${viwocard.imgOne}" alt="">
<div class=" imform">
  <h3>${viwocard.name}</h3>
  <h5>$${viwocard.price}</h5>
  <p>Nulla eget sem vitae eros pharetra viverra. Nam vitae<br> luctus ligula. Mauris consequat ornare
      feugiat.
  </p>
  <select id="se">
      <option value="Chose An option">Chose An option</option>
      <option value="size s">size S</option>
      <option value="size m">size M</option>
      <option value="size l">size L</option>
      <option value="size xl">size XL</option>
  </select>
  <select id="se">
      <option value="Chose An option">Chose An option</option>
      <option value="Red">Red</option>
      <option value="Bule">Bule</option>
      <option value="white">White
      </option>
      <option value="Grey">Grey</option>
  </select>
  <button onclick="addtoCardFromVi(${viwocard.id})">add to card</button>
</div>
</div> `;

  // remove card
  let removeI = document.getElementById("removeI");
  removeI.onclick = function () {
    viowItemDiv.classList.remove("display");
  };
}

// add to card from viwo card

function addtoCardFromVi(e) {
  if (localStorage.getItem("user") == null) {
    alertToSing();
  } else {
    let master = JSON.parse(localStorage.getItem("masterDfL")) || masterData;
    viowItemDiv.classList.add("display");
    let viwocard = master.find((m) => m.id == e);
    let countItem = arryProdact.some((i) => i.id == viwocard.id);

    if (countItem) {
      arryProdact = arryProdact.map((p) => {
        if (p.id === viwocard.id) p.count += 1;
        return p;
      });
    } else {
      arryProdact.push(viwocard);
    }
    localStorage.setItem("payItem", JSON.stringify(arryProdact));
    // get span item cuont number
    countSpan.innerHTML = arryProdact.length;
  }
}
