import React from 'react'

export const ItemList = ({items,onItemClick,ItemList}) => {
  const handleClick = ({ target }) => {
    const item = target.value;
    onItemClick(item);
  };

    return (

        <main>
      <h1>Goals and Aspirations</h1>
      
      <div>
      {items.map((item, index) => (
        <button value={item} onClick={handleClick} key={index}>
          {item}
        </button>
      ))}
      
    </div>
    </main>
    );
}

