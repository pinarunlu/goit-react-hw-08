// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';

const App = () => {
  return (
    <Provider store={store}>  {/* Redux store'ını tüm uygulama ile paylaş */}
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
