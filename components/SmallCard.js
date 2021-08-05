import Image from "next/image";

const SmallCard = ({ img, distance, location }) => {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl
    cursor-pointer hover:bg-gray-100 hover:scale-105 transform transition duration-200 ease-out
    "
    >
      <div className="relative w-16 h-16 cursor-pointer">
        <Image src={img} layout="fill" alt={"pic"} className="rounded-lg" />
      </div>
      <div>
        <h3>{location}</h3>
        <h2 className="text-gray-500">{distance}</h2>
      </div>
    </div>
  );
};

export default SmallCard;
