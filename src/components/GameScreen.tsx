import React from "react";

interface GameScreenProps {
    score: number;
    wrongScore: number;
    timeLeft: number;
    question: { num1: number; num2: number; operation: string };
    answer: string;
    feedback: string;
    onAnswerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAnswerSubmit: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({
    score,
    wrongScore,
    timeLeft,
    question,
    answer,
    feedback,
    onAnswerChange,
    onAnswerSubmit,
}) => {
    return (
        <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg">
            <h1 className="text-4xl mb-4">Matrix Math Game</h1>
            <p className="mb-4">Score: {score} ✅</p>
            <p className="mb-4">Wrong: {wrongScore} ❌</p>
            <p className="mb-4">Time Left: {timeLeft}s ⏰</p>
            <p className="mb-4">
                What is {question.num1} {question.operation} {question.num2}?
            </p>
            <input
                type="number"
                step="0.01"
                value={answer}
                onChange={onAnswerChange}
                className="text-black p-2"
            />
            <button
                onClick={onAnswerSubmit}
                className="bg-green-500 text-black p-2 ml-2 rounded glassmorphism"
            >
                Submit
            </button>
            {feedback && <p className="mt-4">{feedback}</p>}
        </div>
    );
};

export default GameScreen;