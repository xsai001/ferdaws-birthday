const message = `بنتي الحبيبة 🤍، باباك كيبغيك بزاف. ما تتصوريش شحال أنا فرحان حيث نتي معايا. والله كنتمنا ليك عيد ميلاد زوين، وإن شاء الله المرة الجاية غادي نكونو مجموعين ونحتافلو كاملين. الله يخليك ليا يا حبيبة باباك، ويحفظك ويخليك ديما فرحانة. كنحبك بزاف بزاف. ❤️🎂`;

window.addEventListener("load", () => {

    setTimeout(() => {

        loading.classList.add("hide");
        main.classList.remove("hide");

    }, 2500);

});

gift.onclick = () => {

    gift.style.transform = "scale(1.2)";

    setTimeout(() => {

        main.classList.add("hide");
        msg.classList.remove("hide");

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
