import React from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/styles.css";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const cardsData = [
    {
        title: "Octopod",
        description: `I designed and built the entire website framework and code for OctoPod using React.js and CSS. My main focus was creating a clean user interface with a simple structure so anyone could use it.
                        OctoPod helps take the guesswork out of studying by generating custom practice questions directly from your notes. It gives you feedback on your performance, making it easier to see exactly where and what you need to review more; your studying is much more effective! I even included an integrated AI chatbot tutor to make the learning process interactive.`,
        img: "/Octopod.png",
        link: "https://www.youtube.com/watch?v=JcSUMnwP7is"
    },
    {
        title: "My Website",
        description: `I had a great time building the front-end for this project using React.js! I chose Tailwind CSS to handle the styling, which made it easy for me to create a cleaner look that works perfectly on phones and desktops alike.
                        My goal was to create a smooth experience for users, so I focused on structuring the code using reusable components. This keeps the application organized, fast, and easy to update later on. 
                        My website really shows my interest and passion for building high-quality front-end experiences!`,
        img: "/Website.png"
    },
    {
        title: "4x4 Sudoku",   
        description: `I developed a complete, self-generating Sudoku game using Java. A key feature is its ability to generate puzzles where players can customize the difficulty by choosing the number of blank spaces in the puzzle.
                        To ensure a smooth experience, I used the JSON library to automatically save player progress and puzzle history. This allows users to easily track their past attempts and even load unfinished games after closing and reopening the application. I also designed multiple interface windows to make the game intuitive and user-friendly.`,
        img: "/Sudoku.png",
    }
];

export default function StackedCards() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".card");

        gsap.set(".img-wrapper img", {
            clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)",
            autoAlpha: 0,
        });

        gsap.set(".card-content h1, .card-content p", {
            y: 0,
            autoAlpha: 0,
        });

        cards.forEach((card, i) => {
            const img = card.querySelector("img");
            const textEls = card.querySelectorAll(".card-content h1, .card-content p");

            gsap.to(card, {
                scale: 0.8 + 0.2 * (i / (cards.length - 1)),
                ease: "none",
                scrollTrigger: {
                    trigger: card,
                    start: "top " + (120 + 25 * i),
                    end: "bottom bottom",
                    endTrigger: ".container",
                    scrub: true,
                    pin: card,
                    pinSpacing: false,
                    invalidateOnRefresh: true,
                },
            });

            ScrollTrigger.create({
                trigger: card,
                start: "top 70%",
                once: true,
                onEnter: () => {
                    const tl = gsap.timeline();

                    tl.to(img, {
                        clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
                        autoAlpha: 1,
                        duration: 2,
                        delay: 0.2,
                        ease: "power2.out",
                    });

                    tl.to(
                        textEls, 
                        {
                        y: -10,
                        autoAlpha: 1,
                        duration: 0.6,
                        ease: "power2.out",
                        stagger: 0.4,
                        },
                        "-=1.5"
                    );
                },

            });
        });

    },
    {scope: containerRef}
    );



    return (
        <div ref={containerRef}> 
            <div className="spacer"></div>

            <div className="container">
                <div className="stacked-cards">
                    {cardsData.map((card, index) => (
                        <div className="card" key={index}>
                            <div className="card-content">
                                <h1>{card.title}</h1>
                                <p style={{ whiteSpace: 'pre-line' }}>{card.description}</p>
                            </div>
                            <div className="img-wrapper">
                                <img src={card.img} alt={card.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};  