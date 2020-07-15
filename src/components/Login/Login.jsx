import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormElement } from '../common/FormElements';
import { required } from '../../utils/validators';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from '../common/FormElements.module.css';

const Input = FormElement("input");

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} type={"text"} name={"email"} placeholder={"Email"}
        validate={[required]} />
      </div>
      <div>
        <Field component={Input} type={"password"} name={"password"} placeholder={"Password"}
        validate={[required]} />
      </div>
      <div>
        <Field component={Input} type={"checkbox"} name={"rememberMe"} />
        <span>Remember me</span>
      </div>
      <div>
        <button>Login</button>
      </div>

      {props.error &&
        <div className={styles.formSubmissionError}>
          {props.error}
        </div>
      }
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

  const onFormSubmit = (formData) => {
    props.loginUser(formData.email, formData.password, formData.rememberMe);
  }

  if(props.isAuth) {
    return(
      <Redirect to="/profile" />
    )
  }

  return ( 
    <div>
      <h3>Login</h3>
      <LoginReduxForm onSubmit={onFormSubmit} />
    </div>
  )
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

let mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password, rememberMe) => {
      dispatch(login(email, password, rememberMe))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);