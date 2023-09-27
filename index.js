document.addEventListener("DOMContentLoaded", function () {
  const testForm = document.getElementById("test-form");
  const scoreDisplay = document.getElementById("score");

  testForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const correctAnswers = {
          q1: "4",
          q2: "марс",
      };

      var score = 0;

      for (const question in correctAnswers) {
          const selectAnswer = document.querySelector(`input[name=${question}]:checked`);

          if (selectAnswer) {
              const userAnswer = selectAnswer.value;

              if (userAnswer === correctAnswers[question]) {
                  score++;
              }
          }
      }

      scoreDisplay.textContent = `Правильних відповідей: ${score} із ${Object.keys(correctAnswers).length}`;
  });
});
