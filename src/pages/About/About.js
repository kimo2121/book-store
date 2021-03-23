import React from "react";
import PageHeader from "../../components/Page-Header/PageHeader";
import "./About.css";
const About = () => {
  return (
    <div className="about-page">
      <PageHeader Children={"من نحن"} />
      <div className="about-images">
        <img
          src="https://static.s123-cdn-static.com/uploads/969286/400_5a9962970aa6b.jpg"
          alt=""
        />
        <img
          src="https://static.s123-cdn-static.com/uploads/969286/400_5e7c23eb3f5d4.jpg"
          alt=""
        />
        <img
          src="https://static.s123-cdn-static.com/uploads/969286/400_5a9927572afdc.jpg"
          alt=""
        />
      </div>
      <div className="about-message">
        <span>رسالتنا في المكتبة العربية للنشر والتوزيع:</span>
        <br />
        <span>
          نشر كل إنتاج إبداعي ذي جودة عالية وأفكار أصيلة تعبر عن هويتنا العربية
          وتاريخنا العريق، تحترم قيم مجتمعنا ومعتقداته، ,لا تساعد في نشر العنف
          أو العنصرية، ترسّخ لمبدأ المساواة والحرية والعدالة.
        </span>
        <br />
        <span>
          والسعى نحو الارتقاء بالأدب العربي في كافة مجالاته، والوصول به نحو
          العالمية.
        </span>
      </div>
    </div>
  );
};

export default About;
