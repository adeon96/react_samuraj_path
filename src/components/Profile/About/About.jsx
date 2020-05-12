import React from 'react';
import styles from './About.module.css';

const About = (props) => {

  return (
    <div className={styles.about}>
      <img src={props.state.photoURL} alt="ava" />

      <div className={styles.about__info}>
        <h2 className={styles.about__info__name}>{props.state.name}</h2>

        <div className={styles.info__keys}>
          <p>Birth:</p>
          <p>City:</p>
          <p>Website:</p>
          <p>Email:</p>
        </div>

        <div className={styles.info__values}>
          <p>{props.state.birth}</p>
          <p>{props.state.city}</p>
          <p>{props.state.website}</p>
          <p>{props.state.email}</p>
        </div>
      </div>
    </div>
  );
}

export default About;