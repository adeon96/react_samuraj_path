import React from 'react';
import styles from './About.module.css';

const About = () => {
  return(
    <div className={styles.about}>
      <img src="https://lookyourbestbeyourbest.files.wordpress.com/2011/11/image-3.jpeg" alt="ava" />

      <div className={styles.about__info}>
        <h2 className={styles.about__info__name}>Ivan Ivanov</h2>

        <div className={styles.info__keys}>
          <p>Birth:</p>
          <p>City:</p>
          <p>Website:</p> 
          <p>Email:</p>
        </div>

        <div className={styles.info__values}>
          <p>28 October 1990</p>
          <p>Warsaw</p>
          <p>www.visitme.pl</p>
          <p>vasya123@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default About;