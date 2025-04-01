export interface Question {
    question: string;
    choices: string[];
    correctIndex: number;
    explanation: string;
}

export const sampleQuestions: Question[] = [
    {
        question: "Pythonでリストを逆順にするメソッドはどれ？",
        choices: ["reverse()", "flip()", "sort()", "invert()"],
        correctIndex: 0,
        explanation: "reverse()はリスト自身をインプレースで逆順にするメソッドです。"
    },
    {
        question: "期待値を表す記号はどれ？",
        choices: ["E[X]", "V(X)", "μ", "σ^2"],
        correctIndex: 0,
        explanation: "期待値はE[X]と表されます。V(X)は分散、μは母平均、σ^2も分散です。"
    },
    {
        question: "pandasでCSVを読み込む方法はどれ？",
        choices: ["read_csv()", "load_csv()", "import_csv()", "download_csv()"],
        correctIndex: 0,
        explanation: "read_csv()には引数としてファイル名を含めた相対パスを渡します。"
    }
]