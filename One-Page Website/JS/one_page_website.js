/* LIGHTBOX SCRIPT */

let modal = document.createElement("div");
modal.id = "lightbox";
document.body.appendChild(modal);

modal.style.position = "fixed";
modal.style.top = 0;
modal.style.left = 0;
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.background = "rgba(0,0,0,0.8)";
modal.style.display = "none";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";

const images = document.querySelectorAll("img");

images.forEach(image => {
    image.addEventListener("click", () => {
        modal.style.display = "flex";
        const fullImg = document.createElement("img");
        fullImg.src = image.src.replace("smallsize", "fullsize");
        fullImg.style.maxWidth = "80%";
        fullImg.style.border = "4px solid white";
        modal.innerHTML = "";
        modal.appendChild(fullImg);
    });
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});
