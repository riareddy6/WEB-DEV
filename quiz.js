// QUIZ FUNCTIONALITY FOR ACCESSIBILITY QUIZ PAGE

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("accessibility-quiz");
  const resetBtn = document.getElementById("reset-btn");

  if (form) {
    form.addEventListener("submit", handleSubmit);
  }

  if (resetBtn) {
    form.addEventListener("reset", handleReset);
  }
});

// QUIZ SUBMISSION HANDLER
function handleSubmit(event) {
  event.preventDefault();

  let score = 0;
  const totalQuestions = 5;

  // Q1
  const q1Input = document.getElementById("q1");
  const q1Feedback = document.getElementById("q1-feedback");
  const q1Answer = q1Input.value.trim().toLowerCase();

  if (!q1Answer) {
    q1Feedback.textContent = "Please enter an answer.";
    q1Feedback.className = "question-feedback";
  } else if (q1Answer === "guidelines") {
    score++;
    q1Feedback.textContent = "Correct!";
    q1Feedback.className = "question-feedback correct";
  } else {
    q1Feedback.textContent =
      'Incorrect. The missing word is "Guidelines."';
    q1Feedback.className = "question-feedback incorrect";
  }

  // Q2 
  score += handleRadioQuestion(
    "q2",
    "main",
    "q2-feedback"
  );

  //  Q3
  score += handleRadioQuestion(
    "q3",
    "aria-label",
    "q3-feedback"
  );

  //  Q4 
  score += handleRadioQuestion(
    "q4",
    "screenreaders",
    "q4-feedback"
  );

  //  Q5 
  score += handleMultiSelectQuestion(
    "q5",
    ["contrast", "keyboard"],
    "q5-feedback"
  );

  // SCORE AND FEEDBACK 
  const totalScoreEl = document.getElementById("total-score");
  const overallResultEl = document.getElementById("overall-result");

  if (totalScoreEl) {
    totalScoreEl.textContent = `You scored ${score} out of ${totalQuestions}.`;
  }

  if (overallResultEl) {
    const percent = (score / totalQuestions) * 100;
    let message = "";

    if (percent === 100) {
      message = "Perfect score! You really understand web accessibility.";
    } else if (percent >= 80) {
      message = "Great job! You have a strong understanding of accessibility.";
    } else if (percent >= 50) {
      message = "Good start. Review the pages and try again to improve.";
    } else {
      message = "Keep studying the site and retake the quiz.";
    }

    overallResultEl.textContent = message;
  }
}

// SINGLEANSWER
function handleRadioQuestion(name, correctValue, feedbackId) {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  const feedback = document.getElementById(feedbackId);

  if (!feedback) return 0;

  if (!selected) {
    feedback.textContent = "Please select an answer.";
    feedback.className = "question-feedback";
    return 0;
  }

  if (selected.value === correctValue) {
    feedback.textContent = "Correct!";
    feedback.className = "question-feedback correct";
    return 1;
  } else {
    feedback.textContent = "Incorrect.";
    feedback.className = "question-feedback incorrect";
    return 0;
  }
}

// MULTI CHECKBOX ANSWER
function handleMultiSelectQuestion(name, correctValues, feedbackId) {
  const feedback = document.getElementById(feedbackId);
  if (!feedback) return 0;

  const checked = Array.from(
    document.querySelectorAll(`input[name="${name}"]:checked`)
  ).map((input) => input.value);

  if (checked.length === 0) {
    feedback.textContent = "Please select at least one option.";
    feedback.className = "question-feedback";
    return 0;
  }

  const correctSet = new Set(correctValues);
  const checkedSet = new Set(checked);

  let allCorrect = checked.length === correctValues.length;

  // VERIFY CHECKED
  checkedSet.forEach((val) => {
    if (!correctSet.has(val)) {
      allCorrect = false;
    }
  });

  if (allCorrect) {
    feedback.textContent = "Correct! You chose all the good practices.";
    feedback.className = "question-feedback correct";
    return 1;
  } else {
    feedback.textContent =
      "Partly correct. Remember: good contrast and keyboard support are best practices.";
    feedback.className = "question-feedback incorrect";
    return 0;
  }
}

// REDO QUIZ
function handleReset() {
  const feedbackEls = document.querySelectorAll(".question-feedback");
  feedbackEls.forEach((el) => {
    el.textContent = "";
    el.className = "question-feedback";
  });

  const totalScoreEl = document.getElementById("total-score");
  const overallResultEl = document.getElementById("overall-result");

  if (totalScoreEl) totalScoreEl.textContent = "";
  if (overallResultEl) overallResultEl.textContent = "";
}
