//React
import React from "react";

//Next
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header__page-logo">
        <Image
          src="/images/icons/sport-see-full-LOGO.svg"
          alt="Logo du site de SportSee"
          width={178}
          height={60}
        />
      </div>

      <nav className="header__nav-bar">
        <ul className="header__unordered-list">
          <Link href="/" shallow>
            <li className="header__list-item">Accueil</li>
          </Link>
          <Link href="/profile-page">
            <li className="header__list-item">Profil</li>
          </Link>
          <Link href="/settings">
            <li className="header__list-item">Réglages</li>
          </Link>
          <Link href="/community">
            <li className="header__list-item">Communauté</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
