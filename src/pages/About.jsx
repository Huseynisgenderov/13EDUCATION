import { useTranslation } from 'react-i18next';
import "./universities.scss";


const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>{t('about.title')}</h1>
          <p>{t('about.description')}</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Journey in Global Education</h2>
              <p>For over a decade, 13education has been at the forefront of international education, helping thousands of students achieve their dreams of studying abroad. Our journey began with a simple mission: to bridge the gap between ambitious students and world-class educational institutions.</p>
              <p>We understand that choosing to study abroad is one of the most significant decisions in a student's life. That's why our team of experienced education counselors provides personalized guidance throughout the entire process, from university selection to visa application.</p>
              <p>Our partnerships with prestigious universities across the globe ensure that our students have access to the best educational opportunities. We take pride in our success rate, with over 95% of our students successfully securing admissions to their preferred universities.</p>
              <p>What sets us apart is our commitment to providing comprehensive support beyond just admissions. We offer extensive pre-departure orientation, cultural adaptation workshops, and continuous support throughout the student's academic journey.</p>
              <p>Our team consists of professionals who have themselves studied abroad, bringing first-hand experience and insights to guide our students. We regularly update our knowledge base and maintain strong relationships with universities to stay current with admission requirements and opportunities.</p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Students studying abroad" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About