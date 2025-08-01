import { TypingEffect } from "../hooks/TypingEffect"
import { InView, useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
export const Contact = () => {
    const {ref, inView} = useInView({
        threshold: 0.1,
        triggerOnce:true
    })
    const text =TypingEffect("jes121avila@gmail.com",100,200, inView );
  return (
    <footer ref={ref} className="footer">
        <div className="contact-box">
            <h3>Contact Me</h3>
            <div className="email-div">
                <p className="email-text">Email</p>
                <p className="email">{text}</p>
            </div>
        </div>
        
    </footer>
  )
}
