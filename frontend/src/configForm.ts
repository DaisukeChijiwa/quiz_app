import type { Genre } from "./questions";

/**
 * 設定フォームのセットアップ。
 * ユーザーが[クイズ開始]を押した時、ジャンルと難易度を渡して onStart を呼び出す。
 */
export function setupConfigForm(onStart: (genre: string, difficulty: number) => void): void {
    const startButton = document.getElementById("start-button");
    const genreSelect = document.getElementById("genre-select") as HTMLSelectElement;
    const difficultySelect = document.getElementById("difficulty-select") as HTMLSelectElement;

    if (!startButton || !genreSelect || !difficultySelect) {
        console.error("フォーム要素が見つかりませんでした。");
        return;
    }

    startButton.addEventListener("click", () => {
        const selectedGenre = genreSelect.value;
        const selectedDifficulty = Number(difficultySelect.value);
        onStart(selectedGenre, selectedDifficulty);
    })
}