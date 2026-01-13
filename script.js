const messages = [
    "Today is a fresh start — you are allowed to begin again.",
    "You are doing better than you think you are.",
    "Your feelings are valid, even when they are difficult.",
    "Small steps still move you forward.",
    "You don’t have to have everything figured out today.",
    "Rest is productive. Give yourself permission to pause.",
    "You are worthy of kindness — especially from yourself.",
    "It’s okay to ask for help when things feel heavy.",
    "Progress doesn’t have to be perfect to matter.",
    "You’ve survived every hard day so far — that matters.",
    "Your pace is your own. There is no rush.",
    "Healing isn’t linear, and that’s completely okay.",
    "You are allowed to take up space and express your feelings.",
    "One gentle choice today can make a difference.",
    "You are not weak for feeling deeply.",
    "Today, focus on what you can control — and release the rest.",
    "You are growing, even on days it doesn’t feel like it.",
    "Your effort counts, even when the outcome is unclear.",
    "It’s okay to let go of what no longer serves you.",
    "You deserve peace just as much as anyone else.",
    "Today doesn’t have to be perfect to be meaningful.",
    "You are allowed to set boundaries without guilt.",
    "Your thoughts and feelings matter.",
    "Every step forward — no matter how small — is progress.",
    "You are learning how to care for yourself better each day.",
    "You are allowed to move at a pace that feels safe for you.",
    "Even quiet days have value.",
    "You don’t need permission to prioritize your wellbeing.",
    "You are capable of handling this moment.",
    "You made it through today — and that is enough."
];

document.addEventListener("DOMContentLoaded", () => {
    const messageElement = document.getElementById("positiveMessage");
    if (!messageElement) return;

    const today = new Date().toDateString();
    let startDate = localStorage.getItem("startDate");
    let dayIndex = localStorage.getItem("dayIndex");

    if (!startDate) {
        localStorage.setItem("startDate", today);
        localStorage.setItem("dayIndex", 0);
        messageElement.textContent = messages[0];
        return;
    }

    const lastDate = localStorage.getItem("lastDate");

    if (lastDate !== today) {
        dayIndex = Math.min(parseInt(dayIndex) + 1, messages.length - 1);
        localStorage.setItem("dayIndex", dayIndex);
        localStorage.setItem("lastDate", today);
    }

    messageElement.textContent = messages[dayIndex];
});
