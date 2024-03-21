import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
// import BigSidebar from "../components/BigSidebar";
const DashboardLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar/>
        <BigSidebar/>
        <div>
          <Navbar/>
          <div className="dasboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    
      
    </Wrapper>
  );
};
export default DashboardLayout;
