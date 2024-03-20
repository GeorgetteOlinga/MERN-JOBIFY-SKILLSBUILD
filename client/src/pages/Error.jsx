import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();
 
if (error.status ===404){

}


  return (
    <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>Oops!!! page not found</h3>
        <p>We can't seem to find the page you are looking for</p>
        <Link to="/dashboard">back home</Link>
      </div>
      {/*<h1>Error Page !!!</h1>
      <h2>{error.error.message}</h2> {/* this message is usefull for developer to display what is causing  the error   */}
      {/*<Link to="/">back home</Link> */}{" "}
      {/* we can also use useNavigate to redirect to another page if the password is corect for example. you do not need to click. but if you need to click use like <link>   by adding like back home, or register or login.....  */}
    </Wrapper>
  );
};
export default Error;
