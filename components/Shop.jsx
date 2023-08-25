import React, { useState, useEffect } from 'react';

const Shop = () => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/shopData')
      .then(response => response.json())
      .then(data => setShopData(data))
  }, []);

  return (
    <div>
      <h2>Mağaza Ürünleri</h2>
      <ul>
        {shopData.map(item => (
          <li key={item.id}>
            <h3>{item.productName}</h3>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
