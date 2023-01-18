import React from "react";

/**
 * Function component for the spin loader when data is loading
 * @returns {JSX.Element}
 */

export default function SpinLoader(): JSX.Element {
  return (
    <section className="spin-loader">
      <div className="spin-loader__ball spin-loader__ball--1"></div>
      <div className="spin-loader__ball spin-loader__ball--2"></div>
      <div className="spin-loader__ball spin-loader__ball--3"></div>
    </section>
  );
}
