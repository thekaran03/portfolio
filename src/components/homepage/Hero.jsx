// import ParticlesCanvas from "./ParticleCanvas";
import React, { useState, useEffect, useRef } from "react";
// import ReactDOM from 'react-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { gsap } from "gsap";
import WebFont from 'webfontloader';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";


export default function Hero(props) {
  const [copyState, setCopyState] = useState({ value: 'npx karancodes', copied: false });


  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    WebFont.load({
      families: ['Caveat'],
      display: 'swap'
    });

    ScrollTrigger.create({
      animation: gsap
        .timeline()
        .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
        .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

      toggleActions: "restart reverse restart reverse",
    });
  }, []);

  const handleCopy = () => {
    setCopyState({ ...copyState, copied: true });
    setTimeout(() => {
      setCopyState({ ...copyState, copied: false });
    }, 3000); // Removes "Copied" after 3 seconds
  };


  return (
    <div className="z-0 relative w-full h-screen flex items-center justify-center bg-secondary-100 overflow-hidden">
      {/* Particle Background */}

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <p className="text-black uppercase text-[1.5rem] font-semibold ">
          -- Hell0, I'm Jaydatt 👋
        </p>
        <h1 className="text-black text-[4rem] md:text-[10rem] lg:text-[10rem] font-bold leading-tight mb-6">
          Digital Designer <br /> Creative Developer
        </h1>
        <p style={{ fontFamily: 'Caveat' }} className="text-black text-[1.5rem] font-medium mb-6">
          A digital designer and creative developer from India passionate about creating memorable experiences.
        </p>

        {/* <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard> */}

        <div className="flex justify-center">
          <div className="w-[20rem] relative flex flex-row justify-around border-2 bg-black text-white h-14 p-2 text-2xl rounded-full font-bold">
            <span>npx karancodes</span>
            <CopyToClipboard text={copyState.value} onCopy={handleCopy}>
              <Icon icon="mdi:content-copy" width="24" height="24" className="mt-1" />
            </CopyToClipboard>

            {/* Copied message */}
            {copyState.copied && (
              <span className="copiedMessage">Copied.</span>
            )}
          </div>
        </div>
        {/* <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700"></span>
            <span>npx karan</span>
          </span>
        </a> */}
      </div>
    </div>
  );
}
