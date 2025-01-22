// import ParticlesCanvas from "./ParticleCanvas";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import WebFont from 'webfontloader';
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero(props) {

  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xffffff,
        color1: 0x23153c
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])


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

  return (
    <div className="z-0 relative w-full h-screen flex items-center justify-center bg-secondary-100 overflow-hidden" ref={myRef}>
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
        <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Let&apos;s Talk.</span>
          </span>
        </a>
      </div>
    </div>
  );
}
