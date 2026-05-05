import SocialLogin from "@/components/homepage/SocialLogin";
import NewsDetailsCard from "@/components/NewsDetailsCard";

import GetNewsDetails from "@/lib/GetNewsDetails";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const newsDetails = await GetNewsDetails({ id: id });

  return (
    <section className="">
      <NewsDetailsCard newsDetails={newsDetails} />
    </section>
  );
};

export default NewsDetailsPage;
