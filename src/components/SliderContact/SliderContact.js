import React from "react";
import { Link } from "react-router-dom";
import "./SliderContact.css";
const SliderContact = () => {
  const data = [
    { text: "الاسم بالكامل", classname: "fullname-field" },
    { text: "البريد الالكتروني", classname: "email-field" },
  ];
  return (
    <div className="slider-contact-component">
      <div className="slider-contanct-header">
        <p>اتصل بنا</p>
        <span>
          املأ النموذج أو أرسل بريدًا إلكترونيًا مباشرًا إلى:{" "}
          <Link to="#">arabiclibrary2017@gmail.com</Link>
        </span>
      </div>
      <div className="name-phone-fields fullname-email">
        {data.map((item, indx) => (
          <div key={indx} className="fields-label-input">
            <label>{item.text}</label>
            <input
              className={item.classname}
              type="text"
              placeholder={item.text}
            />
          </div>
        ))}
      </div>
      <div className="message-field discrption">
        <label>الوصف</label>
        <textarea name="الوصصف" placeholder="الوصف" />
      </div>
      <button className="submit-form send-form">ارسال</button>
    </div>
  );
};

export default SliderContact;
