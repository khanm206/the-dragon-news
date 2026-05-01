import AllCategory from "@/components/homepage/AllCategory";
import NewsHome from "@/components/homepage/NewsHome";
import SocialLogin from "@/components/homepage/SocialLogin";
import { getNews } from "@/lib/GetNews";

const NewsByCategory = async ({ params }) => {
  const paramsId = await params;
  const categoryId = paramsId.id;
  const news = await getNews({ category: `${categoryId}`, revalidate: 60 });
  return (
    <section className="grid grid-cols-5 gap-6 mt-10">
      <AllCategory categoryId={categoryId} />
      <NewsHome news={news} />
      <SocialLogin />
    </section>
  );
};

export default NewsByCategory;
