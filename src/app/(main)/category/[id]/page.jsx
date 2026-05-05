import AllCategory from "@/components/homepage/AllCategory";
import NewsHome from "@/components/homepage/NewsHome";
import SocialLogin from "@/components/homepage/SocialLogin";
import { auth } from "@/lib/auth";
import { getNews } from "@/lib/GetNews";
import { headers } from "next/headers";

const NewsByCategory = async ({ params }) => {
  const paramsId = await params;
  const categoryId = paramsId.id;
  const news = await getNews({ category: `${categoryId}`, revalidate: 60 });

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <section
      className={`grid ${session ? "lg:grid-cols-4" : "lg:grid-cols-5"} md:grid-cols-3 gap-6 mt-10`}
    >
      <AllCategory categoryId={categoryId} />
      <NewsHome news={news} />
      <SocialLogin />
    </section>
  );
};

export default NewsByCategory;
