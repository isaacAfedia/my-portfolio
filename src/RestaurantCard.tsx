{
  /*import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import Image from "next/image";

const RestaurantCard = ({ restaurant, title, subtitle, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex items-center flex-col p-4 relative"
      style={{
        width: "400px",
        height: "200px",
        borderRadius: "5px",
        overflow: "hidden",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={restaurant}
        alt=""
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "cover",
        }}
      />

      {/* Title *}
      <div
        className={`text-white absolute top-0 left-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-xl px-4 py-2 rounded-t-md ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      >
        {title}
      </div>

      {/* Subtitle *}
      <div
        className={`text-white absolute bottom-0 left-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-sm px-4 py-2 rounded-b-md ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      >
        {subtitle}
      </div>

      {/* Link *}
      {isHovered && (
        <div
          className={`text-white absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-xl px-2 py-1 rounded-bl-md cursor-pointer`}
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            <AiOutlineLink />
          </a>
        </div>
      )}
    </div>
  );
};

export default RestaurantCard;
*/
}
