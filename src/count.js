import "./button.css";

function count() {
    const btn = document.createElement("button");
    btn.innerHTML = "1";
    btn.onclick = function (e) {
        e.target.innerHTML = parseInt(e.target.innerHTML) + 2;
    };
    document.body.appendChild(btn);
}

export default count;