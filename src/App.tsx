/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import AuthForms from "./pages/authentication/Auth/Auth";
import ChatBot from "./pages/Dashboard/ChatBot/ChatBot";

function App() {
  const [user, setUser] = useState<any>(null);
  const [isClick, setIsClick] = useState<boolean>(false);
  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [isClick]);
  const googleLogin = () => {};
  const PaswordRegister = (data: any) => {
    localStorage.setItem("user", data);
    setIsClick(true);
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {user ? (
        <ChatBot />
      ) : (
        <AuthForms onGoogleLogin={googleLogin} onSubmit={PaswordRegister} />
      )}
    </div>
  );
}

export default App;
