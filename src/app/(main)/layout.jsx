import BreakingNews from "@/components/BreakingNews";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

const MainLayout = ({ children }) => {
  return (
    <section className="min-h-screen flex flex-col">
      <Header />
      <section className="sticky top-0 z-50 bg-base-100 py-6">
        <BreakingNews />
        <NavBar />
      </section>
      <main className=" w-11/12 mx-auto flex-1">{children}</main>
      <Footer />
    </section>
  );
};

export default MainLayout;
