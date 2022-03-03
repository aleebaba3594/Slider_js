var images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
];

var left_btn = document.querySelector(".left");
var right_btn = document.querySelector(".right");
var photo = document.querySelector("#photo");
var i = 0;

right_btn.addEventListener("click", () => {
  i = i + 1;
  if (i < images.length) {
    photo.src = images[i];
    console.log(i, "right iff");
  } else {
    i = 0;
    photo.src = images[i];

    console.log(i, "right else");
  }
});
left_btn.addEventListener("click", () => {
  if (i <= images.length - 1 && i > 0) {
    i = i - 1;

    photo.src = images[i];
    console.log(i, "left iff");
  } else {
    i = images.length - 1;
    photo.src = images[i];

    console.log(i, "left else");
  }
});
