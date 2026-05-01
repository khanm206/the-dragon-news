import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <section>
      <div className="space-y-4 sticky  top-52 z-10 bg-base-100">
        <h1 className="text-2xl font-semibold">Login With</h1>
        <div className="flex flex-col gap-2 my-6">
          <button className="btn flex items-center gap-2 border-2 rounded-md border-sky-600 text-sky-600">
            <FcGoogle /> Login with Google
          </button>
          <button className="btn flex items-center gap-2  border-2 border-black">
            <FaGithub /> Login with GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialLogin;
