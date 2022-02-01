import styles from  "../styles/Layout.module.css"


import Header from "../components/Header"
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {

  return <>
            <Header />
            <div className={styles['main-container']}>
              <Sidebar />
              {children}
            </div>


        </>;
};

export default Layout;
