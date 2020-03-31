import jpg from "./test2.jpg";
import "./index.css";

const img = new Image();
img.src = jpg;
img.classList.add("img");
document.body.appendChild(img);
