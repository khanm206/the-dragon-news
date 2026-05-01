export const getNews = async ({ category, revalidate = 10 }) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category}`,
    {
      next: { revalidate },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = await res.json();
  const news = data.data;

  return news;
};
