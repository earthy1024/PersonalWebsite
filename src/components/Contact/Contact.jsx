import styles from './Contact.module.css';

function Contact({ email, phone, location }) {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>Contact</h2>

      <div className={styles.content}>
        <div className={styles.item}>
          <span className={styles.label}>Email:</span>
          <a href={`mailto:${email}`} className={styles.emailLink}>
            {email}
          </a>
        </div>

        <div className={styles.item}>
          <span className={styles.label}>Phone:</span>
          <span className={styles.value}>{phone}</span>
        </div>

        <div className={styles.item}>
          <span className={styles.label}>Location:</span>
          <span className={styles.value}>{location}</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
