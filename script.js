const loading = document.getElementById("loading");
const main = document.getElementById("main");
const gift = document.getElementById("gift");
const message = document.getElementById("message");
const text = document.getElementById("text");

const proposal = document.getElementById("proposal");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

const msg = `بنتي الحبيبة 🤍، باباك كيبغيك بزاف. ما تتصوريش شحال أنا فرحان حيث نتي معايا. والله كنتمنا ليك عيد ميلاد زوين، وإن شاء الله المرة الجاية غادي نكونو مجموعين ونحتافلو كاملين. الله يخليك ليا يا حبيبة باباك، ويحفظك ويخليك ديما فرحانة. كنحبك بزاف بزاف. ❤️🎂`;

window.onload = () => {
    setTimeout(() => {
        loading.style.display = "none";
        main.style.display = "flex";
    }, 2000);
};

gift.onclick = () => {

    main.style.display = "none";
    message.style.display = "flex";

    text.textContent = "";

    let i = 0;

    const typing = setInterval(() => {

        text.textContent += msg.charAt(i);
        i++;

        if (i >= msg.length) {

            clearInterval(typing);

            confetti({
                particleCount: 250,
                spread: 180,
                origin: { y: 0.6 }
            });

            const hearts = setInterval(createHeart, 400);

            setTimeout(() => {

                clearInterval(hearts);

                message.innerHTML = `
                    <h1>👑 Happy Birthday Princess ❤️</h1>
                    <p style="font-size:32px;">
                        With all my love...<br>
                        From Baba 🤍
                    </p>

                    <br><br>

                    <button id="nextBtn">💍 One Last Surprise ❤️</button>
                `;

                document.getElementById("nextBtn").onclick = () => {
                    message.style.display = "none";
                    proposal.style.display = "flex";
                };

            }, 2500);

        }

    }, 60);

};

function createHeart() {

    const heart = document.createElement("div");

    const hearts = ["💖","💕","💗","💓","❤️","🌸"];

    heart.className = "floating-heart";
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

yes.onclick = () => {

    confetti({
        particleCount: 500,
        spread: 220
    });

    proposal.innerHTML = `
        <h1>❤️ Yeeeees!! ❤️</h1>
        <h2>I Love You Forever 💍</h2>
        <h3>Thank you my Princess 👑🤍</h3>
    `;

};

no.onmouseover = () => {

    no.style.position = "absolute";
    no.style.left = Math.random() * 80 + "%";
    no.style.top = Math.random() * 80 + "%";

};
