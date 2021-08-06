import Image from "next/image";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import {
  AiOutlineSearch,
  AiOutlineGlobal,
  AiOutlineMenu,
} from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startData, setStartData] = useState(new Date());
  const [endData, setEndData] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const handleSelect = (ranges) => {
    setStartData(ranges.selectionRange.startData);
    setEndData(ranges.selectionRange.endData);
  };
  const selectionRange = {
    startData: startData,
    endData: endData,
    key: "selection",
  };

  const resetInput = () => {
    setSearchInput("");
  };

  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5
        md:px-10
        "
    >
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="logo"
        />
      </div>
      {/* middle */}
      <div className="flex align-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Start Your Search"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400
                placeholder-gray-400"
        />
        <AiOutlineSearch
          className="hidden md:inline-flex h-8 w-8 bg-red-400 text-white rounded-full
                 p-2 pr-2 cursor-pointer md:mx-2"
        />
      </div>
      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <AiOutlineGlobal className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <AiOutlineMenu className="h-6" />
          <FaUserCircle className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <HiUsers className="h-5" />
            <input
              type="number"
              value={noOfGuests}
              min={1}
              onChange={(e) => setNoOfGuests(e.target.value)}
              className="w-12 pl-2 outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow text-gray-500 cursor-pointer"
              onClick={resetInput}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400 cursor-pointer">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
