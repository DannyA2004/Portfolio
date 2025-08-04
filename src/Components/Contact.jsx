import { TypingEffect } from "../hooks/TypingEffect"
import { InView, useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import emailjs from "@emailjs/browser"

export const Contact = () => {
    const {ref, inView} = useInView({
        threshold: 0.1,
        triggerOnce:true
    })
    const texto =TypingEffect("jes121avila@gmail.com",100,200, inView );
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_94a7ysc",
            "template_mln4uwg",
            form.current,
            "dJ66cA7TAz8HjblV7"
        ).then(
            (result) => {
                console.log(result.text);
                alert("¡Mensaje enviado!");
                form.current.reset();
            },
            (error) => {
                console.error(error.text);        
            }
        )
    }
    return (
    <div ref={ref} className="contact">
        <div className="contact-box">
            <h2>Contact Me</h2>
            <form  ref={form} onSubmit={sendEmail} action="#">
                <div className="input-box">
                    <div className="input-field field">
                        <input type="text" name="sender" placeholder="Full Name" id="name" className="item" autoComplete="off" />
                    </div>

                    <div className="input-field field">
                        <input type="text" name="email" placeholder="Email Adress" id="email" className="item" autoComplete="off" />
                    </div>

                    <div className="input-field field">
                        <input type="text" name="subject" placeholder="Subject" id="subject" className="item" autoComplete="off" />
                    </div>

                    <div className="textarea-field field">
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message" className="item" autoComplete="off">
                        </textarea>
                    </div>
                </div>
                <button type="submit">Send Email</button>
            </form>
            <div className="email-div">
                <p className="email-text">Email</p>
                <input type="text"  id="subject" className="email" autoComplete="off" value={texto} />
            </div>

        </div>
        
    </div>
  )
}
