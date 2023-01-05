//React
import React from "react";

//Next
import Image from "next/image";

//Utils
import { splitOnUpperCase } from "../../react-utils/functions/helperFunctions";

export default function KeyDataCard({ dataType }: any) {
  const formattedClass = splitOnUpperCase(dataType);

  return (
    <div className="key-data-card">
      <div
        className={`key-data-card__image-container key-data-card__image-container--${formattedClass}`}
      >
        <Image
          src={"/svg/calories-fire-icon.svg"}
          alt=""
          className="key-data-card__image"
          width={40}
          height={40}
        />
      </div>
      <div className="key-data-card__text-container">
        <h2 className="key-data-card__count">1,930kCal</h2>
        <p className="key-data-card__count-type">Calories</p>
      </div>
    </div>
  );
}
