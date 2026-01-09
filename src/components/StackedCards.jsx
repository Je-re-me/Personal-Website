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
        description: "A full-stack web application that makes learning easy",
        img: "/Octopod.png",
        link: "https://www.youtube.com/watch?v=JcSUMnwP7is"
    },
    {
        title: "Personal Website",
        description: "My personal website built with React, Tailwind CSS, and GSAP",
        img: "/Website.png"
    },
    {
        title: "4x4 Sudoku",   
        description: "A simple 4x4 Sudoku game built with Java and JSON library",
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
                    start: "top " + (15 + 35 * i),
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
                start: "bottom bottom",
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
                                <p>{card.description}</p>
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