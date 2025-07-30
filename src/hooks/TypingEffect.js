import { useEffect, useState } from "react"

export const TypingEffect = (text, speed = 100, startDelay = 400) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [typingStarted, setTypingStarted] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setTypingStarted(true);
    }, startDelay);

    return () => clearTimeout(delayTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!typingStarted) return;

    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
    
  }, [typingStarted, index, text, speed]);
  
  return displayedText
}
