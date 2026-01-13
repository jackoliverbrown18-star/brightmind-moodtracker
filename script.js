<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Journal | Bright Minds</title>

<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Pacifico&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>

<body>

<header class="journal-header">
    <h1>Your Journal</h1>
    <p>Take a moment. Write honestly. This space is yours.</p>
</header>

<main class="container">

    <section>
        <h2>🌼 Daily Positive Message</h2>
        <p class="message" id="positiveMessage"></p>
        <button onclick="newMessage()">New Message</button>
    </section>

    <section>
        <h2>📝 Mood Journal</h2>
        <select id="moodSelect">
            <option value="Happy">😊 Happy</option>
            <option value="Calm">😌 Calm</option>
            <option value="Anxious">😰 Anxious</option>
            <option value="Sad">😢 Sad</option>
            <option value="Frustrated">😤 Frustrated</option>
        </select>

        <textarea id="journalEntry" placeholder="How are you feeling today?"></textarea>
        <button onclick="saveJournal()">Save Entry</button>
        <div id="journalEntries"></div>
    </section>

    <section>
        <h2>💭 Vent Space</h2>
        <textarea id="ventEntry" placeholder="Let it out. No judgment here."></textarea>
        <button onclick="saveVent()">Share</button>
        <div id="ventEntries"></div>
    </section>

</main>

<footer>
    © 2026 Bright Minds Journal — You are not alone.
</footer>

<script src="script.js"></script>
</body>
</html>
