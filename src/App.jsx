import profileData from './data/profile.json';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  return (
    <div className={styles.app}>
      <header>
        <Navbar sections={sections} />
      </header>
      <main className={styles.main}>
        <section id="hero">
          <Hero
            name={profileData.name}
            title={profileData.title}
            summary={profileData.summary}
            socialLinks={profileData.socialLinks}
          />
        </section>
        <section id="experience">
          <Experience roles={profileData.experience} />
        </section>
        <section id="skills">
          <Skills categories={profileData.skills} />
        </section>
        <section id="education">
          <Education
            degrees={profileData.education.degrees}
          />
        </section>
        <section id="certifications">
          <Certifications
            certifications={profileData.education.certifications}
          />
        </section>
        <section id="contact">
          <Contact
            email={profileData.contact.email}
            phone={profileData.contact.phone}
            location={profileData.contact.location}
          />
        </section>
      </main>
      <footer>
        <Footer
          socialLinks={profileData.socialLinks}
          name={profileData.name}
        />
      </footer>
    </div>
  );
}

export default App;
