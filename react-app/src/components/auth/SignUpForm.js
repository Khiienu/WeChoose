import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './signup.css';
const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if(password !== repeatPassword){
      setErrors(["Passwords do not match"])
    }
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="wrapper-signup">
      <form className="form" onSubmit={onSignUp}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="form-1">
          <label className="form-2">User Name</label>
          <input
            className="form-inputs"
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
            maxLength='15'
          />
        </div>
        <div className="form-1">
          <label className="form-2">Email</label>
          <input
            className="form-inputs"
            type='email'
            name='email'
            onChange={updateEmail}
            value={email}
          />
        </div>
        <div className="form-1">
          <label className="form-2">Password</label>
          <input
            className="form-inputs"
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          />
        </div>
        <div className="form-1">
          <label className="form-2">Repeat Password</label>
          <input
            className="form-inputs"
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          />
        </div>
        <div>
          <button className="button" type='submit'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
