import React, { useState } from 'react';

export default function Inventory() {
  const [inventory, setInventory] = useState({
    items: [
      {
        id: '1',
        name: 'Nike Airmax Pro',
        Stock: 100,
        image: 'prod1.jpg',
      },
      {
        id: '2',
        name: 'Adidas Sachin Edition',
        Stock: 150,
        image: 'prod2.jpg',
      },
      {
        id: '3',
        name: 'Nike Air Jordan 1',
        Stock: 50,
        image: 'prod3.jpg',
      },
      {
        id: '4',
        name: 'Reebok Athlete',
        Stock: 250,
        image: 'prod4.jpg',
      },
      {
        id: '5',
        name: 'Reebok Athlete',
        Stock: 250,
        image: 'prod4.jpg',
      },
    ],
    orders: [
      {
        orderid: '1',
        customername: 'Abhishek Jain',
        orderitem: [
          {
            id: '1',
            name: 'Nike Air Jordan 1',
            quantity: '2',
            image: 'prod3.jpg',
          },
        ],
        status: 'Pending',
      },
      {
        orderid: '2',
        customername: 'Shailee Jain',
        orderitem: [
          {
            id: '2',
            name: 'Adidas Sachin Edition',
            quantity: '5',
            image: 'prod2.jpg',
          },
        ],
        status: 'Done',
      },
      {
        orderid: '3',
        customername: 'Lokesh Jain',
        orderitem: [
          {
            id: '3',
            name: 'Reebok Athlete',
            quantity: '10',
            image: 'prod4.jpg',
          },
        ],
        status: 'Pending',
      },
    ],
  });

  const deleteItem = (id) => {
    setInventory((prevInventory) => ({
      ...prevInventory,
      items: prevInventory.items.filter((item) => item.id !== id),
    }));
  };

  return (
    <div className="inventory mainbar">
      <div className="heading">
        <div className="headingtag">Inventory</div>
      </div>
      <div className="totalitems">Total Items - {inventory.items.length}</div>
      <div className="inventoryheads">
        <div className="invsno">Sno.</div>
        <div className="invimg">Prod. Image</div>
        <div className="invid">Prod. ID</div>
        <div className="invname">Prod. Name</div>
        <div className="invquantity">Count</div>
        <div className="invbutton">
          <div className="deleteitem">Delete</div>
        </div>
      </div>
      <div className="inventorysection">
        {inventory.items.map((item, index) => (
          <InvCard
            key={item.id}
            index={index + 1}
            imgsource={item.image}
            id={item.id}
            invname={item.name}
            invcount={item.Stock}
            onDelete={deleteItem}
          />
        ))}
      </div>
    </div>
  );

  function InvCard({ index, imgsource, id, invname, invcount, onDelete }) {
    return (
      <div className="invcard">
        <div className="invsno">{index}</div>
        <div className="invimg">
          <img src={imgsource} alt="" className="invimgimg" />
        </div>
        <div className="invid">{id}</div>
        <div className="invname">{invname}</div>
        <div className="invquantity">{invcount}</div>
        <div className="invbutton">
          <button className="deleteitembutton" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
