import SocialLogin from "@/components/homepage/SocialLogin";
import NewsDetailsCard from "@/components/NewsDetailsCard";
import GetNewsDetails from "@/lib/GetNewsDetails";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const newsDetails = await GetNewsDetails({ id: id });

  return (
    <section className="grid lg:grid-cols-5 md:grid-cols-3 gap-4">
      <NewsDetailsCard newsDetails={newsDetails} />
      <SocialLogin />
    </section>
  );
};

export default NewsDetailsPage;
