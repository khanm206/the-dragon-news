import { format } from "date-fns";
import Image from "next/image";
import {
  BsBookmarkFill,
  BsFillEyeFill,
  BsFillShareFill,
  BsStarFill,
} from "react-icons/bs";
import userIcon from "@/assets/user.png";
import Link from "next/link";

const NewsCard = ({ res }) => {
  const { _id, title, author, image_url, details, rating, total_view } = res;
  const { name, published_date, img } = author;
  const { number } = rating;
  return (
    <div className="border border-black/10 rounded">
      <div className="bg-base-300 p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src={img ? img : userIcon}
            alt="author image"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-xl">
              {name === "system" || name === "" ? "System" : name}
            </p>
            <p>
              {published_date
                ? format(
                    new Date(published_date.replace(" ", "T")),
                    "yyyy-MM-dd",
                  )
                : "Date not found"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <BsBookmarkFill className="hover:cursor-pointer" />
          <BsFillShareFill className="hover:cursor-pointer" />
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-semibold">{title && title}</h1>
        <br />
        <Image
          src={image_url}
          alt="thumbnail image"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <br />
        <br />
        <p className="line-clamp-4 text-black/80">{details}</p>
        <Link href={`/news/${_id}`}>
          <button className="text-orange-600 mt-2 mb-4 hover:cursor-pointer">
            Read More
          </button>
        </Link>

        <hr className="text-black/20" />

        <div className="flex justify-between items-center mt-4 px-2">
          <div className="flex items-center gap-2">
            <BsStarFill className="text-yellow-500" />
            {number && number}
          </div>
          <div className="flex items-center gap-2">
            <BsFillEyeFill />
            {total_view && total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
