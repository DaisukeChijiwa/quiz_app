export interface Question {
    question: string;
    choices: string[];
    correctIndex: number;
    explanation: string;
    difficulty: number;
    genre: Genre[];
}

export type Genre = "python" | "statistics" | "data_science" | "sql" | "rust";
export const GENRES: Genre[] = ["python", "statistics", "data_science", "sql", "rust"];

export const sampleQuestions: Question[] = [
    {
        question: "Pythonでリストを逆順にするメソッドはどれ？",
        choices: ["reverse()", "flip()", "sort()", "invert()"],
        correctIndex: 0,
        explanation: "reverse()はリスト自身をインプレースで逆順にするメソッドです。",
        difficulty: 1,
        genre:["python"]
    },
    {
        question: "期待値を表す記号はどれ？",
        choices: ["E[X]", "V(X)", "μ", "σ^2"],
        correctIndex: 0,
        explanation: "期待値はE[X]と表されます。V(X)は分散、μは母平均、σ^2も分散です。",
        difficulty: 1,
        genre: ["data_science", "statistics"]
    },
    {
        question: "pandasでCSVを読み込む方法はどれ？",
        choices: ["read_csv()", "load_csv()", "import_csv()", "download_csv()"],
        correctIndex: 0,
        explanation: "read_csv()には引数としてファイル名を含めた相対パスを渡します。",
        difficulty: 2,
        genre: ["data_science", "python"]
    },
    {
        question: "リスト内包表記で0から9までの偶数だけを含むリストを生成する式は？",
        choices: [
            "[x for x in range(10) if x % 2 == 0]",
            "[x for x in range(10) if x % 2]",
            "[x for x in range(10) and x % 2 == 0]",
            "[x in range(10) if x % 2 == 0]"
        ],
        correctIndex: 0,
        explanation: "Pythonのリスト内包表記では`if`を使って条件付き要素を絞れる。",
        difficulty: 2,
        genre: ["python", "data_science"]
    },
    {
        question: "95%信頼区間の意味として正しいのは？",
        choices: [
            "母平均がその区間内にある確率は95%である",
            "標本平均がその区間に入る確率は95%である",
            "区間を多数回作ったとき、その95%が母平均を含む",
            "母平均は常に信頼区間の中心にある"
        ],
        correctIndex: 2,
        explanation: "信頼区間の定義は、同じ手法で区間を多数作った時に母数が含まれる割合",
        difficulty: 2,
        genre: ["statistics"]
    },
    {
        question: "次のうち、Rustで所有権(ownership)に関して誤っているのは？",
        choices: [
            "所有権は変数がスコープを抜けた時に自動で解放される",
            "値を関数に渡すと所有権も移動することがある",
            "同じ変数を複数のスレッドで自由に共有できる",
            "所有権のある変数はmutableにしないと変更できない"
        ],
        correctIndex: 2,
        explanation: "Rustでは安全性のため、スレッド間共有は明示的で制限がある",
        difficulty: 3,
        genre: ["rust"]
    },
    {
        question: "交差検証(cross-validation)の主な目的は？",
        choices: [
            "訓練データの精度を上げる",
            "モデルのバイアスを増やす",
            "未知データへの汎化性能を評価する",
            "予測結果を可視化する"
        ],
        correctIndex: 2,
        explanation: "交差検証は、過学習を防ぎながら汎化性能を評価するために使われる",
        difficulty: 3,
        genre: ["data_science", "statistics"]
    }
]