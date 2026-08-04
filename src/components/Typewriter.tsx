'use client';

import React, { useEffect, useState, useRef } from 'react';

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  pauseMs?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Typewriter — cycles through a list of phrases with a typing/erasing effect.
 */
export const Typewriter: React.FC<TypewriterProps> = ({
  phrases,
  typingSpeed = 45,
  pauseMs = 2200,
  className,
  style,
}) => {
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Blink cursor independently
  useEffect(() => {
    const blink = setInterval(() => setShowCursor(v => !v), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    const phrase = phrases[phraseIdx % phrases.length];

    if (typing) {
      if (displayed.length < phrase.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(phrase.slice(0, displayed.length + 1));
        }, typingSpeed);
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), pauseMs);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, typingSpeed * 0.55);
      } else {
        setPhraseIdx(i => i + 1);
        setTyping(true);
      }
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, typing, phraseIdx, phrases, typingSpeed, pauseMs]);

  return (
    <span className={className} style={style}>
      {displayed}
      <span
        style={{
          display: 'inline-block',
          width: '3px',
          height: '1em',
          background: 'var(--stamp)',
          marginLeft: '2px',
          verticalAlign: 'middle',
          opacity: showCursor ? 1 : 0,
          borderRadius: '1px',
          boxShadow: '0 0 8px var(--stamp)',
          transition: 'opacity 0.1s',
        }}
        aria-hidden="true"
      />
    </span>
  );
};
