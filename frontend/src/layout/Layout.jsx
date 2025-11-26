import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components/index";

const Layout = () => {
  return (
    <section>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};
export default Layout;
