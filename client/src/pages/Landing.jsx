import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
// import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";  // this is the auto imported: just type <Log    then fill out by pressing tab key
// import Logo from "../components/Logo"// 2 ways of importing Logo and then use self-closing tag in the return



{
  /*const StyledButton = styled.button` //make sure you have the back sticks wrapping the const styledbutton
font-size: 1.5rem;
  background-color: red;
  color: white;
`;
      <StyledButton>Styled btn</StyledButton>-------use this inside the divthat replaced wrapper in the landing function

*/
}

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            expedita aliquid reprehenderit incidunt explicabo culpa ad, tempora
            corrupti odio officia qui nemo consequuntur nostrum id cupiditate,
            nobis nam? Quibusdam, sint.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>

          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>

      {/* <h1>Landing Page</h1>
      <div className="content">some content</div> */}
    </Wrapper>
  );
};

// const Wrapper = styled.div`
//   background-color: red;
//   h1 {
//     color: white;
//   }
//   .content {
//     background-color: blue;
//     color: yellow;
//   }
// `;
export default Landing