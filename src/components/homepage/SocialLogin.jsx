"use client";
import { authClient } from "@/lib/auth-client";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGitHubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  const { data: session } = authClient.useSession();
  const user = session?.user;
  return (
    <section className={user ? "hidden" : ""}>
      <div className="space-y-4 sticky top-52 z-10 bg-base-100">
        <h1 className="text-2xl font-semibold">Login With</h1>
        <div className="flex flex-col gap-2 my-6">
          <button
            onClick={handleGoogleSignin}
            className="btn flex items-center gap-2 border-2 rounded-md border-sky-600 text-sky-600"
          >
            <FcGoogle /> Login with Google
          </button>
          <button
            onClick={handleGitHubSignin}
            className="btn flex items-center gap-2  border-2 border-black"
          >
            <FaGithub /> Login with GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialLogin;
