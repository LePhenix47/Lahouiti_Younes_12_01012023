//React
import React from "react";

//Next
import Link from "next/link";

//Components
import SidebarIcon from "../SidebarIcon/SidebarIcon";

export default function NavSidebar() {
  return (
    <aside className="side-bar">
      <nav className="side-bar__nav">
        <ul className="side-bar__unordered-list">
          <li className="side-bar__list-item">
            <Link href="" className="side-bar__link">
              <SidebarIcon iconType="yoga" />
            </Link>
          </li>
          <li className="side-bar__list-item">
            <Link href="" className="side-bar__link">
              <SidebarIcon iconType="swimming" />
            </Link>
          </li>
          <li className="side-bar__list-item">
            <Link href="" className="side-bar__link">
              <SidebarIcon iconType="bike" />
            </Link>
          </li>
          <li className="side-bar__list-item">
            <Link href="" className="side-bar__link">
              <SidebarIcon iconType="dumbbell" />
            </Link>
          </li>
        </ul>
      </nav>
      <small className="side-bar__copyright">Copyright, SportSee 2020 ©</small>
    </aside>
  );
}
