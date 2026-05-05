import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetailsCard = ({ newsDetails }) => {
  const { title, image_url, details, category_id } = newsDetails;
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-2xl font-semibold">Dragon News</h1>

      <div className="space-y-4 mt-6 border p-8 rounded border-black/20">
        <Image
          src={image_url}
          alt="thumbnail image"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <h1 className="text-3xl font-semibold my-6">{title}</h1>
        <p className="text-xl leading-loose ">{details}</p>

        <Link href={`/category/${category_id}`}>
          <button className=" bg-red-400 flex items-center gap-2 text-xl py-2 px-4 rounded text-base-100 font-semibold hover:cursor-pointer">
            <FaArrowLeftLong /> All news in this category
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
