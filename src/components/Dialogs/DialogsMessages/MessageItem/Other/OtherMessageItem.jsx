import React from 'react';
import commonStyles from '../MessageItem.module.css';
import otherStyles from './OtherMessageItem.module.css';

const OtherMessageItem = (props) => {
  return (
    <div className={commonStyles.message__item + ' ' + otherStyles.message__item_other}>
      <div className={commonStyles.message__text + ' ' + otherStyles.message__text_other}>
        <p>{props.text}</p>
      </div>
      <img src="https://eng.mnogonotka.com/wp-content/uploads/2019/12/elman-leti-in.jpg" alt="ava" />
    </div>
  );
}

export default OtherMessageItem;