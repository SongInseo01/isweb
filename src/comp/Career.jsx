import React from "react";
import "./Career.css";

function Career() {
  return (
    <div className="career-container">
      <h1>Career</h1>
      <div className="experience">
        <div className="job">
          <span className="keyword">Position:</span> Software Developer
        </div>
        <div className="job">
          <span className="keyword">Company:</span> Intel
        </div>
        <div className="job">
          <span className="keyword">Duration:</span> 2020 - 2022
        </div>
        <p></p>
        <div className="job">
          <span className="keyword">Position:</span> Software Developer
        </div>
        <div className="job">
          <span className="keyword">Company:</span> RockStarGames
        </div>
        <div className="job">
          <span className="keyword">Duration:</span> 2022-2023
        </div>
      </div>
    </div>
  );
}

export default Career;
