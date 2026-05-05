const ComingSoonPage = ({ title = "Page" }) => {
  return (
    <section className="flex flex-col items-center justify-center bg-white text-center px-6">
      <div className="">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {title} is cooking 🍳
        </h1>

        <p className="text-gray-500 text-lg mb-6">
          We’re working on something clean and useful here. This page will be
          ready soon.
        </p>

        <div className="flex justify-center gap-2 text-2xl">
          <span className="animate-bounce">🔥</span>
          <span className="animate-bounce [animation-delay:0.2s]">🍲</span>
          <span className="animate-bounce [animation-delay:0.4s]">🚀</span>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonPage;
