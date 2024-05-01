import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import { createContext, useContext, useState } from "react";
// import BigSidebar from "../components/BigSidebar";
import { checkDefaultTheme } from "../App";


const DashboardContext = createContext();



const DashboardLayout = ({}) => {
  //temp
  const user = { name: "olinga" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());// using   isDarkThemeEnabled as a prop makes keep all the pages in the dashboard in the same theme dark or clear 

  //===by setting the variables by default in the app.jsx, it allows the Darktheme to loadwhen the application is loading

  //we finally import checkDefaultTheme and invoke it in the usestate

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme)
    localStorage.setItem("darkTheme", newDarkTheme)//it is better to access the dark theme in the local storage instead of in the dashboard
  };

  const toggleSidebar = () => {
    setShowSidebar(!ShowSidebar);
  };

  const logoutUser = async () => {
    console.log("logout user");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
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
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;

// export const DashboardLayout = () => {
//   return (
//     <div>DashboardLayout</div>
//   )
// }
