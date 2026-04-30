import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <NavBar />
      {children}
    </>
  );
};

export default MainLayout;
