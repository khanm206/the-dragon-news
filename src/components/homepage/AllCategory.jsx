import NewsCategory from "../NewsCategory";

const AllCategory = ({ categoryId }) => {
  return (
    <section>
      <div className="sticky  top-58 z-10 bg-base-100">
        <h1 className="text-2xl font-semibold">All Category</h1>
        <NewsCategory categoryId={categoryId} />
      </div>
    </section>
  );
};

export default AllCategory;
