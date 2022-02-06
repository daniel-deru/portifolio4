import { LayoutStyle } from "./styled/Layout.styled";


import Header from "../components/Header"
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {

  return <LayoutStyle>
            <Header />
            <div className="main-container">
              <Sidebar />
              {children}
            </div>


        </LayoutStyle>;
};

export default Layout;
