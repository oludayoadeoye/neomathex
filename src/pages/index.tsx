import { useState, useEffect } from "react";
import MatrixRain from "../components/MatrixRain";
import NavBar from "../components/NavBar";
import SplashScreen from "../components/SplashScreen";
import GameScreen from "../components/GameScreen";

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);
  const [question, setQuestion] = useState(generateQuestion("easy"));
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [timeLeft, setTimeLeft] = useState(10);
  const [difficulty, setDifficulty] = useState("easy");

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleWrongAnswer("⏰ Time's up! Next question.");
    }
  }, [gameStarted, timeLeft, difficulty]);

  function generateQuestion(difficulty: string) {
    let num1, num2;
    switch (difficulty) {
      case "easy":
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        break;
      case "medium":
        num1 = Math.floor(Math.random() * 50) + 1;
        num2 = Math.floor(Math.random() * 50) + 1;
        break;
      case "hard":
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * 100) + 1;
        break;
    }
    const operations = ["+", "-", "*", "/"];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let correctAnswer;

    switch (operation) {
      case "+":
        correctAnswer = num1 + num2;
        break;
      case "-":
        correctAnswer = num1 - num2;
        break;
      case "*":
        correctAnswer = num1 * num2;
        break;
      case "/":
        correctAnswer = parseFloat((num1 / num2).toFixed(2));
        break;
    }

    return { num1, num2, operation, correctAnswer };
  }

  function handleStartGame() {
    setGameStarted(true);
    setScore(0);
    setWrongScore(0);
    setQuestion(generateQuestion(difficulty));
    setTimeLeft(10);
    setAnswer("");
    setFeedback("");
  }

  function handleAnswerSubmit() {
    if (parseFloat(answer) === question.correctAnswer) {
      setScore(score + 1);
      setFeedback("✅ Correct!");
    } else {
      handleWrongAnswer("❌ Wrong answer. Try again!");
    }
    setQuestion(generateQuestion(difficulty));
    setTimeLeft(10);
    setAnswer("");
  }

  function handleWrongAnswer(message: string) {
    setWrongScore(wrongScore + 1);
    setFeedback(message);
    if (wrongScore + 1 >= 3) {
      setGameStarted(false);
      setFeedback("Game Over! You have reached 3 wrong attempts.");
    }
  }

  function handleDifficultyChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setDifficulty(event.target.value);
  }

  return (
    <div>
      <NavBar />
      <main className="relative flex min-h-screen flex-col items-center justify-center bg-black text-green-500">
        <MatrixRain />
        <div className="relative z-10 text-center">
          {!gameStarted ? (
            <SplashScreen
              onStartGame={handleStartGame}
              difficulty={difficulty}
              onDifficultyChange={handleDifficultyChange}
              feedback={feedback}
            />
          ) : (
            <GameScreen
              score={score}
              wrongScore={wrongScore}
              timeLeft={timeLeft}
              question={question}
              answer={answer}
              feedback={feedback}
              onAnswerChange={(e) => setAnswer(e.target.value)}
              onAnswerSubmit={handleAnswerSubmit}
            />
          )}
        </div>
      </main>
    </div>
  );
}
