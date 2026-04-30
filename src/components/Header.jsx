import logo from "@/../assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";

const today = new Date();

const formatted = format(today, "EEEE, MMMM d, yyyy");

const Header = () => {
  return (
    <section className="my-6 text-center space-y-2">
      <Image src={logo} alt="Logo" className="mx-auto w-lg" />
      <h2 className="text-xl text-black/50 font-semibold">
        Journalism Without Fear or Favour
      </h2>
      <p className="text-2xl">{formatted}</p>
    </section>
  );
};

export default Header;
