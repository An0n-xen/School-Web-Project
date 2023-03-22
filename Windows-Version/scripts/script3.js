// ImgDiv
const ImgDiv = document.querySelector(".imgDiv");

const ImgUrl = localStorage.getItem("Image_name").split("/");
const ImgName = ImgUrl[ImgUrl.length - 1];

ImgDiv.children[0].src = "../images/" + ImgName;

// Functions
function CancelTrans() {
  window.open("../index.html", "_parent");
}
