import React from 'react';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
  console.log("rerender");
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"input"} type={"text"} name={"login"} placeholder={"Login"} />
      </div>
      <div>
        <Field component={"input"} type={"password"} name={"password"} placeholder={"Password"} />
      </div>
      <div>
        <Field component={"input"} type={"checkbox"} name={"rememberMe"} />
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