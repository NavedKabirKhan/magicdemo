import styles from './contactUs.module.css'

const ContactUs = () => {
  return (
    <>
      <div className={styles.contactUs}>
        <h2>Contact Us</h2>
        <div className={styles.contactDetailsContainer}>
          <p>You may contact us using the information below:</p>
          <div className={styles.contactDetails}>
            <ul className={styles.contactUl}>
              <li>
                <span>Merchant Legal entity name: </span>SPURATV TECHNOLOGIES PRIVATE LIMITED
              </li>
              <li>
                <span>Registered Address: </span>43, SOUTH RAJMOHALLA, INDORE, INDORE, MADHYA
                PRADESH, 452002, INDORE, MADHYA PRADESH, PIN: 452002
              </li>
              <li>
                <span>Operational Address: </span>43, SOUTH RAJMOHALLA, INDORE, INDORE, MADHYA
                PRADESH, 452002, INDORE, MADHYA PRADESH, PIN: 452002
              </li>
              <li>
                <span>Telephone No: </span>+91 8103788123
              </li>
              <li>
                <span>E-Mail ID: </span>hello@magictable.in
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs;
