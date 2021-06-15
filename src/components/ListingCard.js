import React, {useState} from "react";

function ListingCard({listing, key, removeCard}) {

  const [favorite, setFavorite] = useState(false)

  function handleDeleteBtn(){
    fetch(`http://localhost:6001/listings/${key}`,{
      method: "DELETE",
    })
    .then(data => data.json())
    .then(removeCard(listing.id))
  }

  function itemsToRender(){
    return(
    <div id={key}>
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={() => setFavorite(!favorite)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorite(!favorite)} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={(e) => handleDeleteBtn(e)} className="emoji-button delete">🗑</button>
      </div>
    </div>
    )
  }
  return (
    <li className="card">
      {itemsToRender()}
    </li>
  );
}

export default ListingCard;
