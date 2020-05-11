import React from 'react';
import styles from './About.module.css';

const About = (props) => {

  let aboutData = props.store.getAboutData();

  return (
    <div className={styles.about}>
      <img src={aboutData.photoURL} alt="ava" />

      <div className={styles.about__info}>
        <h2 className={styles.about__info__name}>{aboutData.name}</h2>

        <div className={styles.info__keys}>
          <p>Birth:</p>
          <p>City:</p>
          <p>Website:</p>
          <p>Email:</p>
        </div>

        <div className={styles.info__values}>
          <p>{aboutData.birth}</p>
          <p>{aboutData.city}</p>
          <p>{aboutData.website}</p>
          <p>{aboutData.email}</p>
        </div>
      </div>
    </div>
  );
}

export default About;