"use strict";

const questions = document.querySelectorAll(".question");

const showQuestion = questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    question.classList.toggle("show-text");
  });
});
