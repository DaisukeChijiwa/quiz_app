console.log("main.ts loaded");

interface Question {
    question: string;
    choices: string[];
    correctIndex: number;
}

const sampleQuestions: Question[] = [
    {
        question: "Pythonでリストを逆順にするメソッドはどれ？",
        choices: ["reverse()", "flip()", "sort()", "invert()"],
        correctIndex: 0
    },
    {
        question: "期待値を表す記号はどれ？",
        choices: ["E[X]", "V(X)", "μ", "σ^2"],
        correctIndex: 0
    },
    {
        question: "pandasでCSVを読み込む方法はどれ？",
        choices: ["read_csv()", "load_csv()", "import_csv()", "download_csv()"],
        correctIndex: 0
    }
]

let currentIndex = 0;
let correctCount = 0;

function loadHardCodedQuiz(): void {
    if (currentIndex >= sampleQuestions.length) {
        showResult();
        return;
    }

    const q = sampleQuestions[currentIndex];
    const questionEl = document.getElementById("question")!;
    const choicesEl = document.getElementById("choices")!;

    questionEl.textContent = `Q${currentIndex + 1}: ${q.question}`;
    choicesEl.innerHTML = "";

    q.choices.forEach((choice, index) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = choice;

        button.onclick = () => {
            if (index === q.correctIndex) {
                correctCount++;
                alert("正解！");
            } else {
                alert("不正解！");
            }

            currentIndex++;
            loadHardCodedQuiz();
        };

        li.appendChild(button);
        choicesEl.appendChild(li);
    });
}

function showResult(): void {
    const container = document.getElementById("quiz-container")!;
    container.innerHTML = `
      <h2>終了！</h2>
      <p>正解数： ${correctCount} / ${sampleQuestions.length}</p>
      <p>正解率： ${(correctCount / sampleQuestions.length * 100).toFixed(1)}％</p>
      <button id="retry-btn">もう一度挑戦する</button>
    `;

    const retryBtn = document.getElementById("retry-btn")!;
    retryBtn.onclick = () => {
        currentIndex = 0;
        correctCount = 0;
        container.innerHTML = `
          <p id="question"></p>
          <ul id="choices"></ul>
        `;
        loadHardCodedQuiz();
    };
}

loadHardCodedQuiz();

// async function loadQuiz(): Promise<void> {
//     console.log("Fetching quiz...");
//     const res = await fetch("http://127.0.0.1:5000/api/quiz");
//     const data = await res.json();
// 
//     console.log("Received:", data);
// 
//     const questionEl = document.getElementById("question")!;
//     questionEl.textContent = data.question;
// 
//     const choicesList = document.getElementById("choices")!;
//     choicesList.innerHTML = "";
// 
//     data.choices.forEach((choices: string, index: number) => {
//         const li = document.createElement("li");
//         const button = document.createElement("button");
//         button.textContent = choices;
// 
//         button.onclick = () => {
//             if (index == data.correct_index) {
//                 alert("正解！");
//             } else {
//                 alert("不正解！");
//             }
//             loadQuiz();
//         };
// 
//         li.appendChild(button);
//         choicesList.appendChild(li);
//     });
// }
// 
// loadQuiz();