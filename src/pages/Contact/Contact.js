import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/Page-Header/PageHeader";
import * as FaIcons from "react-icons/fa";

import "./Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";
const Contact = () => {
  return (
    <div className="contact-page">
      <PageHeader Children="الاتصال" />
      <div className="contact-info-container">
        <div className="contact-address">
          <p>
            برادة، العمرانية الشرقية، قسم العمرانية، مصر بجوار التوحيد والنور
            ومدرسة التربية الحديثة للغات
          </p>
          <div className="number-icon">
            <Link>
              <FaIcons.FaPhoneAlt size={15} />
              01030365801 - واتس
            </Link>
          </div>
          <div className="number-icon">
            <Link>
              <FaIcons.FaPhoneAlt size={15} />
              01014977934 - واتس
            </Link>
          </div>
          <div className="number-icon">
            <Link>
              <FaIcons.FaRegEnvelope size={17} />
              arabiclibrary2017@gmail.com
            </Link>
          </div>
          <div className="our-facebook-url">
            <Link>
              <FaIcons.FaFacebookF size={32} />
            </Link>
          </div>
          <span> من 10 ص - 10 م</span>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
