import React from "react";
import Link from "next/link";

export default function NavSidebar() {
  return (
    <aside className="side-bar">
      <nav className="side-bar__icons">
        <ul className="side-bar__unordered-list">
          <li className="side-bar__list-item">
            <Link href="" className="side-bar__link"></Link>
          </li>
          <li className="side-bar__list-item">
            <Link href="" className="side-bar__link"></Link>
          </li>
          <li className="side-bar__list-item">
            <Link href="" className="side-bar__link"></Link>
          </li>
          <li className="side-bar__list-item">
            <Link href="" className="side-bar__link"></Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
