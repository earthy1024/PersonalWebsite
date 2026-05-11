import styles from './Certifications.module.css';

function Certifications({ certifications }) {
  return (
    <section id="certifications" className={styles.certifications}>
      <h2 className={styles.heading}>Certifications</h2>

      <div className={styles.grid}>
        {(certifications || []).map((cert) => (
          <div key={cert?.name} className={styles.card}>
            <div className={styles.cardHeader}>
              {cert?.logo && (
                <img
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  className={styles.logo}
                />
              )}
              <div>
                <h3 className={styles.certName}>{cert?.name}</h3>
                <p className={styles.issuer}>{cert?.issuer}</p>
              </div>
            </div>
            <p className={styles.date}>{cert?.date}</p>
            {cert?.credlyUrl && (
              <a
                href={cert.credlyUrl}
                className={styles.badge}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Badge →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
