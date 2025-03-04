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

    // Display score on page
    scrollTo(0, 0);
    result.classList.remove("d-none");

    let i = 0;
    const animate = setInterval((() => {
        resultScore.textContent = `${i}%`;
        i++;
        if (i > score) {
            clearInterval(animate);
        }
    }), 50);

});