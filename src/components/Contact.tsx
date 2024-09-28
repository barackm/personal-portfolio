import React, { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { FiFacebook, FiPhone, FiInstagram, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./common/Input";
import Texterea from "./common/Texterea";
import SubmitBtn from "./common/SubmitBtn";
import axios from "axios";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setIsSubmitting(true);
      await axios.post("https://formspree.io/f/xyylpkll", data, {
        headers: {
          Accept: "application/json",
        },
      });

      setIsSubmitSuccessful(true);
      reset();
      setValue("name", "");
      setValue("email", "");
      setValue("subject", "");
      setValue("message", "");
    } catch (error) {
      alert("There was an error sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => {
        setIsSubmitSuccessful(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful]);

  return (
    <div className='contact-page-main-container' id='contact'>
      <div className='contact-page-wrapper'>
        <div className='contact-details-wrapper'>
          <div className='home-hello-wrapper' data-aos='fade-down'>
            <div className='hello-line'></div>
            <h3 className='hero-hello'>Contact me</h3>
          </div>
          <h2 className='slogan' data-aos='fade-down'>
            Let's do it together
          </h2>

          <p className='about-work' data-aos='fade-down'>
            Question, comment or concern? this contact form is the best way to get in touch with me.
          </p>

          <div className='contact-address-wrapper'>
            <ul>
              <li data-aos='fade-down-right'>
                <a href='#f'>
                  <div className='address-icon-wrapper'>
                    <FaMapMarkerAlt />
                  </div>
                  Kigali - Rwanda
                </a>
              </li>
              <li data-aos='fade-down-right'>
                <a href='mailto:barackmukelenga100@gmail.com'>
                  <div className='address-icon-wrapper'>
                    <BsEnvelope />
                  </div>
                  barackmukelenga100@gmail.com
                </a>
              </li>
              <li data-aos='fade-down-right'>
                <a href='tel:+250780083122'>
                  <div className='address-icon-wrapper'>
                    <FiPhone />
                  </div>
                  +250 (0) 780-083-122
                </a>
              </li>
            </ul>
          </div>
          <div className='contact-links-wrapper'>
            <ul>
              <li data-aos='fade-right'>
                <a href='https://www.facebook.com/freddy.fumba.7/' target='_blank' rel='noopener noreferrer'>
                  <FiFacebook />
                </a>
              </li>
              <li data-aos='fade-right'>
                <a href='https://www.instagram.com/barackmukelenga/' target='_blank' rel='noopener noreferrer'>
                  <FiInstagram />
                </a>
              </li>
              <li data-aos='fade-right'>
                <a href='https://github.com/barackm' target='_blank' rel='noopener noreferrer'>
                  <FiGithub />
                </a>
              </li>
              <li data-aos='fade-right'>
                <a href='https://twitter.com/BarackMukelenga' target='_blank' rel='noopener noreferrer'>
                  <FiTwitter />
                </a>
              </li>
              <li data-aos='fade-right'>
                <a href='https://www.linkedin.com/in/baraka-mukelenga/' target='_blank' rel='noopener noreferrer'>
                  <FiLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {isSubmitSuccessful && (
          <div className='contact-form-wrapper redirect-form-contact'>
            <div className='form-submission-message'>Thanks for staying in touch! 😍 😍 😍 😍</div>
          </div>
        )}

        {!isSubmitSuccessful && (
          <div className='contact-form-wrapper' data-aos='fade-left'>
            <form onSubmit={handleSubmit(onSubmit)} className={`form-content ${isSubmitSuccessful ? "hidden" : ""}`}>
              <Input placeholder='Name' name='name' control={control} error={errors.name?.message} />
              <Input placeholder='Email address' name='email' control={control} error={errors.email?.message} />
              <Input placeholder='Subject' name='subject' control={control} error={errors.subject?.message} />
              <Texterea placeholder='Message' name='message' control={control} error={errors.message?.message} />
              <SubmitBtn message={isSubmitting ? "Sending..." : "Send"} />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
