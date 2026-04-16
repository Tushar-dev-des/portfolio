import "./App.css";
import { useRef, useState } from "react";
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
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';



gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

function App() {
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);
    const [emailCopied, setEmailCopied] = useState(false);
    const holdTimeoutRef = useRef(null);

    const handleCopyEmail = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        navigator.clipboard.writeText("tusharxmahajan@gmail.com");
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    const startHold = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        holdTimeoutRef.current = setTimeout(() => {
            handleCopyEmail();
        }, 1000);
    };

    const endHold = () => {
        if (holdTimeoutRef.current) {
            clearTimeout(holdTimeoutRef.current);
            holdTimeoutRef.current = null;
        }
    };

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
                                <a href="#" style={{ textDecoration: "none", color: "var(--color-secondary)", textWrap: "nowrap" }}>
                                    Tushar Mahajan
                                </a>
                            </div>
                            <div className="hyperlinks">
                                <a data-tooltip-id="email-tooltip" href="https://mail.google.com/mail/?view=cm&fs=1&to=tusharxmahajan@gmail.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }} onMouseDown={startHold} onMouseUp={endHold} onMouseLeave={endHold} onTouchStart={startHold} onTouchEnd={endHold}>tusharxmahajan@gmail.com</a>
                                <Tooltip id="email-tooltip" clickable={true} style={{ zIndex: 10000, backgroundColor: "var(--color-text-white)", color: "var(--color-bg-black)", borderRadius: "0px" }}>
                                    <div style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "400" }}>
                                        <span>{emailCopied ? "✓copied!" : "hold click to copy"}</span>
                                    </div>
                                </Tooltip>
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
                                        <span style={{ color: "var(--color-primary)" }}>
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

                    <Gallery />


                    {/* <FallingPills /> */}

                </div>
            </div>
        </div >
    );
}

export default App;
