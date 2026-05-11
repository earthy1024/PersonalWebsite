import styles from './Footer.module.css';

function Footer({ socialLinks, name }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <ul className={styles.socialLinks}>
          {(socialLinks || []).map((link) => (
            <li key={link.platform} className={styles.socialItem}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {link.platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
