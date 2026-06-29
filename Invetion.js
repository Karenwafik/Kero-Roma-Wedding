// function openInvitation() {
//     window.location.href = "details.html";
// }
// const button = document.querySelector(".open-btn");
// const music = document.getElementById("bgMusic");

// button.addEventListener("click", function () {

//     music.addEventListener('loadedmetadata', function () {
//         music.currentTime = 15;
//         music.play();
//     });

//     if (music.readyState >= 1) {
//         music.currentTime = 15;
//         music.play();
//     }

//     setTimeout(() => {
//         window.location.href = "details.html";
//     }, 1000);



// });



function openInvitation() {
    window.location.href = "details.html";
    const music = document.getElementById("bgMusic");

    // تشغيل الموسيقى من الثانية 15
    music.currentTime = 15;

    music.play()
        .then(() => {
            // حفظ حالة التشغيل
            sessionStorage.setItem("playMusic", "true");

            // الانتقال بعد ثانية
            setTimeout(() => {
                window.location.href = "details.html";
            }, 1000);
        })
        .catch((error) => {
            console.log("Audio could not play:", error);

            // الانتقال حتى لو المتصفح منع تشغيل الصوت
            window.location.href = "details.html";
        });
}