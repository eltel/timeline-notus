"use client";
import { useEffect, useRef, useState } from "react";

function useElementOnScreen(ref, rootMargin = "-20px") {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
}

export default function AnimateIn({ children }) {
  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <div
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? "none" : "0 2rem",
        transition: "1600ms ease-in-out",
      }}
    >
      {children}
    </div>
  );
}
