//React
import React from "react";

//Next
import Image from "next/image";

//Images
import fireIcon from "../../public/svg/calorie.svg";
import chickenLegIcon from "../../public/svg/protein.svg";
import appleIcon from "../../public/svg/carbohydrate.svg";
import burgerIcon from "../../public/svg/lipid.svg";

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

  //We get the value and we format the number depending on the user's locale
  const value = keyCardData?.[dataType];
  const formattedValue = numberSeparatorLocale(value);

  //The type value contains the value with its unit
  const typeValue = `${formattedValue}${unit}`;

  let svgIcon = null;
  switch (nameOfType) {
    case "Calorie": {
      svgIcon = fireIcon;
      break;
    }
    case "Protein": {
      svgIcon = chickenLegIcon;
      break;
    }
    case "Carbohydrate": {
      svgIcon = appleIcon;
      break;
    }
    case "Lipid": {
      svgIcon = burgerIcon;
      break;
    }
  }

  return (
    <section className="key-data-card">
      <div
        className={`key-data-card__image-container key-data-card__image-container--${formattedClass}`}
      >
        <Image
          // src={`/svg/${nameOfType}.svg`}
          src={svgIcon}
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
