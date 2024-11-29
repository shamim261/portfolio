"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  delay?: number;
  children: React.ReactNode;
}
const FadeUpSection = ({ delay, children }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  console.log(isVisible);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry) {
          setIsVisible(entry.isIntersecting);
        }
      });
    });
    if (ref.current) {
      observer.observe(ref.current!);
    }
    return () => observer.unobserve(ref.current!);
  }, []);

  return (
    <div
      className={`${isVisible ? `animate-fade-up ` : ""}`}
      ref={ref}
      style={{ animationDelay: `${(delay ?? 1) * 0.2}s` }}
    >
      {children}
    </div>
  );
};

export default FadeUpSection;
