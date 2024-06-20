import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Rating = ({ stars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <section className="flex">
      {Array.from({ length: stars }, (_, i) => {
        const indexStar = i + 1;
        return (
          <button
            type="button"
            key={indexStar}
            className="text-lg focus:outline-none"
            onClick={() => setRating(indexStar)}
            onMouseEnter={() => setHover(indexStar)}
            onMouseLeave={() => setHover(rating)}
          >
            <FontAwesomeIcon
              icon={faStar}
              className={`text-lg ${
                indexStar <= (hover || rating) ? "text-yellow" : "text-trunks"
              }`}
            />
          </button>
        );
      })}
    </section>
  );
};

export default Rating;
