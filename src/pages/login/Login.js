import React, { useState } from 'react';
import { Logo } from '../../assets/imgs';
import ButtonCT from '../../components/buttonCT/ButtonCT';
import auth from '../../store/auth';
import './login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(username, password);

    auth.loginSuccess();
  }

  return (
    <div className='login'>
      <div className='login__content'>
        <img className='login__img' src={Logo} alt="" />
      
        <h2 className='login__title'>Đăng nhập</h2>

        <input onChange={e => setUsername(e.target.value)} className='login__input' type="text" placeholder='Nhập username' />
        <input onChange={e => setPassword(e.target.value)} className='login__input' type="text" placeholder='Nhập password' />
      
        <ButtonCT onClick={handleLogin} large primary className='login__btn'>
          Đăng nhập
        </ButtonCT>
      </div>
    </div>
  );
}

export default Login;
