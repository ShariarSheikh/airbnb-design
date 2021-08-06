import Image from "next/image";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div
      className="flex px-2 py-7 cursor-pointer hover:opacity-80
      hover:shadow-lg border-b transition transform duration-200
       ease-out flex-shrink-0 first:border-t"
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt={title}
          className="rounded-lg"
        />
      </div>
      <div className="pl-10 flex flex-col flex-grow">
        <div className="flex justify-between">
          <p className="text-gray-500 font-semibold">{location}</p>
          <AiOutlineHeart className="h-5 text-gray-800 cursor-pointer" />
        </div>

        <h4 className="font-semibold text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <AiFillStar className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
