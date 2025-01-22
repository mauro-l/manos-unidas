import { useState } from "react";
import LoginModal from "./LoginModal.jsx";

const LoginButton = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <button
        className="h-6 min-h-8 btn btn-outline"
        onClick={() => setIsLoginOpen(true)}
      >
        Entrar
      </button>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default LoginButton;
