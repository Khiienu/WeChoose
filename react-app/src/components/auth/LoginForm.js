import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './login.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="wrapper">
      <div className="form">
        <form onSubmit={onLogin}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className="form-1">
            <label className="form-2" htmlFor='email'>Email</label>
            <input
              className="form-inputs"
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className="form-1">
            <label className="form-2" htmlFor='password'>Password</label>
            <input
              className="form-inputs"
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
          </div>
          <button className="button" type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
