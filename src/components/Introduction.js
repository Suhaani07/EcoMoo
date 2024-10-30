import React, { useState, useEffect } from 'react';

const Introduction = ({ selectedAnimal }) => {
    const [currentDialogue, setCurrentDialogue] = useState(0);
    const [showAccessory, setShowAccessory] = useState(null);
    const [showPlant, setShowPlant] = useState(null);
    const [jumping, setJumping] = useState(false); // State to control jumping animation
    const [hasJumpedOnce, setHasJumpedOnce] = useState(false); // State to track if hippo has jumped

    const dialogues = [
        `Hi! I'm your new friend, ${selectedAnimal}! Let’s make the world greener together!`,
        `We'll do simple, fun tasks to help the environment. You can even earn awesome rewards!`,
        `For example: Water a plant today, take a picture, and upload it. Voila! I get a new dress!`,
        `Complete 30-day streaks, and you’ll see me in VR! And guess what? We can even chat daily!`,
        `Let’s make the Earth a greener, happier place. Ready to start your journey with me?`
    ];

    useEffect(() => {
        if (currentDialogue === 0 || !hasJumpedOnce) {
            // Start jumping animation when the component mounts
            const interval = setInterval(() => {
                setJumping((prev) => !prev); // Toggle jumping state every 500ms
            }, 500);

            // Set hasJumpedOnce to true after the first jump
            setHasJumpedOnce(true);

            // Clear the interval when the component unmounts
            return () => clearInterval(interval);
        }
    }, [currentDialogue,hasJumpedOnce]);

    useEffect(() => {
        if (currentDialogue === 2) {
            setShowAccessory("dress");
            setJumping(true); // Start jumping animation
            setTimeout(() => setJumping(false), 1000); // Stop jumping after 1 second
        } else if (currentDialogue === 4) {
            setShowAccessory(null); // Remove sunglasses for the last dialogue
        } else {
            setShowAccessory(null);
        }
    }, [currentDialogue]);

    useEffect(() => {
        if (currentDialogue === 1) {
            setShowPlant("plant");
        } else {
            setShowPlant(null);
        }
    }, [currentDialogue]);

    const nextDialogue = () => {
        if (currentDialogue < dialogues.length - 1) {
            setCurrentDialogue(currentDialogue + 1);
            setJumping(false); // Stop jumping when "Next" is pressed
        }
    };

    return (
        <div className="introduction-container">
            {/* Background Tree Branches */}
            <div className="branches">
                {[...Array(10)].map((_, index) => (
                    <img 
                        key={index} 
                        src="https://images.vexels.com/content/265169/preview/autumn-tree-branch-to-the-left-bb9387.png" // Branch image URL
                        alt="Autumn Branch" 
                        className="branch" 
                        style={{ transform: `rotate(${Math.random() * 30 - 15}deg) translateX(${Math.random() * 50 - 25}px)` }} 
                    />
                ))}
                {/* Falling Leaves */}
                {[...Array(15)].map((_, index) => (
                    <img 
                        key={index} 
                        src="https://images.vexels.com/content/265182/preview/cute-fallen-autumn-leaf-7c50f9.png" // Leaf image URL
                        alt="Falling Leaf" 
                        className="leaf" 
                        style={{ 
                            animationDelay: `${Math.random() * 3}s`, // Random delay for falling effect
                            left: `${Math.random() * 100}%`, // Randomize horizontal position across the screen
                            top: `${Math.random() * 50 + 10}%`, // Randomize starting vertical position
                        }} 
                    />
                ))}
            </div>

            <div className="chat-box">
                <p>{dialogues[currentDialogue]}</p>
                <button className="next-btn" onClick={nextDialogue}>
                    {currentDialogue === dialogues.length - 1 ? "Let's Go!" : "Next"}
                </button>
                {/* Show image on VR dialogue */}
                {currentDialogue === 3 && (
                    <img 
                        src="https://beebom.com/wp-content/uploads/2020/05/Pokemon-go-feat...jpg?quality=75&strip=all" 
                        alt="VR" 
                        className="vr-image" 
                    />
                )}
                {/* Add new image for VR dialogue at the bottom left corner */}
                {currentDialogue === 3 && (
                    <img 
                        src="https://i.pinimg.com/736x/ab/c3/3e/abc33e39519418bda7c3d069f2e6e0fb.jpg" 
                        alt="VR Image" 
                        className="vr-bottom-left-image" 
                    />
                )}
            </div>
            {showPlant === "plant" && (
                    <img 
                        src="https://png.pngtree.com/png-vector/20220816/ourmid/pngtree-cute-plant-png-kawaii-clipart-free-download-png-image_6111627.png"
                        alt="Plant" 
                        className="plant1" 
                    />
                )}

{showPlant === "plant" && (
                    <img 
                        src="https://png.pngtree.com/png-vector/20220816/ourmid/pngtree-cute-plant-png-kawaii-clipart-free-download-png-image_6111627.png"
                        alt="Plant" 
                        className="plant2" 
                    />
                )}
            {/* Displaying Animal and Accessories */}
            <div className="animal-display">
                <img 
                    src={currentDialogue === 4 ? '/hippo2.png' : `/${selectedAnimal.toLowerCase()}.png`} 
                    alt={selectedAnimal} 
                    className={`animal-image ${jumping ? 'jump' : ''}`} 
                />
                {showAccessory === "dress" && (
                    <img 
                        src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-tutu-skirt-clipart-girl-s-pink-tutu-with-flower-designs-cartoon-png-image_12150455.png" 
                        alt="Dress" 
                        className="accessory dress" 
                    />
                )}


                
                {/* Display the text near the animal */}
                {showAccessory === "dress" && <p className="jumping-text">I want a dress!</p>}
            </div>

            <style jsx>{`
                /* Container Styling */
                .introduction-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    background: linear-gradient(to bottom, #a8e6cf, #dcedc1);
                    text-align: center;
                    padding: 2em;
                    position: relative;
                    overflow: hidden;
                }

                /* Branches Styling */
                .branches {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    display: flex;
                    justify-content: space-between;
                    pointer-events: none;
                }

                .branch {
                    width: 50px; /* Adjust size as needed */
                    height: auto;
                    opacity: 0.7; /* Add slight transparency */
                }

                /* Leaf Styling */
                .leaf {
                    width: 20px; /* Adjust size as needed */
                    height: auto;
                    position: absolute;
                    animation: fall 5s linear infinite;
                }

                /* Animating Leaves */
                @keyframes fall {
                    0% {
                        transform: translateY(0) translateX(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(300px) translateX(0) rotate(360deg);
                        opacity: 0;
                    }
                }

                /* Jumping Animation */
                .animal-image.jump {
                    animation: jump 0.5s ease-in-out infinite; /* Infinite jumping */
                }

                @keyframes jump {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                /* Chat Bubble Styling */
                .chat-box {
                    background: #fff;
                    border-radius: 15px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                    padding: 2em;
                    max-width: 400px;
                    font-size: 1.2em;
                    margin: 1em 0;
                    animation: fadeIn 1s ease-in;
                    position: relative; /* Make it relative for absolute positioning of the images */
                }

                .chat-box p {
                    font-size: 1.2em;
                    color: #4a7c59;
                    margin-bottom: 1em;
                }

                .jumping-text {
                    color: #d5006d; /* Color for the jumping text */
                    font-weight: bold;
                    font-size: 1.2em;
                    margin-top: 0.5em;
                }

                .next-btn {
                    background-color: #4a7c59;
                    color: #fff;
                    padding: 0.7em 1.5em;
                    border: none;
                    border-radius: 12px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: background 0.3s;
                }

                .next-btn:hover {
                    background-color: #66a27a;
                }

                /* VR Image Styling */
                .vr-image {
                    position: absolute;
                    width: 200px; /* Increased size for the circular image */
                    height: 200px; /* Increased size for the circular image */
                    border-radius: 50%; /* Make it circular */
                    right: -180px; /* Position it off to the right */
                    top: -20%; /* Position it at the middle */
                    object-fit: cover; /* Ensure the image fits well */
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Optional shadow for effect */
                }
                
                

                /* Bottom Left Image Styling */
                .vr-bottom-left-image {
                    position: absolute;
                    width: 170px; /* Size of the image */
                    height: 170px; /* Size of the image */
                    border-radius: 50%; /* Make it circular */
                    left: -100px; /* Position it at the bottom left */
                    bottom: -100px; /* Position it at the bottom */
                    object-fit: cover; /* Ensure the image fits well */
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Optional shadow for effect */
                }

                /* Accessory Image Styling */
                .accessory {
                    position: absolute;
                    width: 70px; /* Adjust size to be more appropriate */
                    height: auto;
                    bottom: -10; /* Position it at the bottom */
                    left: 50%;
                    transform: translateX(-50%); /* Center it under the hippo */
                    z-index: 1; /* Ensure it's above the hippo */
                }

                .plant1 {
                    position: absolute;
                    width: 170px; /* Adjust size to be more appropriate */
                    height: auto;
                    bottom: -1; /* Position it at the bottom */
                    left: 90%;
                    top:20%;
                    transform: translateX(-50%); /* Center it under the hippo */
                    z-index: 1; /* Ensure it's above the hippo */
                }
                
                .plant2 {
                    position: absolute;
                    width: 170px; /* Adjust size to be more appropriate */
                    height: auto;
                    bottom: -1; /* Position it at the bottom */
                    left: 10%;
                    top:70%;
                    transform: translateX(-50%); /* Center it under the hippo */
                    z-index: 1; /* Ensure it's above the hippo */
                }



                /* Animations */
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default Introduction;
