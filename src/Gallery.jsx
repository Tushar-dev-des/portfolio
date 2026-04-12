import React from 'react';
import './Gallery.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"
import work1 from "./assets/Home.png"
import work2 from "./assets/Expense_filing.png"
import work3 from "./assets/Oneway-SRP.png"
import work4 from "./assets/RFx.png"



gsap.registerPlugin(ScrollTrigger);


const Gallery = () => {


    useGSAP(() => {

        const sections = gsap.utils.toArray(".gallery");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: ".gallery_container",
                // start: "top top",
                end: () => `+=${(document.querySelector(".gallery_container").offsetWidth) * 4}`,
                scrub: 1,
                pin: true,
            },
        })
    })
    return (
        <div className="gallery_container">
            <div className="gallery">
                <div className='work_content'>Gallery</div>
                <div className='work_image'>
                    <div className='work_image_border'></div>
                    <img src={work1} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </div>
            <div className="gallery">
                <div className='work_content'>Gallery</div>
                <div className='work_image'>
                    <div className='work_image_border'></div>
                    <img src={work2} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </div>
            <div className="gallery">
                <div className='work_content'>Gallery</div>
                <div className='work_image'>
                    <div className='work_image_border'></div>
                    <img src={work3} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </div>
            <div className="gallery" style={{ marginLeft: "-2rem" }}>
                <div className='work_content'>Gallery</div>
                <div className='work_image'>
                    <div className='work_image_border'></div>
                    <img src={work4} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </div>
        </div>
    );
};

export default Gallery;

