"use client";

import { useState, useEffect } from "react";

const sentences = ["Full Stack Engineer", "Bachelor of Computer Science"];
const name = "Ignatius Filbert Sevilen";

export default function Hero() {
  const [displayedName, setDisplayedName] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [nameTyped, setNameTyped] = useState(false);

  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName(name.substring(0, i + 1));
      i++;
      if (i === name.length) {
        clearInterval(interval);
        setNameTyped(true); 
      }
    }, 50); 
    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    if (!nameTyped) return;

    const fullText = sentences[textIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 3000); 
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % sentences.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, nameTyped]);

  return (
    <section className="flex flex-col-reverse md:flex-row items-center text-center justify-between">
      <div className="flex flex-col items-center md:items-start my-4">
        <h1 className="text-4xl md:text-5xl text-center md:text-left">
          Hi, I'm{" "}
          <strong className="text-green-400">
            {displayedName}
          </strong>
        </h1>
        <p className="text-xl md:text-2xl mt-6 h-8">
          {displayedText}
          <span className="blink">|</span>
        </p>
      </div>
      <div className="my-4">
        <img
          src="/images/profile.webp"
          alt="Profile"
          className="rounded-full object-contain w-72 h-72 bg-white"
        />
      </div>
    </section>
  );
}
