import React from 'react';
import './Gallery.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all"
import work1 from "./assets/Home.png"
import work2 from "./assets/Expense_filing.png"
import work3 from "./assets/Oneway-SRP.png"
import work4 from "./assets/RFx.png"



gsap.registerPlugin(ScrollTrigger, SplitText);


const Gallery = () => {


    useGSAP(() => {

        const sections = gsap.utils.toArray(".gallery_item");
        const gallerySplit = new SplitText(".gallery_item h1", { type: "chars" });

        gsap.to(sections, {
            // x: `-${(document.querySelector(".gallery_container").offsetWidth)}`,
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: ".gallery_container",
                // start: "top top",
                end: () => `+=${(document.querySelector(".gallery_container").offsetWidth)}`,
                scrub: 1,
                pin: true,
            },
        })

        gsap.from(gallerySplit.chars, {
            scrollTrigger: {
                trigger: ".gallery_container",
                start: "top 70%",
                toggleActions: "play none none reverse",
            },
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.02,
            opacity: 0,
        });

        gsap.from('gallery_item', {
            scrollTrigger: {
                trigger: ".gallery_container",
                start: "top 100%",
                toggleActions: "play none none reverse",
                scrub: 1,
            },
            y: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.02,
            opacity: 0,
        })
    })
    return (
        <div className="gallery_container">
            {/* <div className="gallery"> */}
            <div className="gallery_item">
                <h1>Gallery</h1>
                <div>
                    <img src={work1} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </div>
            <div className="gallery_item">
                <div style={{ gridColumn: "1/span 9", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <img src={work1} alt="" />
                </div>
                <div style={{ gridColumn: "10/span 3", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "end", textAlign: "end" }}>
                    <img src={work1} alt="" />
                </div>
            </div>
            <div className="gallery_item">
                <div style={{ gridColumn: "1/span 5", display: "flex", flexDirection: "column", justifyContent: "space-between", textAlign: "end" }}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    <img src={work1} alt="" />
                </div>
                <div style={{ gridColumn: "6/span 7", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                    <img src={work1} alt="" />
                </div>
            </div>

            {/* </div> */}
            {/* <div className="gallery">
                <div className='work_content'>Gallery</div>
                <div className='work_image'>
                    <img src={work1} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </div>
            <div className="gallery">
                <div className='work_image work_image_2'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    <img src={work2} alt="" />
                </div>
                <div className='work_image work_image_3'>
                    <div className='work_image_border'></div>
                    <img src={work2} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </div>
            <div className="gallery">
                <div className='work_image work_image_4'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    <img src={work3} alt="" />
                </div>
                <div className='work_image work_image_5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </div>
            <div className="gallery" style={{ marginLeft: "-2rem" }}>
                <div className='work_image work_image_6'>
                    <img src={work4} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
                <div className='work_content work_image_7'>Gallery</div>
            </div> */}
        </div>
    );
};

export default Gallery;

