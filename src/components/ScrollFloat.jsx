import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  containerClassName = '',
  containerStyle = {},
  textClassName = '',
  animationDuration = 2,
  ease = 'back.inOut(1.5)',
  stagger = 0.05,
  style = {}
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="inline-block word" key={index}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const charElements = el.querySelectorAll('.inline-block');

    gsap.fromTo(charElements, {
      willChange: 'opacity, transform',
      opacity: 0,
      yPercent: -120,
      scaleY: 2.3,
      scaleX: 0.7,
      transformOrigin: '50% 100%'
    }, {
      duration: animationDuration,
      ease: ease,
      opacity: 1,
      yPercent: 0,
      scaleY: 1,
      scaleX: 1,
      stagger: stagger,
      delay: 1.5
    });
  }, [animationDuration, ease, stagger]);

  return (
    <h2
      ref={containerRef}
      className={`my-5 overflow-hidden ${containerClassName}`}
      style={containerStyle}>
      <span
        className={`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] ${textClassName}`}
        style={style}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
