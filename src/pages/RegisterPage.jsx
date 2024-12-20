import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';  // Redux ile kullanıcı bilgisini güncellemek için
import { setUser } from '../redux/user/userSlice'; // Kullanıcı verisini redux'a kaydetmek

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = { username, email, password };

    try {
      // API'ye POST isteği gönderme
      const response = await axios.post('https://6762b2ef46efb37323759854.mockapi.io/contacts', userData);
console.log('API yanıtı:', response);
      // Kullanıcı kaydı başarılı ise, kullanıcıyı login sayfasına yönlendir
     if (response.status === 201) {
    dispatch(setUser(response.data));
    navigate('/login');
      }
    } catch (err) {
  console.error('Hata:', err);
  setError('Kayıt sırasında bir hata oluştu!');
    }
  };

  return (
    <div>
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Kullanıcı Adı</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-posta</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
};

export default RegisterPage;
