import styles from './Education.module.css';

function Education({ degrees }) {
  return (
    <section id="education" className={styles.education}>
      <h2 className={styles.heading}>Education</h2>

      <div className={styles.grid}>
        {(degrees || []).map((degree) => (
          <div key={degree?.institution} className={styles.card}>
            <div className={styles.cardHeader}>
              {degree?.logo && (
                <img
                  src={degree.logo}
                  alt={`${degree.institution} logo`}
                  className={styles.logo}
                />
              )}
              <div>
                <h3 className={styles.institution}>{degree?.institution}</h3>
                <p className={styles.date}>{degree?.graduationDate}</p>
              </div>
            </div>
            <p className={styles.degree}>{degree?.degree}</p>
            {degree?.minor && (
              <p className={styles.minor}>Minor: {degree.minor}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
