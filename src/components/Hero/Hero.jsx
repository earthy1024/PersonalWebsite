import styles from './Hero.module.css';

function Hero({ name, title, summary, socialLinks }) {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.title}>{title}</p>
        <p className={styles.summary}>{summary}</p>
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
    </div>
  );
}

export default Hero;
