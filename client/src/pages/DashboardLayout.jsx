import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import { createContext, useContext, useState } from "react";
// import BigSidebar from "../components/BigSidebar";

const DashboardContext = createContext()

const DashboardLayout = () => {
  //temp
  const user = {name: "olinga"}
  const [showSidebar, setShowSidebar] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false);

const toggleDarkTheme = () => {
console.log( "toggle dark theme");
};

const toggleSidebar = () => {
  setShowSidebar(!ShowSidebar);
};

const logoutUser = async () => {
  console.log("logout user");
};


  return (
    <DashboardContext.Provider value={{
      user,
      showSidebar, isDarkTheme, toggleDarkTheme,toggleSidebar, logoutUser
      }}>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dasboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

// export const useDashboardContext = () => useContext
export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout;


// export const DashboardLayout = () => {
//   return (
//     <div>DashboardLayout</div>
//   )
// }



