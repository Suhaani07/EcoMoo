import React, { useState } from 'react';

const AnimalSelection = () => {
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [showAnimation, setShowAnimation] = useState(false);

    const selectAnimal = (animal) => {
        setSelectedAnimal(animal);
    };

    const startAdventure = () => {
        if (selectedAnimal) {
            setShowAnimation(true);
            setTimeout(() => {
                window.location.href = "/introduction";
            }, 4000); 
        }
    };

    return (
        <div className="quiz-container fade-in">
            <h1>Select Your Starter Friend</h1>
            <p>Which adorable friend will accompany you on your adventure?</p>

            <div
                className={`animal-card ${selectedAnimal === 'Hippo' ? 'selected' : ''}`}
                onClick={() => selectAnimal('Hippo')}
            >
                <img src="/hippo.png" alt="Hippo" />
                <div className="animal-name">Hippo</div>
            </div>

            <div
                className={`animal-card ${selectedAnimal === 'Owl' ? 'selected' : ''}`}
                onClick={() => selectAnimal('Owl')}
            >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXCCh1WnfYN6vHN3efQxByFBtFIuK3FSvag&s" alt="Owl" />
                <div className="animal-name">Owl</div>
            </div>

            <div
                className={`animal-card ${selectedAnimal === 'Panda' ? 'selected' : ''}`}
                onClick={() => selectAnimal('Panda')}
            >
                <img src="https://static.vecteezy.com/system/resources/thumbnails/033/494/202/small_2x/cute-chibi-panda-clipart-ai-generative-png.png" alt="Panda" />
                <div className="animal-name">Panda</div>
            </div>

            <button className="start-btn" onClick={startAdventure}>
                Begin the Adventure!
            </button>

            {showAnimation && (
                <div className="full-screen-animation">
                    {[...Array(20)].map((_, i) => (
                        <div className={`leaf leaf-${i}`} key={i} />
                    ))}
                    <div className="selected-animal">
                        <img src={`/${selectedAnimal.toLowerCase()}.png`} alt={selectedAnimal} />
                    </div>
                </div>
            )}

            <style jsx>{`
                /* Main styling */
                body {
                    background: linear-gradient(135deg, #d3e6b1, #b5fffc);
                    color: #444;
                    font-family: 'Comic Sans MS', 'Arial', sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    margin: 0;
                    text-align: center;
                    overflow: hidden;
                }

                .quiz-container {
                    background: rgba(255, 255, 255, 0.85);
                    padding: 2em;
                    border-radius: 20px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
                    max-width: 600px;
                    position: relative;
                }

                h1 {
                    font-size: 2.5em;
                    margin-bottom: 0.3em;
                    color: #5a8a31;
                    font-weight: bold;
                }

                p {
                    font-size: 1.2em;
                    color: #5a5a5a;
                    margin-bottom: 1.5em;
                }

                .animal-card {
                    background: #ffffff;
                    border: 2px solid #a8d99f;
                    border-radius: 15px;
                    padding: 1em;
                    margin: 0.5em;
                    transition: transform 0.3s, box-shadow 0.3s;
                    cursor: pointer;
                    width: 130px;
                    display: inline-block;
                }

                .animal-card.selected {
                    border-color: #5a8a31;
                    background-color: #d3e6b1;
                    transform: scale(1.1);
                    box-shadow: 0 0 10px rgba(169, 217, 159, 0.8);
                }

                .animal-card img {
                    width: 80px;
                    height: 80px;
                }

                .animal-name {
                    font-size: 1.3em;
                    color: #2b3a1e;
                    font-weight: bold;
                }

                .start-btn {
                    padding: 0.8em 1.5em;
                    font-size: 1em;
                    font-weight: bold;
                    color: #ffffff;
                    background: #65a30d;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    margin-top: 1.5em;
                    transition: background 0.3s;
                }

                .start-btn:hover {
                    background: #7dd3a8;
                }

                .fade-in {
                    animation: fadeIn 1.5s ease-in forwards;
                }

                @keyframes fadeIn {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }

                /* Full-screen animation */
                .full-screen-animation {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #b5e4a8, #87ceeb);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    z-index: 1000;
                }

                .leaf {
                    width: 20px;
                    height: 20px;
                    background-color: #8fbc8f;
                    border-radius: 50%;
                    position: absolute;
                    animation: swirl 3s ease-in-out infinite;
                }

                /* Multiple leaves with staggered delays */
                ${[...Array(20)].map((_, i) => `
                    .leaf-${i} {
                        top: ${Math.random() * 100}vh;
                        left: ${Math.random() * 100}vw;
                        animation-delay: ${i * 0.15}s;
                        transform-origin: center;
                    }
                `).join('')}

                /* Swirling motion */
                @keyframes swirl {
                    0% { transform: scale(0.5) translate(0, 0) rotate(0deg); }
                    50% { transform: scale(1) translate(-50%, -50%) rotate(180deg); }
                    100% { transform: scale(1.5) translate(0, 0) rotate(360deg); }
                }

                /* Centered selected animal */
                .selected-animal {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    animation: popUp 2s ease forwards 3s;
                }

                .selected-animal img {
                    width: 100px;
                    height: 100px;
                }

                /* Pop-up effect for selected animal */
                @keyframes popUp {
                    0% { transform: translate(-50%, -50%) scale(0); }
                    100% { transform: translate(-50%, -50%) scale(1); }
                }
            `}</style>
        </div>
    );
};

export default AnimalSelection;
