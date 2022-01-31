import "../styles/Layout.module.css"
import Header from "../components/Header"

const Layout = ({ children }) => {

  return <>
            <Header />
            {children}
        </>;
};

export default Layout;
