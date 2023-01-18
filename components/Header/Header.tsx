//React
import React from "react";

//Next
import Image from "next/image";

//Images
import SportSeeLogo from "../../public/images/icons/sport-see-full-LOGO.svg";

//Components
import NavLink from "../NavLink/NavLink";

/**
 * Function component for the header of the page
 * @returns {JSX.Element}
 */
export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header__page-logo">
        <Image
          src={SportSeeLogo}
          alt="Logo du site de SportSee"
          width={178}
          height={60}
        />
      </div>

      <nav className="header__nav-bar">
        <ul className="header__unordered-list">
          <NavLink href="/">
            <li className="header__list-item">Accueil</li>
          </NavLink>
          <NavLink href="/profile-page">
            <li className="header__list-item">Profil</li>
          </NavLink>
          <NavLink href="/settings">
            <li className="header__list-item">Réglages</li>
          </NavLink>
          <NavLink href="/community">
            <li className="header__list-item">Communauté</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
