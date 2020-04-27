import React from 'react';
import commonStyles from '../MessageItem.module.css';
import myStyles from './MyMessageItem.module.css';

const MyMessageItem = (props) => {
  return (
    <div className={commonStyles.message__item + ' ' + myStyles.message__item_my}>
      <img src="https://eng.mnogonotka.com/wp-content/uploads/2019/12/elman-leti-in.jpg" alt="ava" />
      <div className={commonStyles.message__text + ' ' + myStyles.message__text_my}>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default MyMessageItem;