import "./EditorialSlider.css";
import { useEffect, useState } from "react";

type EditorialSliderProps = {
  items: string[];
  label: string;
};

function EditorialSlider({ items, label }: EditorialSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [items.length]);

  return (
    <div className="editorial-spotlight" aria-label={label}>
      <span className="editorial-spotlight-mark" aria-hidden="true">✦</span>
      <div className="editorial-spotlight-stage" aria-hidden="true">
        <span key={items[activeIndex]}>{items[activeIndex]}</span>
      </div>
      <span className="editorial-spotlight-mark" aria-hidden="true">✧</span>
    </div>
  );
}

export default EditorialSlider;
