import React from 'react';
import styles from './FormElements.module.css';

export const FormElement = (Element) => ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;

  return (
    <div>
      <Element className={hasError ? styles.formElement_error : ''} {...input} {...props} />

      {hasError && 
        <span className={styles.formElement_error_text}> {meta.error} </span>
      }
    </div>
  )
}