import { useEffect, useState } from "react"

export const TypingEffect = (text, speed = 100, startDelay = 400, active = true) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [typingStarted, setTypingStarted] = useState(false);

  useEffect(() => {
    if(!active) return
    const delayTimeout = setTimeout(() => {
      setTypingStarted(true);
    }, startDelay);

    return () => clearTimeout(delayTimeout);
  }, [startDelay, active]);

  useEffect(() => {
    if (!typingStarted || !active) return;

    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
    
  }, [typingStarted, index, text, speed, active]);
  
  return displayedText
}
