import { Logo } from "../components";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import FormRow from "../components/FormRow";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4> Register</h4>
        {/*============== w're creating components in the form by grapping props for FormRow.jsx file=================*/}

        <FormRow type="text" name="name" defaultValue="Olinga" />

        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="Mbida"
        />
        <FormRow type="text" name="location" defaultValue="earth" />

        <FormRow type="email" name="email" defaultValue="olinga@gmail.com" />
        <FormRow type="password" name="password" defaultValue="12345" />

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <p>
        Already a member?
        <Link to="/login" className="member-btn">
          Login
        </Link>
      </p>
    </Wrapper>
  );
};

export default Register;
