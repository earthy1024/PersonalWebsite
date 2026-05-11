import styles from './Skills.module.css';

function Skills({ categories }) {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.grid}>
        {(categories || []).map((category) => (
          <div key={category.name} className={styles.card}>
            <h3 className={styles.categoryName}>{category.name}</h3>
            <ul className={styles.skillList}>
              {(category.skills || []).map((skill) => (
                <li key={skill} className={styles.skillItem}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
