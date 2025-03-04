const correctAnsewers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const resultScore = document.querySelector(".result span");

form.addEventListener("submit", e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // Check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnsewers[index]) {
            score += 25;
        }
    });

    // Display score
    result.classList.remove("d-none");
    resultScore.textContent = `${score}%`;
});