import AOS from 'aos'
import 'aos/dist/aos.css';
import { TypingEffect } from "../hooks/TypingEffect"
import { InView, useInView } from 'react-intersection-observer';
import { useState , useRef, useEffect } from 'react';
import emailjs from "@emailjs/browser"
import copyIcon from "../Icons/copyIcon.png"
import { SuccesAlert } from './SuccesAlert';

export const Contact = () => {
    useEffect(() => {
              AOS.init({
              duration: 800,
              once: true,  
              });
           }, []);
    const {ref, inView} = useInView({
        threshold: 0.1,
        triggerOnce:true
    })
    const texto = TypingEffect("jes121avila@gmail.com",100,200, inView );
    const form = useRef();
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState();
    const handleShowAlert = () =>{
        setShowAlert(true);
        document.body.style.overflow = "hidden";

    }

    const handleAlertClose = () =>{
        setShowAlert(false);
         document.body.style.overflow = "auto";
    }
    
    const inputRef = useRef(null);

    const handleCopy = () => {
        const text = inputRef.current.value;
        navigator.clipboard.writeText(text)
        .then(() => {
            
        })
        .catch((err) => {
            console.error('Error al copiar:', err);
        });
    };

    const validateForm = (data) => {
        const newErrors = {};

        if (!data.sender.trim()) {
            newErrors.sender = "El nombre es obligatorio";
        }

        if (!data.email.trim()) {
            newErrors.email = "El correo es obligatorio";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            newErrors.email = "El correo no es válido";
        }

        if (!data.subject.trim()) {
            newErrors.subject = "El asunto es obligatorio";
        }

        if (!data.message.trim()) {
            newErrors.message = "El mensaje es obligatorio";
        }

        return newErrors;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = {
            sender: form.current.sender.value,
            email: form.current.email.value,
            subject: form.current.subject.value,
            message: form.current.message.value,
        };

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        
        emailjs.sendForm(
            "service_94a7ysc",
            "template_mln4uwg",
            form.current,
            "dJ66cA7TAz8HjblV7"
        ).then(
            (result) => {
                console.log(result.text);
                handleShowAlert();
                form.current.reset();
            },
            (error) => {
                console.error(error.text);        
            }
        )
    }
    return (
    <div ref={ref} data-aos="zoom-in-up" className="contact">
        <div className="contact-box">
            <h2>Contact Me</h2>
            <div className="email-div">
                <p className="email-text">Email</p>
                <div className="email-and-btn">
                    <input type="text" ref={inputRef}  id="subject" className="email" autoComplete="off" value={texto} readOnly />
                    <button className="copy-btn" onClick={handleCopy}><img  className="copy-icon"src={copyIcon} alt="copy Icon" /></button>
                </div>
                
            </div>
            <form  ref={form} onSubmit={sendEmail} action="#">
                <div className="input-box">
                    <div className="input-field field">
                        <input type="text" name="sender" placeholder="Full Name" id="name" className="item" autoComplete="off" />
                        {errors.sender && <p className="error">{errors.sender}</p>}
                    </div>
                    <div className="input-field field">
                        <input type="text" name="email" placeholder="Email Adress" id="email" className="item" autoComplete="off" />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="input-field field">
                        <input type="text" name="subject" placeholder="Subject" id="subject" className="item" autoComplete="off" />
                        {errors.subject && <p className="error">{errors.subject}</p>}
                    </div>

                    <div className="textarea-field field">
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message" className="item" autoComplete="off">
                        </textarea>
                        {errors.message && <p className="error">{errors.message}</p>}
                    </div>
                </div>
                <button type="submit">Send Email</button>
            </form>
                {showAlert && (
                    <SuccesAlert
                    onClose={handleAlertClose}
                    />
                )}
                

        </div>
        
    </div>
  )
}
