import React from "react";

const RecipeCard = (props) => {
  const { recipe } = props;
  const { image, title } = recipe;

  return (
    <div className="rounded-md overflow-hidden flex flex-col drop-shadow-sm bg-white">
      <div>
        <img src={image} alt="" />
      </div>

      <div className="m-3 flex flex-col justify-between h-full">
        <h4>{title}</h4>
        <button className="bg-green-100 p-2 mt-2 rounded-md">View more</button>
      </div>
    </div>
  );
};

export default RecipeCard;
