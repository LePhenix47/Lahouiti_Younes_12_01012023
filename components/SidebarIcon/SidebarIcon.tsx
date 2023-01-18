//React
import React from "react";

//Next
import Image from "next/image";
import { IconType } from "recharts/types/component/DefaultLegendContent";

/**
 * Function component for the header of the page
 * @param {IconType:any} props Type of the icon to display on the sidebar
 * @returns {JSX.Element}
 */

export default function SidebarIcon({ iconType }: any): JSX.Element {
  return (
    <div className="side-bar__icon">
      <Image
        src={`/svg/${iconType}-icon.svg`}
        alt={iconType}
        width={42}
        height={42}
        className="side-bar__icon-image"
      />
    </div>
  );
}
