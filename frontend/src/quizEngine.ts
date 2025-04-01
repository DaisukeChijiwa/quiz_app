import type { Question } from "./questions";

export class QuizEngine {
    private questions: Question[];
    private index: number = 0;
    private correctCount: number = 0;

    constructor(questions: Question[]) {
        this.questions = questions;
    }

    getCurrentQuestion(): Question {
        return this.questions[this.index];
    }

    answer(isCorrect: boolean): void {
        if (isCorrect) {
            this.correctCount++;
        }
        this.index++;
    }

    isFinished(): boolean {
        return this.index >= this.questions.length;
    }

    getScore(): { correct: number; total: number } {
        return {
            correct: this.correctCount,
            total: this.questions.length,
        };
    }

    reset(): void {
        this.index = 0;
        this.correctCount = 0;
    }
}