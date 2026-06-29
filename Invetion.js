function openInvitation() {
    window.location.href = "details.html";
}
const button = document.querySelector(".open-btn");
const music = document.getElementById("bgMusic");

button.addEventListener("click", function () {

    music.addEventListener('loadedmetadata', function () {
        music.currentTime = 15;
        music.play();
    });

    if (music.readyState >= 1) {
        music.currentTime = 15;
        music.play();
    }

    setTimeout(() => {
        window.location.href = "details.html";
    }, 1000);



});
