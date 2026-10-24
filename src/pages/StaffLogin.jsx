import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

function StaffLogin() {
  return (
    <>
      <Navbar />
      <LoginForm role="staff" />
    </>
  );
}

export default StaffLogin;