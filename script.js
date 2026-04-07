const card = document.querySelector(".card");
const glare = document.querySelector(".glare");

card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let centerX = rect.width / 2;
    let centerY = rect.height / 2;

    let rotateX = -(y - centerY) / 12;
    let rotateY = (x - centerX) / 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    // glare movement
    glare.style.opacity = "1";
    glare.style.left = x - rect.width + "px";
    glare.style.top = y - rect.height + "px";
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    glare.style.opacity = "0";
});