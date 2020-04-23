import React from 'react';
import styles from './Dialogs.module.css'
import DialogsUsers from './DialogsUsers/DialogsUsers';

const Dialogs = (props) => {
  return(
    <div>
      <h3 className={styles.header}>Dialogs</h3>

      <div className={styles.dialogues}>

        <DialogsUsers />

        <div className={styles.dialogues__messages}>
          <div className={styles.message__item + ' ' + styles.message__item_my}>
            <img src="https://eng.mnogonotka.com/wp-content/uploads/2019/12/elman-leti-in.jpg" alt="ava" />
            <div className={styles.message__text + ' ' + styles.message__text_my}>
              <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.</p>
            </div>
          </div>

          <div className={styles.message__item + ' ' + styles.message__item_other}>
            <div className={styles.message__text + ' ' + styles.message__text_other}>
              <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.</p>
            </div>
            <img src="https://eng.mnogonotka.com/wp-content/uploads/2019/12/elman-leti-in.jpg" alt="ava" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dialogs;