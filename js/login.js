let btn = document.getElementById("btn");
let nameU = document.getElementById("nam");
let emailU = document.getElementById("em");
let passwordU = document.getElementById("pass");
let imgeU = document.getElementById("imgs");
let getImg;
btn.onclick = setDataUser;
imgeU.onchange = getImes;
let arryUser = [];

function setDataUser(e) {
  e.preventDefault();
  if (nameU.value != "" && emailU.value != "" && passwordU.value != "") {
    let data = {
      names: nameU.value,
      emaleU: emailU.value,
      passwordUser: passwordU.value,
      img: getImg,
    };
    arryUser.push(data);
    localStorage.setItem("user", JSON.stringify(arryUser));

    nameU.value = "";
    emailU.value = "";
    passwordU.value = "";
    setTimeout(() => {
      window.location = "profile.html";
    }, 500);
  }
}

function getImes() {
  let file = this.files[0];
  getImg = URL.createObjectURL(file);
  reders(file);
}
function reders(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function () {
    getImg = reader.result;
  };
}
