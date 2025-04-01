import { Question } from "./questions.js";

const questionEl = document.getElementById("question")!;
const choicesEl = document.getElementById("choices")!;
const explanationEl = document.getElementById("explanation")!;
const nextButton = document.getElementById("next-button")! as HTMLButtonElement;

export function renderQuiz(
    q: Question,
    onAnswer: (selectedIndex: number) => void
): void {
    questionEl.textContent = q.question;
    choicesEl.innerHTML = "";
    explanationEl.innerHTML = "&nbsp;";
    nextButton.disabled = true; // 初期状態では無効
    nextButton.classList.add("disabled"); // 初期状態では薄く表示

    q.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => {
            // 全ての選択肢ボタンを無効化
            choicesEl.querySelectorAll("button").forEach((b) => (b.disabled = true));

            // 正解・不正解のラベルを付ける
            choicesEl.querySelectorAll("button").forEach((b, i) => {
                if (i === q.correctIndex) {
                    b.classList.add("correct");
                } else {
                    b.classList.add("incorrect");
                }
            });

            explanationEl.textContent = q.explanation;
            explanationEl.classList.remove("hidden");

            // 「次へ」ボタンを有効化
            nextButton.disabled = false;
            nextButton.classList.remove("disabled"); // 色を濃くする
            nextButton.onclick = () => {
                onAnswer(index);
            };
        };
        choicesEl.appendChild(button);
    });
}

export function showExplanation(text: string) {
    explanationEl.textContent = text;
}

export function activateNext(onNext: () => void) {
    nextButton.disabled = false;
    nextButton.classList.remove("disabled");
    nextButton.onclick = onNext;
}

export function showResult(score: number, total: number): void {
    questionEl.textContent = `スコア： ${score} / ${total}`;
    choicesEl.innerHTML = "";
    explanationEl.innerHTML = "お疲れ様でした！";
    nextButton.style.display = "none";
}