
const noteArea = document.getElementById("noteArea");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const themeBtn = document.getElementById("themeBtn");
const quote = document.getElementById("quote");
const datetimeEl = document.getElementById("datetime");
const savedNote = document.getElementById("savedNote");

const quotes = [
    "Bugünün işi, yarının başarısıdır.",
    "Başlamak için mükemmel olmak zorunda değilsin.",
    "Küçük adımlar büyük sonuçlar doğurur.",
    "Hayal et, çalış, başar!",
    "Zorluklar seni durdurmasın, şekillendirsin."
];

function updateDateTime() {
    const now = new Date();
    const tarih = now.toLocaleDateString("tr-TR", {
        weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
    const saat = now.toLocaleTimeString("tr-TR");

    datetimeEl.textContent = `${tarih} - ${saat}`;
}

window.onload = () => {
    const saved = localStorage.getItem("myNote") || "";
    noteArea.value = saved;
    savedNote.innerText = saved;
    quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    updateDateTime();
    setInterval(updateDateTime, 1000);
};

saveBtn.onclick = () => {
    localStorage.setItem("myNote", noteArea.value);
    savedNote.innerText = noteArea.value;
    alert("Notun kaydedildi!");
};

clearBtn.onclick = () => {
    noteArea.value = "";
    savedNote.innerText = "";
    localStorage.removeItem("myNote");
};

themeBtn.onclick = () => {
    document.body.classList.toggle("dark");
};
