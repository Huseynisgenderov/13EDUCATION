import { useTranslation } from 'react-i18next';
import "../styles/main.scss";

const Universities = () => {
  const { t } = useTranslation();

  const universities = [
    {
      name: "University of Oxford",
      country: "United Kingdom",
      image: "https://images.unsplash.com/photo-1580977251946-3029f4d8d9f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Founded in 1096, Oxford is the oldest university in the English-speaking world and consistently ranks among the world's top institutions. Known for its tutorial-based teaching method and research excellence across disciplines.",
      programs: ["Medicine", "Law", "Engineering", "Business", "Arts & Humanities"],
      features: [
        "Tutorial-based teaching system",
        "38 independent colleges",
        "World-class research facilities",
        "Historic architecture and libraries"
      ],
      admissionRequirements: "Highly competitive admission process requiring exceptional academic records, standardized test scores, and demonstrated passion in chosen field."
    },
    {
      name: "Harvard University",
      country: "United States",
      image: "https://images.unsplash.com/photo-1583889659384-84213c4c4e7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Established in 1636, Harvard is America's oldest institution of higher learning. Known for its excellence in research, teaching, and producing global leaders across various fields.",
      programs: ["Business", "Law", "Medicine", "Computer Science", "Liberal Arts"],
      features: [
        "Extensive research opportunities",
        "Distinguished faculty members",
        "State-of-the-art facilities",
        "Strong alumni network"
      ],
      admissionRequirements: "Highly selective admission process considering academic excellence, extracurricular achievements, and personal qualities."
    },
    {
      name: "University of Tokyo",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1565311741360-47a8b6c6598c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Japan's most prestigious university, combining traditional Japanese values with cutting-edge research and innovation. Known for its strong STEM programs and research output.",
      programs: ["Engineering", "Science", "Medicine", "Economics", "Literature"],
      features: [
        "Leading research institution in Asia",
        "Strong industry connections",
        "Cultural exchange programs",
        "Modern research facilities"
      ],
      admissionRequirements: "Competitive entrance examinations, with special programs for international students including English-taught degrees."
    },
    {
      name: "ETH Zurich",
      country: "Switzerland",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Founded in 1855, ETH Zurich is one of the world's leading universities in science and technology, known for its cutting-edge research and innovation.",
      programs: ["Engineering", "Architecture", "Computer Science", "Natural Sciences", "Mathematics"],
      features: [
        "Research-focused education",
        "Innovation hub",
        "International environment",
        "Strong industry partnerships"
      ],
      admissionRequirements: "Selective admission process with strong emphasis on mathematics and science backgrounds."
    }
  ];

  return (
    <div className="universities-page">
      <section className="universities-hero">
        <div className="container">
          <h1>{t('universities.title')}</h1>
          <p>{t('universities.description')}</p>
        </div>
      </section>

      <section className="universities-detail-section">
        <div className="container">
          {universities.map((university, index) => (
            <div key={index} className="university-detail-card">
              <div className="university-image">
                <img src={university.image} alt={university.name} />
              </div>
              <div className="university-content">
                <h2>{university.name}</h2>
                <p className="country">{university.country}</p>
                <p className="description">{university.description}</p>
                
                <h3>Programs Offered</h3>
                <ul className="programs-list">
                  {university.programs.map((program, idx) => (
                    <li key={idx}>{program}</li>
                  ))}
                </ul>

                <h3>Key Features</h3>
                <ul className="features-list">
                  {university.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <h3>Admission Requirements</h3>
                <p>{university.admissionRequirements}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Universities;