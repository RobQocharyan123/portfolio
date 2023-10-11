import React, { useRef } from "react";
import "./Contact.css";

import emailjs from "@emailjs/browser";
import { MdLocationOn } from "react-icons/md";
import { FcPhoneAndroid } from "react-icons/fc";
import { IconButton } from "@mui/material";
import {
  BsEnvelopeFill,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="main_contact">
        <div className="message_us">
          <h1>Send Message Us</h1>
          <ContactUs />
        </div>
        <div className="get_in_touch">
          <h1>Get in Touch</h1>
          <div className="get_text">
            <p></p>
            <ul>
              <li>
                <span>
                  <MdLocationOn />
                </span>
                <a href="https://www.google.com/maps/place/%D0%95%D1%80%D0%B5%D0%B2%D0%B0%D0%BD/@40.1703293,44.5338987,13.5z/data=!4m6!3m5!1s0x406aa2dab8fc8b5b:0x3d1479ae87da526a!8m2!3d40.1872023!4d44.515209!16zL20vMDg4OWQ?entry=ttu">
                  Yerevan Armenia
                </a>
              </li>
              <li>
                <span>
                  <FcPhoneAndroid />
                </span>
                <a href="#tel:(+374)-94-381-555">(+374)-94-381-555</a>
              </li>
              <li>
                <span>
                  <BsEnvelopeFill />
                </span>

                <a
                  href="#"
                  onClick={() =>
                    (window.location = "mailto: robkocharyan20@gmail.com")
                  }
                >
                  robkocharyan20@gmail.com
                </a>
              </li>
            </ul>
            <div className="icon">
              <IconButton
                aria-label="delete"
                size="large"
                href="https://www.facebook.com/robert.qocharyan.9/"
                target={"_blank"}
              >
                <BsFacebook />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="large"
                href="https://github.com/RobQocharyan123"
                target={"_blank"}
              >
                <BsGithub />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="large"
                href="https://www.instagram.com/qocharyan_1994/"
                target={"_blank"}
              >
                <BsInstagram />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="large"
                href="https://www.linkedin.com/in/robert-qocharyan-92a112243/"
                target={"_blank"}
              >
                <BsLinkedin />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v2m5sfg",
        "template_k0wufyw",

        form.current,
        "kr6ShacPOdQ_I379n"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Name" />
      <input type="email" name="user_email" placeholder="Email" />
      <textarea name="message" placeholder="Message" />
      <input type="submit" value="Send Us" className="button" />
    </form>
  );
}
