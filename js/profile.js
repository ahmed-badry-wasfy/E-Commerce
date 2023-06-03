let nameSpan = document.getElementById("ne");
let emailSpan = document.getElementById("em");
let dataG = JSON.parse(localStorage.getItem("user"));
let imges = document.getElementById("img");
console.log(imges);

function dataGet() {
  dataG.map((i) => {
    console.log(i.names);
    nameSpan.innerHTML = i.names;
    emailSpan.innerHTML = i.emaleU;
    imges.src = i.img;
  });
}
dataGet();
