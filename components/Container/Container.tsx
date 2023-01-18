import React from "react";
import Header from "../Header/Header";
import NavSidebar from "../NavSideBar/NavSidebar";

/**
 *  *Function component to contain the main layout of the page
 * @param {any} props Components of the page
 * @returns {JSX.Element}
 */
export default function Container(props: any): JSX.Element {
  return (
    <>
      <Header />
      <main className="content-wrapper">
        <NavSidebar />
        {props.children}
      </main>
    </>
  );
}
