import styles from './Education.module.css';

function Education({ degrees, certifications }) {
  return (
    <section id="education" className={styles.education}>
      <h2 className={styles.heading}>Education</h2>

      <div className={styles.grid}>
        {(degrees || []).map((degree) => (
          <div key={degree?.institution} className={styles.card}>
            <h3 className={styles.institution}>{degree?.institution}</h3>
            <p className={styles.degree}>{degree?.degree}</p>
            {degree?.minor && (
              <p className={styles.minor}>Minor: {degree.minor}</p>
            )}
            <p className={styles.date}>{degree?.graduationDate}</p>
          </div>
        ))}

        {(certifications || []).map((cert) => (
          <div key={cert?.name} className={styles.card}>
            <h3 className={styles.certName}>{cert?.name}</h3>
            <p className={styles.issuer}>{cert?.issuer}</p>
            <p className={styles.date}>{cert?.date}</p>
            {cert?.credlyUrl && (
              <a
                href={cert.credlyUrl}
                className={styles.badge}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Badge
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
