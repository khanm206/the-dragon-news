const GetNewsDetails = async ({ id }) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
    { cache: "force-cache" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news details");
  }
  const data = await res.json();
  const newsDetails = data.data[0];
  return newsDetails;
};

export default GetNewsDetails;
