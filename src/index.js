import jpg from "./test2.jpg";
import "./index.scss";

const img = new Image();
img.src = jpg;
img.classList.add("img");
document.body.appendChild(img);
