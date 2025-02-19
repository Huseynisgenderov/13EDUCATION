import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  const { t } = useTranslation();

  const universities = [
    {
      name: "Trento University",
      country: "Italy",
      image: "https://www.iperionhs.eu/wp-content/uploads/2020/06/Trento1.jpg",
      description: "Free education, Without exam and IELTS"
    },
    {
      name: "Messina University",
      country: "Italy",
      image: "https://applyitaly.gammaskynet.az/storage/about/f2qjXUk0skFXYAmd61EtmBc2rrV6t3N6dNfQzoOW.jpg",
      description: "Free education, Without exam and IELTS"
    },
    {
      name: "Roma La Sapienza",
      country: "Italy",
      image: "https://d3w13n53foase7.cloudfront.net/medium_fef65ac7_e9b2_4573_983c_c8422961073e_archivio_di_stato_di_roma_panoramio_bc5e3c7fa4.jpg",
      description: "Free education, Without exam and IELTS"
    },
    {
      name: "ETH Zurich",
      country: "Switzerland",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "A world leader in technology and natural sciences education."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Thanks to 13education, I'm now studying at my dream university!",
      university: "Oxford University",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Muhammad Ahmed",
      text: "The guidance I received was invaluable for my academic journey.",
      university: "Harvard University",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Priya Patel",
      text: "Excellent support throughout the entire application process.",
      university: "ETH Zurich",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Muhammad Ahmed",
      text: "The guidance I received was invaluable for my academic journey.",
      university: "Harvard University",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },,
    {
      name: "Muhammad Ahmed",
      text: "The guidance I received was invaluable for my academic journey.",
      university: "Harvard University",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>
          <button className="cta-button">{t('hero.cta')}</button>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>{t('about.title')}</h2>
          <p>{t('about.description')}</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>{t('services.title')}</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>{t('services.counseling')}</h3>
            </div>
            <div className="service-card">
              <h3>{t('services.visa')}</h3>
            </div>
            <div className="service-card">
              <h3>{t('services.admission')}</h3>
            </div>
            <div className="service-card">
              <h3>{t('services.test')}</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="universities-section">
        <div className="container">
          <h2>{t('universities.title')}</h2>
          <p>{t('universities.description')}</p>
          <div className="universities-grid">
            {universities.map((university, index) => (
              <div key={index} className="university-card">
                <div className="university-image">
                  <img src={university.image} alt={university.name} />
                </div>
                <div className="university-content">
                  <h3>{university.name}</h3>
                  <p className="country">{university.country}</p>
                  <p>{university.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>{t('testimonials.title')}</h2>
          <p>{t('testimonials.description')}</p>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <h4>{testimonial.name}</h4>
                  <p className="university">{testimonial.university}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Home;