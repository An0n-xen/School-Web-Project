// Getting Gallery div
const gallery = document.querySelector(".gallery");

// Getting rows
// row 1
const row1 = document.querySelector(".row1");

// row 2
const row2 = document.querySelector(".row2");

// row 3
const row3 = document.querySelector(".row3");

// row 4
const row4 = document.querySelector(".row4");

// row 5
const row5 = document.querySelector(".row5");

// Show Buy Button
function showBuy(item, state) {
  // Getting image name
  //   const imageName = img.split("/").pop().split(".")[0];
  //   console.log(imageName);

  // show
  if (state) {
    item.children[0].style.display = "block";
  } else {
    item.children[0].style.display = "none";
  }
}

function Buy(__name) {
  localStorage.setItem("Image_name", __name.children[1].src);
  window.open("/pages/Download.html");
}

// Getting images in row 1
const row1_img = row1.children;

// Adding event listener
for (const item in row1_img) {
  const element = row1_img[item];
  if (element.id) {
    element.addEventListener("mouseover", (item) => {
      try {
        showBuy(element, 1);
      } catch (error) {}
    });

    element.addEventListener("mouseout", (item) => {
      try {
        showBuy(element, 0);
      } catch (error) {}
    });
    element.addEventListener("click", (item) => {
      try {
        Buy(element);
      } catch (error) {}
    });
  }
}

// Getting images in row 2
const row2_img = row2.children;

// Adding event listener
for (const item in row2_img) {
  const element = row2_img[item];
  if (element.id) {
    element.addEventListener("mouseover", (item) => {
      try {
        showBuy(element, 1);
      } catch (error) {}
    });

    element.addEventListener("mouseout", (item) => {
      try {
        Buy(item);
      } catch (error) {}
    });
    element.addEventListener("click", (item) => {
      try {
        Buy(element);
      } catch (error) {}
    });
  }
}

// Getting images in row 3
const row3_img = row3.children;

// Adding event listener
for (const item in row3_img) {
  const element = row3_img[item];
  if (element.id) {
    element.addEventListener("mouseover", (item) => {
      try {
        showBuy(element, 1);
      } catch (error) {}
    });

    element.addEventListener("mouseout", (item) => {
      try {
        showBuy(element, 0);
      } catch (error) {}
    });
    element.addEventListener("click", (item) => {
      try {
        Buy(element);
      } catch (error) {}
    });
  }
}

// Getting images in row 3
const row4_img = row4.children;

// Adding event listener
for (const item in row4_img) {
  const element = row4_img[item];
  if (element.id) {
    element.addEventListener("mouseover", (item) => {
      try {
        showBuy(element, 1);
      } catch (error) {}
    });

    element.addEventListener("mouseout", (item) => {
      try {
        showBuy(element, 0);
      } catch (error) {}
    });
    element.addEventListener("click", (item) => {
      try {
        Buy(element);
      } catch (error) {}
    });
  }
}

// Getting images in row 3
const row5_img = row5.children;

// Adding event listener
for (const item in row5_img) {
  const element = row5_img[item];
  if (element.id) {
    element.addEventListener("mouseover", (item) => {
      try {
        showBuy(element, 1);
      } catch (error) {}
    });

    element.addEventListener("mouseout", (item) => {
      try {
        showBuy(element, 0);
      } catch (error) {}
    });

    element.addEventListener("click", (item) => {
      try {
        Buy(element);
      } catch (error) {}
    });
  }
}

console.log(window.innerWidth);
//1426
