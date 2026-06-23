"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let current = 0;

    const interval = setInterval(() => {
      current++;

      setCount(current);

      if (current >= end) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [started, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}