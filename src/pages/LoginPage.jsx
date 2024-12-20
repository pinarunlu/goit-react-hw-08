import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Geçersiz e-posta adresi").required("E-posta gereklidir"),
    password: Yup.string().min(6, "Şifre en az 6 karakter olmalıdır").required("Şifre gereklidir"),
  });

  const handleSubmit = async (values) => {
    try {
      // API'ye gönderilecek kullanıcı verileri
      const userCredentials = { email: values.email, password: values.password };

      const response = await fetch("YOUR_BACKEND_API_URL/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      if (response.ok) {
        const userData = await response.json();

        // Kullanıcı bilgilerini Redux state'ine ekle
        dispatch(setUser(userData));

        // Giriş başarılıysa ContactsPage'e yönlendir
        navigate("/contacts");
      } else {
        alert("Giriş başarısız! Lütfen bilgilerinizi kontrol edin.");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Giriş Yap</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">E-posta</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Şifre</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Giriş Yap</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
