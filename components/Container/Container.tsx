import React from "react";
import Header from "../Header/Header";
import NavSidebar from "../NavSideBar/NavSidebar";

export default function Container(props: any) {
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
