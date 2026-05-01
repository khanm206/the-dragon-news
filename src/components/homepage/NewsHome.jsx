import NewsCard from "./NewsCard";

const NewsHome = ({ news }) => {
  return (
    <div className="col-span-3">
      <h1 className="text-2xl font-semibold">Dragon News Home</h1>
      <div className="space-y-10 my-6">
        {news.length === 0 ? (
          <p className="text-xl mx-auto border text-center py-6 rounded border-black/20">
            No News Found!
          </p>
        ) : (
          news?.map((res) => <NewsCard key={res._id} res={res} />)
        )}
      </div>
    </div>
  );
};

export default NewsHome;
