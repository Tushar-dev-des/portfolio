import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all"
import './About.css'
import puzzleOne from './assets/puzzle_one.svg'
import puzzleTwo from './assets/puzzle_two.svg'
import puzzleThree from './assets/puzzle_three.svg'
import puzzleFour from './assets/puzzle_four.svg'
import puzzleFive from './assets/puzzle_five.svg'

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {

    useGSAP(() => {

        const aboutSplit = new SplitText(".about_content", { type: "words" });

        gsap.from('.puzzle_item', {
            scrollTrigger: {
                trigger: ".puzzle_container",
                start: "top 50%",
                end: "top -120%",
                scrub: true,
            },
            opacity: 0,
            stagger: 0.1,
            y: 150,
        })

        gsap.from('.missing_item_one', {
            scrollTrigger: {
                trigger: ".puzzle_container",
                start: "top -100%",
                end: "top -230%",
                scrub: true,
            },
            opacity: 0,
            stagger: 0.1,
            y: -200,
            x: 200,
            rotation: -45,
        })

        gsap.from('.missing_item_two', {
            scrollTrigger: {
                trigger: ".puzzle_container",
                start: "top -150%",
                end: "top -280%",
                scrub: true,
            },
            opacity: 0,
            stagger: 0.1,
            y: 200,
            x: 200,
            rotation: 45,
        })

        gsap.to('.puzzle', {
            scrollTrigger: {
                trigger: ".third_fold",
                start: "bottom 140%",
                toggleActions: "play none none reverse",
            },
            opacity: 1,
        })

        ScrollTrigger.create({
            trigger: ".puzzle_container",
            start: "top top",
            pin: true,
            endTrigger: ".third_fold",
            end: "bottom bottom",
            pinSpacing: false,
        });

        ScrollTrigger.create({
            trigger: ".about_container",
            start: "top top",
            pin: true,
            endTrigger: ".third_fold",
            end: "bottom bottom",
            pinSpacing: false,
        });

        // gsap.to('.puzzle_container', {
        //     scrollTrigger: {
        //         trigger: ".third_fold",
        //         start: "top top",
        //         end: "bottom bottom",
        //         pin: true,
        //         pinSpacing: false,
        //     },
        // })

        // gsap.to('.about_container', {
        //     scrollTrigger: {
        //         trigger: ".third_fold",
        //         start: "top -100%",
        //         end: "bottom bottom",
        //         pin: true,
        //         pinSpacing: false,
        //     },
        // })

        gsap.from(aboutSplit.words, {
            scrollTrigger: {
                trigger: ".third_fold",
                start: "top -100%",
                end: "bottom bottom",
                scrub: true,
            },
            opacity: 0,
            stagger: 0.07,
            y: 30,
            rotation: 15,
        });

        gsap.from('.about', {
            scrollTrigger: {
                trigger: ".third_fold",
                start: "top -100%",
                end: "bottom bottom",
                scrub: true,
            },
            scale: 0.9,
            y: 100
        })


    }, []);

    return (
        <div className="third_fold">
            <div className="puzzle_container">
                <div className="puzzle">
                    <div className="puzzle_item_one puzzle_item"><img src={puzzleOne} alt="" /></div>
                    <div className="puzzle_item_two puzzle_item"><img src={puzzleTwo} alt="" /></div>
                    <div className="puzzle_item_three missing_item_one"><img src={puzzleThree} alt="" /></div>
                    <div className="puzzle_item_four puzzle_item"><img src={puzzleFour} alt="" /></div>
                    <div className="puzzle_item_five missing_item_two"><img src={puzzleFive} alt="" /></div>
                </div>
            </div>
            <div className="about_container">
                <div className="about">
                    <div className="about_content">
                        being a systems thinker, I’ve found & developed my own robust way of
                        approaching problems.
                    </div>
                    <div className="about_content">
                        I look at them as a part of an unfinished story, the user being the
                        central focus point and what we need to look after now is how
                        seamlessly and effortlessly can we complete this story.
                    </div>
                    {/* <div className="about_content action">Read my complete approach</div> */}
                </div>
            </div>

        </div>
    );
};

export default About;
