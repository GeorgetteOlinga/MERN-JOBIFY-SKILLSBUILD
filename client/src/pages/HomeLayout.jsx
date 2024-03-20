import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";

const HomeLayout = () => {
  return (
    <Wrapper>
      {/* <nav>navBar</nav> */}
      <Outlet />  {/*   this is used to trigger the .children paths in Home for nested pages in other words, for children pathsthat can be found in   */} 

   </Wrapper>
  );
};
export default HomeLayout;
