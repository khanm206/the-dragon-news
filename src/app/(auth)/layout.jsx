import NavBar from "@/components/NavBar";
import { montserrat } from "../layout";

const AuthLayout = ({ children }) => {
  return (
    <section className={`${montserrat.className}`}>
      <NavBar />
      {children}
    </section>
  );
};

export default AuthLayout;
