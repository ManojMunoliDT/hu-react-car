import React, { useEffect, useState } from "react";
import "./car-type-selection-bar.css";

interface Categories {
  categoryType: string;
  categories: string[];
  handleTypeChange?: (carType: string) => void;
}

function CarTypeSelectionBar(props: Categories) {
  const [categoryType, setCategoryType] = useState(props.categoryType);

  const selectedCategoryStyles = {
    color: "white",
    backgroundColor: "black",
  };

  let changeCategoryType = (newCategory: string) => {
    setCategoryType(newCategory);
  };

  useEffect(() => {
    if(props.handleTypeChange)
      props.handleTypeChange(categoryType);
  }, [categoryType, props])

  return (
    <div className="categories-container">
      {props.categories.map((category, index) => {
        return (
          <span
            onClick={() => {changeCategoryType(category)}}
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
