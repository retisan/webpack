const arr = [];

export default function () {
    const dom = document.querySelector("#root");
    var content = document.createElement("div");
    content.innerHTML = "content";
    dom.appendChild(content);
};
