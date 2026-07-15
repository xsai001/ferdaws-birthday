alert("JavaScript works!");

const msg=`بنتي الحبيبة 🤍، باباك كيبغيك بزاف. ما تتصوريش شحال أنا فرحان حيث نتي معايا. والله كنتمنا ليك عيد ميلاد زوين، وإن شاء الله المرة الجاية غادي نكونو مجموعين ونحتافلو كاملين. الله يخليك ليا يا حبيبة باباك، ويحفظك ويخليك ديما فرحانة. كنحبك بزاف بزاف. ❤️🎂`;

window.onload=()=>setTimeout(()=>{
    loading.style.display='none';
    main.style.display='flex';
},2000);

gift.onclick=()=>{
    setTimeout(()=>{
        main.style.display='none';
        message.style.display='flex';
        let i=0;
        let t=setInterval(()=>{
            text.textContent+=msg[i]||'';
            i++;
            if (i >= msg.length) {
    clearInterval(t);

    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        const end = document.createElement("div");
        end.innerHTML = `
            <h2>👑 Happy Birthday Princess ❤️</h2>
            <p>With all my love...<br>From Baba 🤍</p>
        `;

        end.style.marginTop = "40px";
        end.style.textAlign = "center";
        end.style.fontSize = "28px";

        message.appendChild(end);
    }, 1500);
}
        },35);
    },500)
};
