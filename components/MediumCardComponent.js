import Image from "next/image";

const MediumCardComponent = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative w-80 h-80">
        <Image src={img} layout="fill" alt="pic" className="rounded-xl" />
      </div>
      <div>
          <h3 className="text-2xl mt-3">{title}</h3>
      </div>
    </div>
  );
};

export default MediumCardComponent;
