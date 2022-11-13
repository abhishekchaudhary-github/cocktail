import React from "react";
import CocktailItem from "./cocktail"

function list() {
  return (
    <div>
        {data.map((e)=>{
            <CocktailItem/>
        })}
    </div>
  );
}

export default list;
