import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  const data = [
    { text: "الاسم", classname: "name-field" },
    { text: "الهاتف", classname: "phone-field" },
  ];
  return (
    <div className="contact-form-component">
      <div className="name-phone-fields">
        {data.map((item, indx) => (
          <input
            key={indx}
            className={item.classname}
            type="text"
            placeholder={item.text}
          />
        ))}
      </div>
      <div className="email-field">
        <input
          className="email-field"
          type="text"
          placeholder="البريد الالكتروني"
        />
      </div>
      <div className="message-field">
        <textarea name="الرسالة" placeholder="الرسالة" />
      </div>
      <button className="submit-form">اتصل بنا</button>
    </div>
  );
};

export default ContactForm;
