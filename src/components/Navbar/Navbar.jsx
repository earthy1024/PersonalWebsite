import { useState } from 'react';
import { scrollToSection } from '../../utils/smoothScroll';
import styles from './Navbar.module.css';

function Navbar({ sections }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleKeyDown = (event, sectionId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleLinkClick(sectionId);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <div className={styles.container}>
        <span className={styles.brand}>Prithvi Dharmaraj</span>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          type="button"
        >
          <span className={styles.hamburgerBar} aria-hidden="true"></span>
          <span className={styles.hamburgerBar} aria-hidden="true"></span>
          <span className={styles.hamburgerBar} aria-hidden="true"></span>
        </button>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          {(sections || []).map((section) => (
            <li key={section.id} className={styles.navItem}>
              <a
                href={`#${section.id}`}
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(section.id);
                }}
                onKeyDown={(e) => handleKeyDown(e, section.id)}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
