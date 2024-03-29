import Template from '../components/Template'
import LoginImg from '../assets/login.jpeg'
const Login = ({setIsLoggedIn}) => {
  return (
      <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond,"
        desc2="Education to future-proof your career"
        image={LoginImg}
        formType="Login"
        setIsLoggedIn={setIsLoggedIn}
      />
  )
}

export default Login