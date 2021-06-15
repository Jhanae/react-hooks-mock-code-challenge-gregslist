import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({data, removeCard}) {
  
  return ( 
    <main>
      <ul className="cards">
      {data.map((item) => (
      <ListingCard listing={item} key={item.id} removeCard={removeCard}/>  
      ))}
       
      </ul>
    </main>
  );
}

export default ListingsContainer;
