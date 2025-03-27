console.log("main.ts loaded");

async function loadQuiz(): Promise<void> {
    console.log("Fetching quiz...");
    const res = await fetch("http://127.0.0.1:5000/api/quiz");
    const data = await res.json();

    console.log("Received:", data);

    const questionEl = document.getElementById("question")!;
    questionEl.textContent = data.question;

    const choicesList = document.getElementById("choices")!;
    choicesList.innerHTML = "";

    data.choices.forEach((choices: string, index: number) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = choices;

        button.onclick = () => {
            if (index == data.correct_index) {
                alert("正解！");
            } else {
                alert("不正解！");
            }
            loadQuiz();
        };

        li.appendChild(button);
        choicesList.appendChild(li);
    });
}

loadQuiz();