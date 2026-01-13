const MOODS = ["😔","😐","🙂","😄","🌤️"];
const DAILY_THOUGHTS = [
  "Take today one step at a time.",
  "Your feelings are valid.",
  "Rest is productive.",
  "Your presence matters.",
  "One breath at a time.",
  "You don’t have to be perfect.",
  "Small steps still count."
];

function getTodayKey() {
  return new Date().toISOString().split("T")[0];
}

function loadDailyThought() {
  const key = "brightmindThought_" + getTodayKey();
  let thought = localStorage.getItem(key);
  if (!thought) {
    thought = DAILY_THOUGHTS[Math.floor(Math.random() * DAILY_THOUGHTS.length)];
    localStorage.setItem(key, thought);
  }
  document.getElementById("thought").innerText = thought;
}

function renderMoods() {
  const container = document.getElementById("moods");
  MOODS.forEach(emoji => {
    const btn = document.createElement("button");
    btn.innerText = emoji;
    btn.onclick = () => localStorage.setItem("brightmindMood_" + getTodayKey(), emoji);
    container.appendChild(btn);
  });
}

function saveMood() {
  const note = document.getElementById("note").value;
  const date = getTodayKey();
  const mood = localStorage.getItem("brightmindMood_" + date);
  if (!mood) {
    alert("Select a mood first!");
    return;
  }
  const history = JSON.parse(localStorage.getItem("brightmindHistory") || "[]");
  history.unshift({ date, mood, note });
  localStorage.setItem("brightmindHistory", JSON.stringify(history));
  alert("Saved! 🌱");
}

function showHistory() {
  const list = JSON.parse(localStorage.getItem("brightmindHistory") || "[]");
  const container = document.getElementById("historyList");
  container.innerHTML = "";
  list.forEach(e => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${e.date}</strong> ${e.mood}<br>${e.note}`;
    container.appendChild(div);
  });
  document.getElementById("historyView").style.display = "block";
}

function hideHistory() {
  document.getElementById("historyView").style.display = "none";
}

loadDailyThought();
renderMoods();
