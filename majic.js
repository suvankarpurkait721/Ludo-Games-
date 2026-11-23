document.body.innerHTML = `
<style>

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;
    min-height: 100svh;
    padding: clamp(12px, 3vw, 24px);
    overflow-x: hidden;
    overflow-y: auto;
    font-family: "Trebuchet MS", Arial, sans-serif;
    background:
        radial-gradient(circle at 12% 18%, rgba(255, 255, 255, .7) 0 2px, transparent 3px),
        radial-gradient(circle at 84% 78%, rgba(255, 255, 255, .55) 0 3px, transparent 4px),
        linear-gradient(135deg, #fde8ef 0%, #f4e7ff 55%, #e1f3ff 100%);
    color: #4f3153;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    position: relative;
    flex: 0 0 auto;
    width: min(100%, 520px);
    margin-block: auto;
    padding: clamp(20px, 4vh, 34px) 28px 24px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, .75);
    border-radius: 32px;
    background: rgba(255, 255, 255, .84);
    box-shadow: 0 24px 70px rgba(104, 62, 126, .18), inset 0 1px 0 white;
    backdrop-filter: blur(12px);
    animation: card-in .7s ease both;
}

.box > * {
    position: relative;
    z-index: 1;
}

.box::before {
    position: absolute;
    z-index: 0;
    color: #ff9bb9;
    opacity: .7;
    pointer-events: none;
    content: "♡";
    top: 18px;
    left: 22px;
    font-size: 30px;
    transform: rotate(-18deg);
}

h1 {
    margin: 8px 0 10px;
    color: #78385f;
    font-size: clamp(24px, 6vw, 32px);
    line-height: 1.25;
}

.eyebrow {
    margin: 0;
    color: #8f547a;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 3px;
    text-transform: uppercase;
}

.subtitle {
    margin: 0;
    color: #765d7c;
    font-size: 15px;
}

.hint {
    margin: -4px 0 0;
    color: #8c6b92;
    font-size: 13px;
}

.play-area {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin: 8px auto 12px;
}

.thrower {
    flex: 0 0 auto;
    width: 82px;
    height: 104px;
    overflow: visible;
}

.throw-arm {
    transform-box: view-box;
    transform-origin: 51px 54px;
}

.dice-face {
    display: grid;
    width: 66%;
    height: 66%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    place-items: center;
}

.pip {
    width: clamp(9px, 3.5vw, 18px);
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 28%, #ba6f9c, #71365f 78%);
    box-shadow: inset 0 1px 2px rgba(255, 255, 255, .35), 0 1px 2px rgba(72, 31, 65, .18);
    opacity: 0;
    transition: opacity .16s ease;
}

.mini-pips circle {
    fill: #8b4776;
    opacity: 0;
    transition: opacity .16s ease;
}

:is(.dice, .mini-die)[data-value="1"] :is(.pip, .mini-pips circle):nth-child(5),
:is(.dice, .mini-die)[data-value="2"] :is(.pip, .mini-pips circle):nth-child(1),
:is(.dice, .mini-die)[data-value="2"] :is(.pip, .mini-pips circle):nth-child(9),
:is(.dice, .mini-die)[data-value="3"] :is(.pip, .mini-pips circle):nth-child(1),
:is(.dice, .mini-die)[data-value="3"] :is(.pip, .mini-pips circle):nth-child(5),
:is(.dice, .mini-die)[data-value="3"] :is(.pip, .mini-pips circle):nth-child(9),
:is(.dice, .mini-die)[data-value="4"] :is(.pip, .mini-pips circle):nth-child(1),
:is(.dice, .mini-die)[data-value="4"] :is(.pip, .mini-pips circle):nth-child(3),
:is(.dice, .mini-die)[data-value="4"] :is(.pip, .mini-pips circle):nth-child(7),
:is(.dice, .mini-die)[data-value="4"] :is(.pip, .mini-pips circle):nth-child(9),
:is(.dice, .mini-die)[data-value="5"] :is(.pip, .mini-pips circle):nth-child(1),
:is(.dice, .mini-die)[data-value="5"] :is(.pip, .mini-pips circle):nth-child(3),
:is(.dice, .mini-die)[data-value="5"] :is(.pip, .mini-pips circle):nth-child(5),
:is(.dice, .mini-die)[data-value="5"] :is(.pip, .mini-pips circle):nth-child(7),
:is(.dice, .mini-die)[data-value="5"] :is(.pip, .mini-pips circle):nth-child(9),
:is(.dice, .mini-die)[data-value="6"] :is(.pip, .mini-pips circle):nth-child(1),
:is(.dice, .mini-die)[data-value="6"] :is(.pip, .mini-pips circle):nth-child(3),
:is(.dice, .mini-die)[data-value="6"] :is(.pip, .mini-pips circle):nth-child(4),
:is(.dice, .mini-die)[data-value="6"] :is(.pip, .mini-pips circle):nth-child(6),
:is(.dice, .mini-die)[data-value="6"] :is(.pip, .mini-pips circle):nth-child(7),
:is(.dice, .mini-die)[data-value="6"] :is(.pip, .mini-pips circle):nth-child(9) {
    opacity: 1;
}

.dice {
    display: grid;
    width: 154px;
    height: 154px;
    flex: 0 0 auto;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, .8);
    border-radius: 34px;
    background: linear-gradient(145deg, #fff 5%, #fff5fa 100%);
    box-shadow: 0 14px 30px rgba(119, 72, 143, .17), inset 0 -5px 0 rgba(231, 205, 239, .5);
    cursor: pointer;
    transition: transform .2s ease, box-shadow .2s ease;
    user-select: none;
}

.dice:hover {
    box-shadow: 0 18px 34px rgba(119, 72, 143, .23), inset 0 -5px 0 rgba(231, 205, 239, .5);
}

.box.is-rolling .throw-arm {
    animation: toss-arm .85s ease-in-out;
}

.box.is-rolling .mini-die {
    animation: toss-die .85s linear;
}

.box.is-rolling .dice {
    animation: dice-roll 1s linear;
}

@keyframes toss-arm {
    0%, 100% { transform: rotate(0); }
    42% { transform: rotate(-28deg); }
    72% { transform: rotate(18deg); }
}

@keyframes toss-die {
    0% { transform: translate(0, 0) rotate(0); }
    100% { transform: translate(12px, -8px) rotate(360deg); }
}

@keyframes dice-roll {
    from { transform: rotate(0); }
    to { transform: rotate(1440deg); }
}

button {
    padding: 15px 32px;
    border: none;
    border-radius: 999px;
    background: linear-gradient(100deg, #e65d88, #9660c8);
    box-shadow: 0 8px 18px rgba(155, 74, 144, .27), inset 0 1px 0 rgba(255, 255, 255, .35);
    color: white;
    font: inherit;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease;
}

button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 11px 22px rgba(155, 74, 144, .34), inset 0 1px 0 rgba(255, 255, 255, .35);
}

button:active:not(:disabled) {
    transform: translateY(0);
}

button:disabled {
    cursor: wait;
    opacity: .75;
}

#result {
    display: grid;
    min-height: 70px;
    margin: 18px 0 0;
    padding: 16px;
    place-items: center;
    border: 1px solid #ecd8f0;
    border-radius: 18px;
    background: #fff9fd;
    color: #634065;
    font-size: 17px;
    line-height: 1.5;
}

.footer {
    margin: 18px 0 0;
    color: #98799b;
    font-size: 12px;
}

@keyframes card-in {
    from { opacity: 0; transform: translateY(12px) scale(.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
}

@media (max-width: 420px) {
    .box { padding: 20px 18px 18px; border-radius: 24px; }
    h1 { font-size: 24px; }
    .subtitle { font-size: 14px; }
    .play-area { gap: 8px; margin: 6px auto 10px; }
    .thrower { width: 62px; height: 82px; }
    .dice { width: 104px; height: 104px; border-radius: 25px; }
    button { padding: 13px 25px; font-size: 14px; }
    #result { font-size: 15px; }
}

@media (max-height: 740px) {
    body { padding-top: 10px; padding-bottom: 10px; }
    .box { padding-top: 16px; padding-bottom: 14px; }
    h1 { margin: 5px 0 7px; }
    .eyebrow { font-size: 10px; }
    .subtitle { font-size: 13px; }
    .hint { margin-top: 2px; font-size: 11px; }
    .play-area { gap: 6px; margin: 4px auto 8px; }
    .thrower { width: 52px; height: 70px; }
    .dice { width: 88px; height: 88px; border-radius: 22px; }
    button { padding: 11px 22px; font-size: 13px; }
    #result { min-height: 48px; margin-top: 10px; padding: 9px 12px; font-size: 14px; }
    .footer { margin-top: 8px; }
}

@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: .01ms !important;
    }
}

</style>

<div class="box">

    <p class="eyebrow">A little surprise for you</p>
    <h1>❤️ Ludo Game Specially Made For You ❤️</h1>

    <p class="subtitle">Roll the dice and see what your heart has to say!</p>

    <p class="hint">✨ Tap the dice and watch your surprise roll! ✨</p>

    <div class="play-area">
        <svg class="thrower" viewBox="0 0 100 112" aria-hidden="true">
            <ellipse cx="42" cy="106" rx="27" ry="4" fill="#d9bddf"/>
            <path d="M20 101 24 63Q27 48 40 47Q54 47 59 63L64 101Z" fill="#e875a1" stroke="#fff" stroke-width="3"/>
            <path d="M26 59 13 74" fill="none" stroke="#f4bd9f" stroke-width="8" stroke-linecap="round"/>
            <circle cx="40" cy="28" r="17" fill="#f4bd9f"/>
            <path d="M23 29Q20 9 39 8Q57 8 58 26L51 22 46 16 38 22 29 20Z" fill="#59354f"/>
            <circle cx="34" cy="29" r="1.7" fill="#513447"/>
            <circle cx="46" cy="29" r="1.7" fill="#513447"/>
            <path d="M36 36Q40 40 45 35" fill="none" stroke="#a94d64" stroke-width="2" stroke-linecap="round"/>
            <g class="throw-arm">
                <path d="M53 56Q64 53 69 43L77 27" fill="none" stroke="#f4bd9f" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="78" cy="25" r="5" fill="#f4bd9f"/>
                <g class="mini-die" data-value="1">
                    <rect x="73" y="5" width="19" height="19" rx="5" fill="#fff" stroke="#b65d91" stroke-width="2"/>
                    <g class="mini-pips">
                        <circle cx="78" cy="10" r="1.1"/><circle cx="83" cy="10" r="1.1"/><circle cx="88" cy="10" r="1.1"/>
                        <circle cx="78" cy="14.5" r="1.1"/><circle cx="83" cy="14.5" r="1.1"/><circle cx="88" cy="14.5" r="1.1"/>
                        <circle cx="78" cy="19" r="1.1"/><circle cx="83" cy="19" r="1.1"/><circle cx="88" cy="19" r="1.1"/>
                    </g>
                </g>
            </g>
        </svg>
        <div class="dice" id="dice" data-value="1" role="button" tabindex="0" aria-label="Dice showing 1 dot. Activate to roll.">
            <div class="dice-face" aria-hidden="true">
                <span class="pip"></span><span class="pip"></span><span class="pip"></span>
                <span class="pip"></span><span class="pip"></span><span class="pip"></span>
                <span class="pip"></span><span class="pip"></span><span class="pip"></span>
            </div>
        </div>
    </div>

    <button id="roll" type="button">TAP TO ROLL ❤️</button>

    <h2 id="result" aria-live="polite">Your surprise is waiting! 😍</h2>

    <p class="footer">Made with lots of love 💌</p>

</div>
`;

