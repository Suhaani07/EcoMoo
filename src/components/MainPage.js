import React, { useState } from 'react';

const MainPage = () => {
    const [showThought, setShowThought] = useState(false);

    const tasks = [
        { task: "🌱 Upload reel of watering a plant", reward: "Dress for hippo" },
        { task: "🗑️ Pick up a roadside trash, put it in a dustbin, and upload its pic", reward: "Know what hippo is thinking" },
        { task: "🌳 Take a selfie with a tree", reward: "Hippo's tree-hugging outfit" },
        { task: "♻️ Reuse a plastic bottle creatively", reward: "Eco-friendly hat for hippo" },
        { task: "🔥 30-day streak mission", reward: "AR Hippo or Choose a New Friend", arImage: "https://media.licdn.com/dms/image/C5612AQGQyvqsHNYTtA/article-cover_image-shrink_600_2000/0/1520171585651?e=2147483647&v=beta&t=o1QsF1nggYm5k8Ome6TV6mWcKmmfWBKG3S6BWbxWp1Y" }
    ];

    const reels = [
        { imageUrl: "https://bel-india.in/wp-content/uploads/2023/07/ground-water1.png", hashtags: "#SaveWater #EcoFriendly", animation: "zoom-in" },
        { imageUrl: "https://bel-india.in/wp-content/uploads/2023/07/rainwater-harvesting-pond1.png", hashtags: "#RainwaterHarvesting #Sustainability", animation: "zoom-out" },
        { imageUrl: "https://tripjive.com/wp-content/uploads/2024/01/Sustainable-and-eco-friendly-activities-available-in-Mumbai.jpg", hashtags: "#EcoFriendly #MumbaiActivities", animation: "rotate" },
        { imageUrl: "https://thumbs.dreamstime.com/b/roadside-trash-pickup-retired-man-picking-up-along-rural-road-64265114.jpg", hashtags: "#CleanEarth #NoLitter", animation: "zoom-in" },
        { imageUrl: "https://i.redd.it/the-large-flowerpot-on-the-roadside-has-a-water-plant-that-v0-nplfk5q5obzb1.jpg?width=3024&format=pjpg&auto=webp&s=453cc5092d0ac2e32c341239f193d9a695accf83", hashtags: "#WaterPlants #UrbanGreenery", animation: "zoom-out" },
        { imageUrl: "https://randomwalks.blog/wp-content/uploads/2020/06/writing_with_eevee-1.jpg", hashtags: "#ARFriendUnlocked", animation: "zoom-in" },
        { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmI0Ap5cvcRPdIlgH4gaUvOfACsTegQtnGiCjSWQu5v8ltcvZVT7jfx5qLNn8wIUWv6T8&usqp=CAU", hashtags: "#PlantingTrees", animation: "rotate" },
        { imageUrl: "https://bel-india.in/wp-content/uploads/2023/07/ground-water1.png", hashtags: "#SaveWater #EcoFriendly", animation: "zoom-in" },
        { imageUrl: "https://bel-india.in/wp-content/uploads/2023/07/rainwater-harvesting-pond1.png", hashtags: "#RainwaterHarvesting #Sustainability", animation: "zoom-out" },
  ];

    return (
        <div className="minpage-container">
            {/* Left Panel */}
            <div className="left-panel">
            <div className="falling-leaves">
            {/* You can add more leaves by copying the divs below */}
            <div className="leaf leaf1"></div>
            <div className="leaf leaf2"></div>
            <div className="leaf leaf3"></div>
            <div className="leaf leaf4"></div>
            <div className="leaf leaf5"></div>
        </div>
                <div className="profile">
                    <div
                        className="profile-picture-wrapper"
                        onMouseEnter={() => setShowThought(true)}
                        onMouseLeave={() => setShowThought(false)}
                    >
                        <img
                            src="hippo.png"
                            alt="Hippo"
                            className="profile-picture"
                            title="Hippo is thinking about a cleaner planet!"
                        />
                        {showThought && (
                            <div className="thought-bubble">
                                🌍 "Let's make the world greener, Suhaani!"
                            </div>
                        )}
                    </div>
                    <h2>Suhaani</h2>
                    <h3>Tasks</h3>
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={index} className="task-item">
                                <p>{task.task}</p>
                                <span className="reward">
                                    🎁 Reward: {task.reward}
                                    {task.arImage && <img src={task.arImage} alt="AR Hippo Icon" className="ar-hippo-icon" />}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right Panel - Snapchat-style Reels */}
            <div className="right-panel">
                <div className="reels-grid">
                    {reels.map((reel, index) => (
                        <div key={index} className={`reel ${reel.animation}`}>
                            <img src={reel.imageUrl} alt="Reel" />
                            <p className="hashtags">{reel.hashtags}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .minpage-container {
                    display: grid;
                    grid-template-columns: 30% 70%;
                    height: auto;
                    overflow: hidden;
                    background: linear-gradient(to bottom, #f3f9f1, #d1e8e4);
                    font-family: Arial, sans-serif;
                    position: relative;
                }

                .left-panel {
                    background-color: #fff;
                    border-right: 2px solid #c3e5d2;
                    padding: 1.5em;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    box-shadow: 3px 0 5px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    position: relative;
                }

                .leaves {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    background: url('/https://images.vexels.com/content/265182/preview/cute-fallen-autumn-leaf-7c50f9.png') repeat-y;
                    background-size: contain;
                    animation: fall 10s infinite linear;
                    opacity: 0.5;
                }

                @keyframes fall {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }

                .profile {
                    text-align: center;
                    width: 100%;
                    z-index: 1;
                }

                .profile-picture-wrapper {
                    position: relative;
                    display: inline-block;
                }

                .profile-picture {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    border: 3px solid #f7b6a3;
                    margin-bottom: 0.5em;
                    transition: transform 0.3s;
                }

                .profile-picture-wrapper:hover .profile-picture {
                    transform: scale(1.1);
                }

                .thought-bubble {
                    position: absolute;
                    top: -10px;
                    left: 130px;
                    width: 140px;
                    background: #daf6e2;
                    border: 2px solid #a2d4b8;
                    padding: 10px;
                    border-radius: 10px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    font-size: 0.9em;
                    color: #5a8e7f;
                }

                h2 {
                    font-size: 1.5em;
                    color: #4a7c59;
                }

                h3 {
                    font-size: 1.2em;
                    color: #6c9471;
                    margin-top: 1em;
                    cursor: pointer;
                }

                h3:hover {
                    text-decoration: underline;
                }

                ul {
                    list-style: none;
                    padding: 0;
                    margin: 1em 0;
                }

                .task-item {
                    background: #f0f7ee;
                    border-radius: 10px;
                    padding: 0.8em;
                    margin-bottom: 0.7em;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    transition: background-color 0.3s, transform 0.3s;
                }

                .task-item:hover {
                    background-color: #e0f2f1;
                    transform: scale(1.05);
                }

                p {
                    color: #3c6e47;
                    font-weight: bold;
                    margin: 0;
                }

                .reward {
                    font-size: 0.9em;
                    color: #9a6f6f;
                    display: block;
                    margin-top: 0.3em;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }

                .ar-hippo-icon {
                    width: 100px;
                    height: 100px;
                    border-radius: 150%;
                }
                    
                .ar-hippo-icon:hover{
                transform: scale(1.3);
                }

                .right-panel {
                    padding: 1.5em;
                    overflow-y: auto;
                }

                .reels-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1em;
                }

                .reel {
                    position: relative;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
                    background: #fff;
                }

                .reel img {
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                }

                .reel.zoom-in img {
                    animation: zoom-in 6s infinite;
                }

                .reel.zoom-out img {
                    animation: zoom-out 6s infinite;
                }

                .reel.rotate img {
                    animation: rotate 6s infinite;
                }

                .hashtags {
                    position: absolute;
                    bottom: 5px;
                    left: 5px;
                    background-color: rgba(0, 0, 0, 0.6);
                    color: #fff;
                    padding: 2px 5px;
                    border-radius: 5px;
                    font-size: 0.8em;
                    font-weight: bold;
                }

                @keyframes zoom-in {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }

                @keyframes zoom-out {
                    0%, 100% { transform: scale(1.1); }
                    50% { transform: scale(1); }
                }

                @keyframes rotate {
                    0% { transform: rotate(0deg); }
                    50% { transform: rotate(5deg); }
                    100% { transform: rotate(0deg); }
                }
                    .falling-leaves {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Prevent interaction with the leaves */
    overflow: hidden; /* Prevent leaves from showing outside the container */
}

.leaf {
    position: absolute;
    width: 50px; /* Adjust size as needed */
    height: 50px; /* Adjust size as needed */
    background-image: url('https://images.vexels.com/content/265182/preview/cute-fallen-autumn-leaf-7c50f9.png'); /* Replace with your leaf image URL */
    background-size: cover;
    animation: fall linear infinite;
}

@keyframes fall {
    0% {
        transform: translateY(-100px) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0; /* Fades out as it falls */
    }
}

.leaf1 {
    left: 10%;
    animation-duration: 6s;
    animation-delay: 0s;
}

.leaf2 {
    left: 30%;
    animation-duration: 8s;
    animation-delay: 2s;
}

.leaf3 {
    left: 50%;
    animation-duration: 5s;
    animation-delay: 1s;
}

.leaf4 {
    left: 70%;
    animation-duration: 7s;
    animation-delay: 3s;
}

.leaf5 {
    left: 90%;
    animation-duration: 4s;
    animation-delay: 4s;
}

            `}</style>
        </div>
    );
};

export default MainPage;
