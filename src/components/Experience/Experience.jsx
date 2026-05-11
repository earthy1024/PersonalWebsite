import styles from './Experience.module.css';

function Experience({ roles }) {
  const roleList = roles || [];

  return (
    <div className={styles.experience}>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.timeline}>
        {roleList.map((role, index) => {
          const previousRole = roleList[index - 1];
          const isSameCompany = previousRole?.company === role?.company;

          return (
            <article
              key={role?.id || index}
              className={`${styles.role} ${isSameCompany ? styles.sameCompany : styles.differentCompany}`}
            >
              <h3 className={styles.company}>{role?.company}</h3>
              {role?.department && (
                <p className={styles.department}>{role.department}</p>
              )}
              <p className={styles.title}>{role?.title}</p>
              <p className={styles.dateRange}>
                {role?.startDate} – {role?.endDate}
              </p>
              <div className={styles.description}>
                {(role?.accomplishments || []).map((item, i) => (
                  <p key={i} className={styles.paragraph}>{item}</p>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
