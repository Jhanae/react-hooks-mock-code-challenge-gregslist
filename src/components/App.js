import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const URL = "http://localhost:6001/listings"
  const [itemArray, setItemArray] = useState([])
  const [search, setSearch] = useState("")


  function removeCard(id){
    const updatedListing = itemArray.filter(item => item.id !== id)
    setItemArray(updatedListing)
  }

  useEffect(() => {
    fetch(URL)
    .then(data => data.json())
    .then(setItemArray)
  }, []);

  const filterSearch = itemArray.filter(listing => listing.description.toLowerCase().includes(search));

  return (
    <div className="app">
      <Header handleSearch={setSearch}/>
      <ListingsContainer removeCard={removeCard} data={filterSearch}/>
    </div>
  );
}

export default App;
