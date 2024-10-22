import AuthForms from "./pages/authentication/Auth/Auth";

function App() {
  const googleLogin = () => {};
  const emailLogin = () => {};
  return (
    // <ChatBot />
    // <Login />
    // <Register />
    <AuthForms onGoogleLogin={googleLogin} onSubmit={emailLogin} />
  );
}

export default App;
