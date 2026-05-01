import Link from "next/link";

const NewsCategory = async ({ categoryId }) => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
    {
      cache: "force-cache",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news categories");
  }

  const data = await res.json();
  const categories = data.data.news_category;

  return (
    <div className="text-xl text-black/60 font-semibold mx-auto w-fit my-6">
      <ul className="space-y-4 ">
        {categories.map((category) => (
          <li key={category.category_id}>
            <Link
              href={`/category/${category.category_id}`}
              className={`${categoryId === category.category_id ? "bg-black/20" : ""} px-4 py-2 rounded-lg`}
            >
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCategory;
