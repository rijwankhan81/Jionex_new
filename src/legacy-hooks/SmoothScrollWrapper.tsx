"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const SmoothScrollWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const speed = 0.05;
  let raf: number;
  const router = useRouter();
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  const setBodyHeight = () => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      const height = scrollEl.getBoundingClientRect().height;
      document.body.style.height = `${Math.floor(height)}px`;
    }
  };

  const smoothScroll = () => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const scrollY = window.pageYOffset;
    offsetRef.current += (scrollY - offsetRef.current) * speed;
    scrollEl.style.transform = `translateY(-${offsetRef.current}px) translateZ(0)`;
    raf = requestAnimationFrame(smoothScroll);
  };

  const cancelScroll = () => {
    cancelAnimationFrame(raf);
    document.body.style.height = "";
    if (scrollRef.current) scrollRef.current.style.transform = "none";
  };

  const handleResize = () => {
    const isNowDesktop = window.innerWidth >= 768;
    setIsDesktop(isNowDesktop);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl || !isDesktop) {
      cancelScroll();
      return;
    }

    window.scrollTo(0, 0);
    offsetRef.current = 0;

    setBodyHeight();
    setTimeout(setBodyHeight, 100); // re-calculate after load

    raf = requestAnimationFrame(smoothScroll);
    window.addEventListener("resize", setBodyHeight);

    return () => {
      cancelScroll();
      window.removeEventListener("resize", setBodyHeight);
    };
  }, [router.pathname, isDesktop]);

  return (
    <div
      ref={scrollRef}
      className="js-scroll"
      style={{
        position: isDesktop ? "fixed" : "relative",
        top: 0,
        left: 0,
        width: "100%",
        minHeight: "100vh",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScrollWrapper;
