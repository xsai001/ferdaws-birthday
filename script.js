const loading = document.getElementById("loading");
const main = document.getElementById("main");
const gift = document.getElementById("gift");
const message = document.getElementById("message");
const text = document.getElementById("text");

const msg = `بنتي الحبيبة 🤍، باباك كيبغيك بزاف. ما تتصوريش شحال أنا فرحان حيث نتي معايا. والله كنتمنا ليك عيد ميلاد زوين، وإن شاء الله المرة الجاية غادي نكونو مجموعين ونحتافلو كاملين. الله يخليك ليا يا حبيبة باباك، ويحفظك ويخليك ديما فرحانة. كنحبك بزاف بزاف. ❤️🎂`;

window.onload = () => {
    setTimeout(() => {
        loading.style.display = "none";
        main.style.display = "flex";
    }, 2000);
};

gift.onclick = () => {

    setTimeout(() => {

        main.style.display = "none";
        message.style.display = "flex";

        let i = 0;

        const typing = setInterval(() => {

            text.textContent += msg[i] || "";
            i++;

            if (i >= msg.length) {

    clearInterval(typing);

    alert("Message Finished");

   const duration = 3000;
const endTime = Date.now() + duration;

(function frame() {
    confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
    });

    confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
    });

    if (Date.now() < endTime) {
        requestAnimationFrame(frame);
    }
})();
    });

    // 👑 الرسالة الأخيرة
    setTimeout(() => {

                    const end = document.createElement("div");

                    end.innerHTML = `
                        <h2>👑 Happy Birthday Princess ❤️</h2>
                        <p>With all my love...<br>From Baba 🤍</p>
                    `;

                    end.style.marginTop = "40px";
                    end.style.textAlign = "center";

                    message.appendChild(end);

                }, 1500);
            }

                }, 35);

    }, 500);

};

// ⬇️ حطها هنا، تحت آخر };
function createHeart(){

    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}
