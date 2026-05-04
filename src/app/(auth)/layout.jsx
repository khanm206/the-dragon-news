import NavBar from "@/components/NavBar";
import { montserrat } from "../layout";

const AuthLayout = ({ children }) => {
  return (
    <section className={`${montserrat.className} min-h-screen flex flex-col`}>
      <NavBar />
      <main className="flex-1 flex">{children}</main>
    </section>
  );
};

export default AuthLayout;
