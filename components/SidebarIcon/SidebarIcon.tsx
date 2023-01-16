//React
import React from "react";

//Next
import Image from "next/image";

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
