import RegisterForm from "@/components/RegisterForm";

export const metadata = {
  title: "Register",
};

const RegisterPage = () => {
  return (
    <section className="flex-1 flex items-center justify-center bg-base-300">
      <div className="mx-auto bg-base-100 border-base-300 rounded-box  border py-18 px-20">
        <h1 className="text-3xl font-bold w-fit mx-auto">
          Register your account
        </h1>
        <br />
        <hr className="text-black/30 my-4" />
        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterPage;
