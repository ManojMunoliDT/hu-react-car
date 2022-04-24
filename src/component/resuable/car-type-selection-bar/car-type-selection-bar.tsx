import React, { useState } from "react";
import "./car-type-selection-bar.css";

interface Categories {
  categoryTypes: string;
  categories: string[];
  handleTypeChange?: (carType: string) => void;
}

function CarTypeSelectionBar({categoryTypes,categories, handleTypeChange= f => f }: Categories) {
  const [categoryType, setCategoryType] = useState(categoryTypes);

  const selectedCategoryStyles = {
    color: "white",
    backgroundColor: "black",
  };

  let changeCategoryType = (newCategory: string) => {
   setCategoryType(newCategory);
   handleTypeChange(newCategory);
  };

  return (
    <div className="categories-container">
      {categories.map((category, index) => {
        return (
          <span
            onClick={() => changeCategoryType(category)}
            key={index}
            style={categoryType === category ? selectedCategoryStyles : {}}
            className="category"
          >
            {category}
          </span>
        );
      })}
    </div>
  );
}

export default CarTypeSelectionBar;
