import React from 'react';
import styles from './About.module.css';
import Preloader from '../../commom/Preloader';
import defaultImg from '../../../assets/img/user_placeholder.jpg';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const About = (props) => {

  return (
    <div className={styles.about}>
      {props.isFetching ? <Preloader /> : ''}

      <div className={styles.user_profile}>
        <div className={styles.user_contacts}>

          {props.state.contacts.facebook ?
            <a href={props.state.contacts.facebook} target="_blank" rel="noopener noreferrer">Fb</a> : ''
          }
          {props.state.contacts.website ?
            <a href={props.state.contacts.website} target="_blank" rel="noopener noreferrer">ws</a> : ''
          }
          {props.state.contacts.vk ?
            <a href={props.state.contacts.vk} target="_blank" rel="noopener noreferrer">vk</a> : ''
          }
          {props.state.contacts.twitter ?
            <a href={props.state.contacts.twitter} target="_blank" rel="noopener noreferrer">tw</a> : ''
          }

          {props.state.contacts.instagram ?
            <a href={props.state.contacts.instagram} target="_blank" rel="noopener noreferrer">ig</a> : ''
          }
          {props.state.contacts.youtube ?
            <a href={props.state.contacts.youtube} target="_blank" rel="noopener noreferrer">YT</a> : ''
          }
          {props.state.contacts.github ?
            <a href={props.state.contacts.github} target="_blank" rel="noopener noreferrer">Gh</a> : ''
          }
          {props.state.contacts.mainLink ?
            <a href={props.state.contacts.mainLink} target="_blank" rel="noopener noreferrer">ml</a> : ''
          }
        </div>

        <div className={styles.user_photo_name}>
          <img src={props.state.photos.large ? props.state.photos.large : defaultImg} alt="ava" />
          <h4>{props.state.fullName}</h4>
        </div>

        <div className={styles.user_info}>
          <div className={styles.about_user}>
            <ProfileStatus status={props.state.aboutMe} />       
          </div>

          <div className={styles.about_user_job}>
            <p>Looking for a job: {props.state.lookingForAJob ? 'Yes' : 'No'}</p>
            <p>{props.state.lookingForAJobDescription}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;