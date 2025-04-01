import { Question } from "./questions.js";
import { sampleQuestions } from "./questions.js";

let currentIndex = 0;

export function getCurrentQuiz(): Question | null {
    if (currentIndex >= sampleQuestions.length) return null;
    return sampleQuestions[currentIndex];
}

export function advanceQuiz() {
    currentIndex++;
}

export function resetQuiz() {
    currentIndex = 0;
}

export function getScore() {
    return {
        total: sampleQuestions.length,
        current: currentIndex
    };
}