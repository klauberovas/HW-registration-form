import './index.css';
import { useState, useEffect } from 'react';
import userLogo from './user.svg';

interface User {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const Registration: React.FC = () => {
  const [user, setUser] = useState<User>({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user.email.includes('@') && user.username === '') {
      setUser({
        ...user,
        username: user.email.slice(0, user.email.indexOf('@')),
      });
    }
  }, [user.email]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (user.password !== user.passwordConfirm) {
      return alert('Hesla se neshodují!');
    }
    setUser({ username: '', email: '', password: '', passwordConfirm: '' });
    console.log(user);
  };

  return (
    <div className="registration">
      <h2 className="registration__title">REGISTRATION</h2>
      <form onSubmit={handleSubmit} className="registration__form">
        <img className="registration__logo" src={userLogo} alt="logo" />

        <label>
          Email Address: *
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            type="email"
            required
          ></input>
        </label>
        <label>
          User Name: *
          <input
            name="username"
            value={user.username}
            onChange={handleChange}
            type="text"
            required
          ></input>
        </label>
        <label>
          Password: *
          <input
            name="password"
            value={user.password}
            onChange={handleChange}
            type="password"
            required
          ></input>
        </label>
        <label>
          Confirm Password: *
          <input
            name="passwordConfirm"
            value={user.passwordConfirm}
            onChange={handleChange}
            type="password"
            required
          ></input>
        </label>
        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
};
