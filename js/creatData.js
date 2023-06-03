let img = document.getElementById("imgs");
let title = document.getElementById("nam");
let subject = document.getElementById("em");
let price = document.getElementById("pr");
let priceBefor = document.getElementById("prb");
let btn = document.getElementById("btn");
let imge;

btn.onclick = addNewData;
img.onchange = getImes;
if (localStorage.getItem("masterDfL")) {
  masterData = JSON.parse(localStorage.getItem("masterDfL"));
}
function addNewData(e) {
  e.preventDefault();

  if (
    title.value != "" &&
    subject.value != "" &&
    price.value != "" &&
    priceBefor.value != ""
  ) {
    localStorage.setItem("masterDfL", JSON.stringify(masterData));
    let newData = {
      id: masterData.length + 1,
      name: title.value,
      title: subject.value,
      imgOneC: imge,
      imgOne: imge,
      imgTow: imge,
      price: price.value,
      priceB: priceBefor.value,
      imMe: "Yes",
      count: 1,
    };
    masterData.push(newData);
    console.log(masterData);
    localStorage.setItem("masterDfL", JSON.stringify(masterData));

    setTimeout(() => {
      window.location = "../index.html";
    }, 500);
  }
}

function getImes() {
  let file = this.files[0];
  console.log(file.type);
  imge = URL.createObjectURL(file);
  reders(file);
}

function reders(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function () {
    imge = reader.result;
  };
}
