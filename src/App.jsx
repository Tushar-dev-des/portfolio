import "./App.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText, ScrollSmoother } from "gsap/all";
import downArrow from "./assets/double_down.svg";
import linkedIn from "./assets/linked_in.svg";
import Loader from "./Loader";
import PatternBg from "./PatternBg";
import FallingPills from "./FallingPills";
import About from "./About";
import Gallery from "./Gallery";
import CaseStudy from "./CaseStudy";



gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

function App() {
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        const heroSplit = new SplitText(".title", { type: "chars" });
        const gallerySplit = new SplitText(".gallery_title", { type: "chars" });

        const smoother = ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: 1.5, // Seconds it takes to catch up to the scroll
            effects: true, // Enables data-speed and data-lag attributes
            smoothTouch: 0.1, // Optional: smooths scrolling on touch devices
        });

        gsap.from(heroSplit.chars, {
            delay: 6,
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.02,
            opacity: 0,
        });


        gsap.from(".desc p", {
            delay: 6.5,
            yPercent: 200,
            duration: 1.5,
            ease: "expo.out",
            stagger: 0.5,
            opacity: 0,
        });

        gsap.from(gallerySplit.chars, {
            scrollTrigger: {
                trigger: ".gallery_title_container",
                start: "top 70%",
                toggleActions: "play none none reverse",
            },
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.02,
            opacity: 0,
        });

    }, []);

    return (
        <div>
            <Loader />
            <PatternBg />

            <div className="custom_cursor">view</div>

            <div id="smooth-wrapper" ref={wrapperRef}>
                <div id="smooth-content" ref={contentRef}>
                    <div className="first_fold">
                        <div className="navbar">
                            <div>
                                <a href="#" style={{ textDecoration: "none", color: "#786A30", textWrap: "nowrap" }}>
                                    Tushar Mahajan
                                </a>
                            </div>
                            <div className="hyperlinks">
                                <div>tusharxmahajan@gmail.com</div>
                                <img onClick={() => window.open("https://www.linkedin.com/in/tusharxmahajan/", "_blank")} src={linkedIn} alt="" style={{ height: "20px", width: "20px", cursor: "pointer" }} />
                            </div>
                        </div>
                        <div className="hero">
                            <div className="hero_title">
                                <div className="title">Product Designer</div>
                                <div className="title">& Engineer</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                <div className="desc">
                                    <p>
                                        with{" "}
                                        <span style={{ color: "#D4C8B0" }}>
                                            {" "}
                                            &gt;3 years of exp
                                        </span>{" "}
                                        , my passion for user-centric design and code has been helping me
                                        bridge gap between the two, to deliver high quality and
                                        engaging user experiences.{" "}
                                    </p>
                                </div>
                                <div className="desc">
                                    <p>
                                        driven by commitment to quality and love for tech, I try to
                                        push every project beyond the ordinary{" "}
                                    </p>
                                </div>
                                <div className="desc">
                                    <p>
                                        <img
                                            src={downArrow}
                                            alt=""
                                            style={{ height: "24px", width: "24px" }}
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <CaseStudy />
                    <About />

                    <div className="gallery_title_container" style={{ width: "100%", padding: "2rem", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                        <div className="gallery_title" style={{
                            fontSize: "10rem",
                            lineHeight: "10rem",
                            letterSpacing: "-2px",
                            fontWeight: "400",
                            color: "#D4C8B0",
                        }}>
                            Gallery
                        </div>
                    </div>

                    <Gallery />


                    {/* <FallingPills /> */}

                </div>
            </div>
        </div >
    );
}

export default App;
