import "./index.css";

document.addEventListener("click", () => {
    import("./click").then(({ default: fn }) => {
        fn();
    });
});
