import { Question, Genre, sampleQuestions } from "./questions.js";

export function filterQuestions(genre: string, difficulty: number): Question[] {
    return sampleQuestions.filter((q) => {
        const genreMatch = genre === "all" || q.genre.includes(genre as Genre);
        const difficultyMatch = isNaN(difficulty) || q.difficulty === difficulty;
        return genreMatch && difficultyMatch;
    });
}