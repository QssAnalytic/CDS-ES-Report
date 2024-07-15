import React from "react";
import DownloadPdf from "../components/DownloadPdf";
import Toggle from "../components/Toggle/Toggle";
import logo from "/logo.svg";
const Header = ({ setPreview, isPreview, handlePrint }) => {
  const handlePreview = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPreview(!isPreview);
  };
  return (
    <nav className="flex justify-between items-center py-2">
      <div className="flex gap-3 items-center pointer-events-none">
        <img className="mt-1.5 w-12" src={logo} alt="logo" />
        <h1 className="hidden lg:block text-4xl font-bold text-teal-500 ">
          CDS-ES Report
        </h1>
      </div>
      <div className="flex gap-4">
        <button onClick={handlePreview} className="btn">
          Preview
        </button>
        <DownloadPdf handlePrint={handlePrint} />
        <Toggle />
      </div>
    </nav>
  );
};

export default Header;
