import React, { useEffect } from "react";
import "./Contact.css";
import {
  FaMobileAlt,
  FaEnvelopeOpen,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineMenuFold,AiOutlineMenuUnfold } from 'react-icons/ai';




const Contact = ({ initialEmailValue }) => {
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("c-container");

    const handleSignUpClick = () => {
      if (container) {
        container.classList.add("right-panel-active");
      }
    };

    const handleSignInClick = () => {
      if (container) {
        container.classList.remove("right-panel-active");
      }
    };

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener("click", handleSignUpClick);
      signInButton.addEventListener("click", handleSignInClick);
    }

    return () => {
      if (signUpButton && signInButton && container) {
        signUpButton.removeEventListener("click", handleSignUpClick);
        signInButton.removeEventListener("click", handleSignInClick);
      }
    };
  }, []);

  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  
  const sendEmail = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !name || !company || !phone || !message) {
      toast.error('Please fill all the details');
      return;
    } 
    else if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.', {
        position: 'top-right',
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }



    emailjs
      .sendForm('service_2p6i9kz', 'template_0z7yjhj', form.current, 'z0cyQgpdXvPs2Y5UZ')
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
        showSuccessToast();
        setEmail(''); 
        setName('');
        setMessage('');
        setCompany('');
        setPhone('');
      })
      .catch((error) => {
        console.error(error.text);
      });
  };

  const showSuccessToast = () => {
    toast.success('Message Sent Successfully!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };



  return (
    <section className="contact-section">
      <div className="contact-bg">
        <h2>Contact Us</h2>
        <div className="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="c-text">
        </p>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <div className="c-info">
            <span className="fas">
              <FaMobileAlt />
            </span>
            <span>Phone No.</span>
            <span className="c-text">+917977673899</span>
          </div>
          <div className="c-info">
            <span className="fas">
              <FaMapMarkerAlt />
            </span>
            <span>Address</span>
            <span className="c-text">
            Incubated in Vellore Institute of Technology, Chennai, Tamil Nadu, India

            </span>
          </div>
          <div className="c-info">
            <span className="fas">
              <FaEnvelopeOpen />
            </span>
            <span>E-mail</span>
            <span className="c-text">mafkinrobotics@gmail.com</span>
          </div>
          
        </div>
        <div className="cc-form">
          <div className="c-container" id="c-container">
            <div className="form-container sign-up-container">
              <form ref={form}
               onSubmit={sendEmail} className="c-form-content">
                <h1>Send Your Message</h1>
                <div className="social-container">
                  <a href="#" className="social">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="social">
                    <FaFacebookF />
                  </a>
                </div>
                <span></span>
                <input type="text" placeholder="Name" 
                name='user_name'
                value={name}
                onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Company " 
                name='user_company'
                value={company}
                onChange={(e) => setCompany(e.target.value)}/>
                <input type="text" placeholder="Phone No" 
                name='user_phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}/>
                <input type="email" placeholder="Email" 
                name='user_email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <textarea placeholder="Message" 
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type='submit' value='Send' className="c-button">Send</button>
                
              </form>
            </div>
            <div className="form-container sign-in-container">
            <form ref={form}
               onSubmit={sendEmail} className="c-form-content">
                <h1>Send Your Message</h1>
                <div className="social-container">
                  <a href="#" className="social">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="social">
                    <FaFacebookF />
                  </a>
                </div>
                <span></span>
                <input type="text" placeholder="Name" 
                name='user_name'
                value={name}
                onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Company " 
                name='user_company'
                value={company}
                onChange={(e) => setCompany(e.target.value)}/>
                <input type="text" placeholder="Phone No" 
                name='user_phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}/>
                <input type="email" placeholder="Email" 
                name='user_email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <textarea placeholder="Message" 
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type='submit' value='Send' className="c-button">Send</button>
                
              </form>
            </div>
            <div className="c-overlay-container">
              <div className="c-overlay">
                <div className="c-overlay-panel c-overlay-left">
                  <h1>Contact Now! </h1>
                  <p>
                  Embark on a journey of unrivaled maritime excellence. Contact us now to experience firstrate ship hull cleaning services
                  </p>
                  <button className="ghost cc-button" id="signIn">
                    <AiOutlineMenuFold/>
                  </button>
                </div>
                <div className="c-overlay-panel c-overlay-right">
                  <h1>Want to Collaborate?</h1>
                  <p>
                  Excited to explore more? Dont hesitate to get in touch and lets make your vision a reality! Drop your message now.                  </p>
                  <button className="ghost cc-button" id="signUp">
                    <AiOutlineMenuUnfold/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
