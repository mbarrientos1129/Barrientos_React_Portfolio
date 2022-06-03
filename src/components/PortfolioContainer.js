import React, { useState } from "react";
import Nav from "./Nav";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Contact from "./Contact";
import '../App.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
      return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Nav
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />

      {renderPage()}
      <Footer></Footer>
    </div>
  );
}