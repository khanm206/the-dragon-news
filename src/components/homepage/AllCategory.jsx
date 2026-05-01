import NewsCategory from "../NewsCategory";

const AllCategory = ({ categoryId }) => {
  return (
    <div className="">
      <h1 className="text-2xl font-semibold">All Category</h1>
      <NewsCategory categoryId={categoryId} />
    </div>
  );
};

export default AllCategory;
