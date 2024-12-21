// src/pages/LoginPage.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // API'ye gönderilecek kullanıcı verileri
    const userCredentials = { email, password };

    try {
      // Backend API'den cevap al (örneğin, login API endpoint'i)
      const response = await fetch('https://6762b2ef46efb37323759854.mockapi.io/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userCredentials),
      });

      if (response.ok) {
        const userData = await response.json();

        // Kullanıcı bilgilerini Redux state'ine ekle
        dispatch(setUser(userData));

        // Giriş başarılıysa ContactsPage'e yönlendir
        navigate('/contacts');
      } else {
        alert('Giriş başarısız! Lütfen bilgilerinizi kontrol edin.');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Şifre:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default LoginPage;
