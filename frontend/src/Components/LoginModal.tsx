import React, { useState } from 'react';
import './LoginModal.css';

interface LoginModalProps {
  parentCallback: (childData: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ parentCallback }) => {
  const registeredUser = 'viktor';
  const registeredPassword = 'passpass';

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);

  function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (username === registeredUser && password === registeredPassword) {
      setIsLogin(true);
      parentCallback(true);
      console.log('Login successful');
    }
  }

  return (
    <>
      <div className="backdrop">
        <div className="loginForm">
          <h1 className="login">Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
