import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
import { useDashboardContext } from "../pages/DashboardLayout";
import NavLinks from "./NavLinks";
const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } =
    useDashboardContext(); {/* toggleSidebar is the amburger button that you click to display the side bar */}
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "siderbar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            {" "}
            {/*if we can see the close button, it means showSidebar is true. so, the "close-btn" will always be set back to flase*/}
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks/>

          {/* <div className="nav-links">
            {links.map((link) => {
              const { text, path, icon } = link;
              return (
                <NavLink to={path} key={text} className="nav-link">
                  <span className="icon"> </span>
                  {text}
                </NavLink>
              );
            })}
          </div> */}
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
