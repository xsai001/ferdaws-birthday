const loading = document.getElementById("loading-screen");
const main = document.getElementById("main");
const gift = document.getElementById("gift");
const msg = document.getElementById("msg");
const text = document.getElementById("text");

const message = `بنتي الحبيبة 🤍، باباك كيبغيك بزاف. ما تتصوريش شحال أنا فرحان حيث نتي معايا. والله كنتمنا ليك عيد ميلاد زوين، وإن شاء الله المرة الجاية غادي نكونو مجموعين ونحتافلو كاملين. الله يخليك ليا يا حبيبة باباك، ويحفظك ويخليك ديما فرحانة. كنحبك بزاف بزاف. ❤️🎂`;

window.addEventListener("load", () => {

    setTimeout(() => {

        loading.style.display = "none";
        main.style.display = "flex";

    }, 2500);

});
});

gift.onclick = () => {

    document.querySelector(".lid").style.transform =
        "translateY(-90px) rotate(-20deg)";

    gift.style.transform = "scale(1.2)";

    setTimeout(() => {

        main.style.display = "none";
msg.style.display = "flex";

        let i = 0;

        const typing = setInterval(() => {

            text.textContent += message[i] || "";
            i++;

            if (i >= message.length) {
                clearInterval(typing);
            }

        }, 35);

    }, 700);

};
