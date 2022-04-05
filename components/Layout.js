import { LayoutStyle } from "./styled/Layout.styled";
import { useRouter } from "next/router"


import Header from "../components/Header"
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  const router = useRouter()
  console.log(router.asPath)
  return <LayoutStyle>
            <Header />
            <div className="main-container">
             {!/\/work\/.*/.test(router.asPath) && <Sidebar />}
              {children}
            </div>
        </LayoutStyle>;
};

export default Layout;
