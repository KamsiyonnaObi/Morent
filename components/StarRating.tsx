import React from "react";
import { StarRatingProps } from "@/types/component";

import Image from "next/image";

const StarRating = ({ rating }: StarRatingProps) => {
  const totalStars = 5;

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <Image
          key={index}
          src={index < rating ? "/StarFilled.svg" : "/StarEmpty.svg"}
          alt={index < rating ? "filled star" : "empty star"}
          width="24"
          height="24"
        />
      ))}
    </div>
  );
};
export default StarRating;
