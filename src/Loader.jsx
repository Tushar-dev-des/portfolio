import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Loader.css";

const Loader = () => {
  const counterRef = useRef(null);

  useGSAP(() => {
    const counter = { val: 0 };

    // 2. Tell GSAP to animate that dummy object
    gsap.to(counter, {
      val: 100, // Animate up to 100
      duration: 4.5, // Over 4 seconds
      ease: "power1.Out", // Makes it slow down elegantly as it reaches 100

      // 3. Every single frame of the animation, update the text on the screen
      onUpdate: () => {
        if (counterRef.current) {
          // Math.round ensures we don't see decimals like 45.678
          counterRef.current.textContent = Math.round(counter.val);
        }
      },
    });

    gsap.to(".overlay_bar", {
      delay: 5,
      duration: 1.5,
      ease: "power4.inOut",
      yPercent: -100,
      stagger: {
        amount: 0.6,
      },
    });
  }, []);

  return (
    <div className="overlay">
      <div className="overlay_bar overlay_bar_one">
        <div className="counter">
          <div ref={counterRef}>0</div>
          {/* <div className="counter-1 digit">
            <div className="num">0</div>
            <div className="num num1offset1">1</div>
          </div>
          <div className="counter-2 digit">
            <div className="num">0</div>
            <div className="num numoffset2">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="num">0</div>
          </div>
          <div className="counter-3 digit">
            <div className="num">0</div>
            <div className="num">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
          </div> */}
        </div>
      </div>
      <div className="overlay_bar overlay_bar_two"></div>
      <div className="overlay_bar overlay_bar_three"></div>
      <div className="overlay_bar overlay_bar_four"></div>
    </div>
  );
};

export default Loader;
