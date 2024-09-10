import { useState } from 'react';
import axios from 'axios';
import './Login.css';
import logomeet from '../Assets/LogoMeetus/meetus.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await axios.post('https://api-yeshtery.dev.meetusvr.com/v1/yeshtery/token', {
        email: email,
        password: password,
        isEmployee: true
      });

      if (response.status === 200) {
        const { token } = response.data;

        document.cookie = `authToken=${token}; HttpOnly`;

        const userInfo = await axios.get('https://api-yeshtery.dev.meetusvr.com/v1/user/info', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (userInfo.status === 200) {
          const { id, name } = userInfo.data;

          console.log(`User: ${name}, ID: ${id}`);
        }
      }
    } catch (err) {
      setError('Invalid credentials or error in authentication.');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='LoginCard'>

      <div className='LogoLogin'>
        <img src={logomeet} alt="Logo"  className='Meetuslogo'/>
      </div>

      <div className='Welcome'>

        <div className='LineOne'><span>Welcome back</span></div>
        <div className='LineTwo'><span>Step into the metaverse for an unforgettable experience</span></div>

        <form className='FormLogin' onSubmit={handleLogin}>
          <input type='text' className='mail' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Mail"/>
          <input type='password' className='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button className='loginbtn' type="submit" disabled={!email || !password || loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {error && <div className='error'>{error}</div>}

        <div className='Donthaveacc'>
          <span>Don't have an account? <span className='Signup'>Sign up</span></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
