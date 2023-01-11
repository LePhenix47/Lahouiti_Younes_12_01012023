//React
import React from "react";

//Next
import Image from "next/image";

//Utils
import {
  splitString,
  splitOnUpperCase,
  formatText,
  numberSeparatorLocale,
} from "../../react-utils/functions/helperFunctions";

export default function KeyDataCard({ dataType, keyCardData }: any) {
  //We format the string to make it lowercase and add dashes between every word
  const formattedClass = splitOnUpperCase(dataType);

  //We define the unit of measurement
  let unit = dataType === "calorieCount" ? "kCal" : "g";

  //We make the name of the type on titlecase
  let nameOfType = splitString(formattedClass, "-")[0];
  nameOfType = formatText(nameOfType, "titlecase");

  //The type value contains the value with its unit
  const value = keyCardData?.[dataType];
  const formattedValue = numberSeparatorLocale(value);
  const typeValue = `${formattedValue}${unit}`;

  return (
    <section className="key-data-card">
      <div
        className={`key-data-card__image-container key-data-card__image-container--${formattedClass}`}
      >
        <Image
          src={`/svg/${nameOfType}.svg`}
          alt=""
          className="key-data-card__image"
          width={40}
          height={40}
        />
      </div>
      <div className="key-data-card__text-container">
        <h2 className="key-data-card__count">{typeValue}</h2>
        <p className="key-data-card__count-type">{nameOfType + "s"}</p>
      </div>
    </section>
  );
}
