let score = 0;

function checkAnswer() {
    let answer = document.getElementById("answer").value;

    if (answer.trim() === "") {
        document.getElementById("result").innerText = "Please enter an answer";
        return;
    }

    if (answer.toLowerCase() === "programming language") {
        score++;
        document.getElementById("result").innerText = "Correct Answer!";
    } else {
        document.getElementById("result").innerText = "Wrong Answer!";
    }

    localStorage.setItem("quizScore", score);

    document.getElementById("score").innerText = "Score: " + score;
}