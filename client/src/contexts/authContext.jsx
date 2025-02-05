import { createContext, useState, useEffect } from "react";
import { login as loginService } from "../services/authService.js";
import UserModel from "../models/userModel.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, contrasena) => {
    setLoading(true);
    try {
      const response = await loginService(email, contrasena);
      const userModel = UserModel.fromApiResponse(response);
      setUser(userModel);

      // Guardar token en localStorage
      localStorage.setItem("token", userModel.token);
    }  finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Aquí podrías intentar validar el token en el backend
      setUser((prev) => ({ ...prev, token }));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
