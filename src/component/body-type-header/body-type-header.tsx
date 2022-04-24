import React from 'react';
import "./body-type-header.css";

function bodyTypeHeader() {
  const bodyType = ["SEDAN","SUV","HATCHBACK","COUPE"];
  return (
    <div className="body-type-header-container">
      <div className="body-type-header">
        <div className="body-detail">
          {
            bodyType.map(type => <div key={type} className="body-type">{type}</div>)
          }
        </div>
        <div className="body-heading">BODY TYPE</div>
      </div>
    </div>
  );
}

export default bodyTypeHeader;