import React from "react";

interface SplashScreenProps {
    onStartGame: () => void;
    difficulty: string;
    onDifficultyChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    feedback: string;
}

const SplashScreen: React.FC<SplashScreenProps> = ({
    onStartGame,
    difficulty,
    onDifficultyChange,
    feedback,
}) => {
    return (
        <div className="relative z-10 text-center">
            <h1 className="text-4xl mb-4">Welcome to the Matrix</h1>
            <label className="block mb-4">
                Select Difficulty:
                <select
                    value={difficulty}
                    onChange={onDifficultyChange}
                    className="ml-2 p-2 bg-black text-green-500 border border-green-500"
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </label>
            <button
                onClick={onStartGame}
                className="bg-green-500 text-black p-4 rounded glassmorphism"
            >
                Enter Game
            </button>
            {feedback && <p className="mt-4">{feedback}</p>}
        </div>
    );
};

export default SplashScreen;