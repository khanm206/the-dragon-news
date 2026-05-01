import { getNews } from "@/lib/GetNews";
import Marquee from "react-fast-marquee";

const BreakingNews = async () => {
  const breakingNews = await getNews({ category: "01" });

  return (
    <section className="bg-base-300 py-4 flex gap-2 mx-auto px-2 text-2xl font-bold">
      <button className="btn bg-red-400 text-white">Latest</button>

      <Marquee pauseOnHover speed={100}>
        <div className="flex gap-10">
          {breakingNews.map((news) => (
            <span key={news._id}>{news.title}</span>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default BreakingNews;
