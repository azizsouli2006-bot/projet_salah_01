function showResources() {
    const mood = document.getElementById("mood").value;
    const cards = document.getElementById("cards");
    cards.innerHTML = "";

    const data = {
        stress: [
            ["Breathing Exercises", "Reduce stress through guided breathing."],
            ["Work-Life Balance", "Learn how to manage pressure effectively."]
        ],
        anxiety: [
            ["Grounding Techniques", "Stay present and calm your thoughts."],
            ["Meditation", "Daily guided mindfulness practices."]
        ],
        depression: [
            ["Talk to Someone", "Connection reduces emotional burden."],
            ["Professional Therapy", "Seek licensed mental health support."]
        ],
        loneliness: [
            ["Social Support", "Engage in meaningful connections."],
            ["Self-Care Activities", "Enjoy activities that uplift you."]
        ],
        anger: [
            ["Emotion Regulation", "Learn to manage strong emotions."],
            ["Physical Activity", "Release tension through movement."]
        ]
    };

    if (!mood) return;

    data[mood].forEach(item => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<h3>${item[0]}</h3><p>${item[1]}</p>`;
        cards.appendChild(div);
    });
}