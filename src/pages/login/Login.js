import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { axiosClient } from '../../api/axios';
import { Logo } from '../../assets/imgs';
import ButtonCT from '../../components/buttonCT/ButtonCT';
import auth from '../../store/auth';
import './login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    if (username !== '' && password !== '') {
      setLoading(true);
      axiosClient.post('/auth/login', {
        username,
        password
      }).then((res) => {
        auth.loginSuccess(res?.content);
        setLoading(false);
        navigate('/home')
      }).catch((err) => {
        alert(err?.error?.message);
        setLoading(false);
      })
    } else {
      alert('Vui lòng nhập username và password')
    }
  }

  return (
    <div className='login'>
      <div className='login__content'>
        <img className='login__img' src={Logo} alt="" />
      
        <h2 className='login__title'>Đăng nhập</h2>

        <input required onChange={e => setUsername(e.target.value)} className='login__input' type="text" placeholder='Nhập username' />
        <input required onChange={e => setPassword(e.target.value)} className='login__input' type="password" placeholder='Nhập password' />
      
        <ButtonCT loading={isLoading} onClick={handleLogin} large primary className='login__btn'>
          Đăng nhập
        </ButtonCT>
      </div>
    </div>
  );
}

export default Login;
