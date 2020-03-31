import jpg from "./test2.jpg";
console.warn(jpg);

const img = new Image();
img.src = jpg;
document.body.appendChild(img);
