"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { schoolConfig } from "../config/school";

const bgColors = [
  "linear-gradient(135deg, #1a3c6e 0%, #2d5fa8 100%)",
  "linear-gradient(135deg, #0f2a4e 0%, #1a3c6e 100%)",
  "linear-gradient(135deg, #1e4d8c 0%, #0f2a4e 100%)",
];

type Slide = { title: string; subtitle: string; image?: string };

export default function HeroSlider({ slides }: { slides?: Slide[] }) {
  const [current, setCurrent] = useState(0);

  const activeSlides: Slide[] =
    slides && slides.length > 0 ? slides : schoolConfig.home.heroSlides;

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % activeSlides.length), 4000);
    return () => clearInterval(timer);
  }, [activeSlides.length]);

  return (
    <section className="hero-slider">
      {activeSlides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? "active" : ""}`}
          style={
            slide.image
              ? { backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
              : { background: bgColors[i % bgColors.length] }
          }
        >
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">Welcome to</p>
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/admissions#enquiry" className="bg-secondary text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                Apply Now
              </Link>
              <Link href="/about" className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="slider-dots">
        {activeSlides.map((_, i) => (
          <button key={i} className={`slider-dot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)} />
        ))}
      </div>
    </section>
  );
}
