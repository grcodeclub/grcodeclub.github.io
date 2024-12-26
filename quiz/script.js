// Κανονικοποίηση απάντησης (αφαίρεση τόνων και κενών)
const normalizeText = (text) => {
    return text
        .normalize("NFD") // Διαχωρισμός γραμμάτων και διακριτικών
        .replace(/[\u0300-\u036f]/g, "") // Αφαίρεση διακριτικών
        .replace(/\s+/g, " ") // Αντικατάσταση πολλαπλών κενών με ένα κενό
        .trim() // Αφαίρεση περιττών κενών στην αρχή/τέλος
        .toLowerCase(); // Μετατροπή σε πεζά
};

// Επιλογή τυχαίων ερωτήσεων
const getRandomQuestions = (questions, num) => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, num);
};

// Φόρτωση ερωτήσεων από JSON
const loadQuestions = async (filePath) => {
    try {
        const response = await fetch(filePath); // Φόρτωση JSON
        const questionBank = await response.json(); // Μετατροπή σε αντικείμενο
        const selectedQuestions = getRandomQuestions(questionBank, 10); // Επιλογή 10 τυχαίων ερωτήσεων
        renderQuiz(selectedQuestions); // Δημιουργία του quiz
        window.selectedQuestions = selectedQuestions; // Αποθήκευση για αξιολόγηση
    } catch (error) {
        console.error("Σφάλμα κατά τη φόρτωση των ερωτήσεων:", error);
    }
};

// Δημιουργία quiz
const renderQuiz = (questions) => {
    const quizContainer = document.getElementById("quiz-container");
    const submitBtn = document.getElementById("submit-btn");

    // Καθαρισμός προηγούμενου περιεχομένου
    quizContainer.innerHTML = "";
    submitBtn.classList.add("hidden");

    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question-container");

        if (q.type === "multiple-choice") {
            // Ερωτήσεις πολλαπλής επιλογής
            questionDiv.innerHTML = `
                <p><strong>${index + 1}. ${q.question}</strong></p>
                ${q.answers
                    .map(
                        (answer, i) =>
                            `<label>
                                <input type="radio" name="question-${index}" value="${i}">
                                ${answer}
                            </label><br>`
                    )
                    .join("")}
            `;
        } else if (q.type === "open-ended") {
            // Ερωτήσεις ανάπτυξης
            questionDiv.innerHTML = `
                <p><strong>${index + 1}. ${q.question}</strong></p>
                <textarea name="question-${index}" rows="4" cols="50"></textarea>
            `;
        }
        quizContainer.appendChild(questionDiv);
    });

    // Εμφάνιση κουμπιού υποβολής
    submitBtn.classList.remove("hidden");
};

// Υποβολή και αξιολόγηση
const submitQuiz = () => {
    const resultsDiv = document.getElementById("results");
    let score = 0;
    const feedback = [];

    window.selectedQuestions.forEach((q, index) => {
        if (q.type === "multiple-choice") {
            const selectedAnswer = document.querySelector(
                `input[name="question-${index}"]:checked`
            );
            if (selectedAnswer && parseInt(selectedAnswer.value) === q.correct) {
                score++;
            } else {
                feedback.push(`Λάθος απάντηση στην ερώτηση ${index + 1}: ${q.question}`);
            }
        } else if (q.type === "open-ended") {
            const writtenAnswer = document.querySelector(
                `textarea[name="question-${index}"]`
            ).value.trim();

            // Κανονικοποίηση και σύγκριση απάντησης
            const normalizedWritten = normalizeText(writtenAnswer);
            const normalizedCorrect = normalizeText(q.correct);

            if (normalizedWritten === normalizedCorrect) {
                score++;
            } else {
                feedback.push(
                    `Λάθος απάντηση στην ερώτηση ${index + 1}: ${q.question}<br>
                    Η σωστή απάντηση είναι: "${q.correct}".`
                );
            }
        }
    });

    resultsDiv.innerHTML = `
        <p>Βαθμολογία: ${score}/${window.selectedQuestions.length}</p>`;
    resultsDiv.classList.remove("hidden");
};

// Διαχείριση κουμπιού φόρτωσης
document.getElementById("load-btn").addEventListener("click", () => {
    const fileSelect = document.getElementById("page-select");
    const selectedFile = fileSelect.value; // Επιλεγμένο αρχείο
    loadQuestions(selectedFile);
});

// Διαχείριση κουμπιού υποβολής
document.getElementById("submit-btn").addEventListener("click", submitQuiz);
