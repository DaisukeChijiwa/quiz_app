import { Question } from "./questions.js";

const questionEl = document.getElementById("question")!;
const choicesEl = document.getElementById("choices")!;
const explanationEl = document.getElementById("explanation")!;
const nextButton = document.getElementById("next-button")! as HTMLButtonElement;

export function renderQuiz(q: Question, onAnswer: (selectedIndex: number) => void
  ): void {
    questionEl.textContent = q.question;
    choicesEl.innerHTML = "";
    explanationEl.innerHTML = "&nbsp;";
    nextButton.disabled = true;
    nextButton.classList.remove("enabled");

    q.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => onAnswer(index);
        choicesEl.appendChild(button);
    });
}

export function showExplanation(text: string) {
    explanationEl.textContent = text;
}

export function activateNext(onNext: () => void) {
    nextButton.disabled = false;
    nextButton.classList.add("enabled");
    nextButton.onclick = onNext;
}

export function showResult(score: number, total: number): void {
    questionEl.textContent = `スコア： ${score} / ${total}`;
    choicesEl.innerHTML = "";
    explanationEl.innerHTML = "お疲れ様でした！";
    nextButton.style.display = "none";
}