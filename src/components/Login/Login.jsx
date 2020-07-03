import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormElement } from '../commom/FormElements';
import { required } from '../../utils/validators';

const Input = FormElement("input");

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} type={"text"} name={"login"} placeholder={"Login"}
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
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = () => {

  const onFormSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div>
      <h3>Login</h3>
      <LoginReduxForm onSubmit={onFormSubmit} />
    </div>
  )
}

export default Login;