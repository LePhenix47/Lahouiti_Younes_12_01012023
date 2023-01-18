//React
import React from "react";

//Next
import Link from "next/link";

//Components
import SidebarIcon from "../SidebarIcon/SidebarIcon";

/**
 * Function component for the sidebar of the page
 * @returns {JSX.Element}
 */

export default function NavSidebar(): JSX.Element {
  const currentYear: number = new Date().getFullYear();
  return (
    <aside className="side-bar">
      <nav className="side-bar__nav">
        <ul className="side-bar__unordered-list">
          <li className="side-bar__list-item">
            <Link href="#gauge" className="side-bar__link" scroll={false}>
              <SidebarIcon iconType="yoga" />
            </Link>
          </li>
          <li className="side-bar__list-item">
            <Link href="#radar" className="side-bar__link" scroll={false}>
              <SidebarIcon iconType="swimming" />
            </Link>
          </li>
          <li className="side-bar__list-item">
            <Link href="#bar" className="side-bar__link" scroll={false}>
              <SidebarIcon iconType="bike" />
            </Link>
          </li>
          <li className="side-bar__list-item">
            <Link href="#line" className="side-bar__link" scroll={false}>
              <SidebarIcon iconType="dumbbell" />
            </Link>
          </li>
        </ul>
      </nav>
      <small className="side-bar__copyright">
        Copyright, SportSee 2020 - {currentYear} ©
      </small>
    </aside>
  );
}
