import work1 from "./assets/Home.png";
import work2 from "./assets/Expense_filing.png";
import { useState, useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"
import './CaseStudy.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);


const carouselData = [
    {
        bg: work1,
        p: "being a systems thinker, I’ve found & developed my own robust way of approaching problems",
        h1: "DICE AI Support agent"
    },
    {
        bg: work2,
        p: "simplifying complex financial workflows to create intuitive and seamless user experiences",
        h1: "Expense Filing Redesign"
    }
];

const CaseStudy = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselData.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    useGSAP(() => {

        // Custom Cursor Logic
        const cursor = document.querySelector(".custom_cursor");
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });

        let xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" }),
            yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });

        window.addEventListener("mousemove", (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
        });

        gsap.utils.toArray(".showreel").forEach(reel => {
            // Add custom cursor hover events
            reel.style.cursor = "none";
            reel.addEventListener("mouseenter", () => {
                gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" });
            });
            reel.addEventListener("mouseleave", () => {
                gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
            });

            const content = reel.querySelector(".showreel_content");
            if (content) {
                gsap.fromTo(content, {
                    y: () => -(reel.offsetHeight - content.offsetHeight)
                }, {
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: reel,
                        start: () => "top bottom-=" + content.offsetHeight,
                        end: "bottom bottom",
                        scrub: true,
                        invalidateOnRefresh: true,
                    }
                });
            }
        });
    })

    return (
        <div>

            <div className="showreel_container">
                <div className="showreel" onClick={() => { }} style={{ backgroundImage: `url(${carouselData[currentSlide].bg})` }}>
                    <div className="showreel_content">
                        <div className="showreel_content_left" key={`content-${currentSlide}`}>
                            <p>{carouselData[currentSlide].p}</p>
                            <h1>{carouselData[currentSlide].h1}</h1>
                        </div>
                        <p className="case_number">{currentSlide + 1} &nbsp; / &nbsp; {carouselData.length}</p>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default CaseStudy