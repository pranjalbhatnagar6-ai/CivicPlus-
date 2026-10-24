import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

function CitizenLogin() {
  return (
    <>
      <Navbar />
      <LoginForm role="citizen" />
    </>
  );
}

export default CitizenLogin;