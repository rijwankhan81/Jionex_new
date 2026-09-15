"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";
import styles from "./EditorialReveal.module.scss";

export default function EditorialReveal({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.reveal} ${visible ? styles.visible : ""}`}>
      {children}
    </div>
  );
}