const compliments = {
    1: "Sabdhan! Tomar hasite manush crush khete pare! 😂❤️",
    2: "Chal chand ko uski okat dikhata hu, usko bta du ki asli chand to yeha Facebook main hain !😜💘",
    3: "Tumi ki WiFi? Tomar proti kemon jeno taan onuvob korchi! 📶😂",
    4: "Tomar hasir jonno alada kore tax bosano uchit! 🤣",
    5: "Eto sundar howar permission ke diyeche tomake? Police dakbo naki? 😜❤️",
    6: "বুঝতে পারছি না আপনাকে দেখলে আমার হার্ট auto connect হয় কেনো।। আপনার wifi কি সবসময় on থাকে।।🫣😘!"
};

const dice = document.getElementById("dice");
const miniDie = document.querySelector(".mini-die");
const result = document.getElementById("result");
const button = document.getElementById("roll");

if (!dice || !miniDie || !result || !button) {
    throw new Error("Special Dice: required page elements were not found.");
}

button.addEventListener("click", function () {

    button.disabled = true;

    const box = document.querySelector(".box");
    box.classList.add("is-rolling");

    result.textContent = "Rolling... ❤️";

    setTimeout(function () {

        const number = Math.floor(Math.random() * 6) + 1;

        dice.dataset.value = String(number);
        miniDie.dataset.value = String(number);
        dice.setAttribute("aria-label", "Dice showing " + number + " dots. Activate to roll again.");
        box.classList.remove("is-rolling");

        result.textContent = compliments[number];

        button.disabled = false;

    }, 1000);

});

dice.addEventListener("click", function () {
    button.click();
});

dice.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        button.click();
    }
});