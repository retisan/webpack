import jpg from "./test2.jpg";
import style from "./index.scss";

const img = new Image();
img.src = jpg;
img.classList.add(style.img);
document.body.appendChild(img);
