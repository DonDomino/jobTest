import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Items() {
  const items = [
    {
      date: "Monday 10th 2:28 PM",
      from: "Houston, TX, 33619",
      to: "Atlanta, GA, 30123",
      price: "$250.00",
      qty: "1"
    },{
      date: "Monday 10th 2:28 PM",
      from: "Houston, TX, 33619",
      to: "Atlanta, GA, 30123",
      price: "$250.00",
      qty: "1"
    },
    {
      date: "Monday 10th 2:28 PM",
      from: "Houston, TX, 33619",
      to: "Atlanta, GA, 30123",
      price: "$250.00",
      qty: "1"
    }
  ];
  
  return (
    <div className="itemsWrapper">
      {items.map((item, index) => 
        <div className="item" key={index}>
          <FontAwesomeIcon icon="check-circle"/>
          <div className="itemWrapper">
            <div className="date">
              <span>{item.date}</span>
            </div>
            <div className="location">
              <div className="locationWrapper">
                <FontAwesomeIcon icon="location-arrow"/>
                <div className="adress">
                  <span>{item.from}</span>
                  <FontAwesomeIcon icon="chevron-down"/>
                  <span>{item.to}</span>
                </div>
              </div>
            </div>
            <div className="price">
              <FontAwesomeIcon icon="truck" className="fa-flip-horizontal"/>
              <p>{item.price}</p>
              <div className="numberSquare">
                <span>{item.qty}</span>
              </div>
              <FontAwesomeIcon icon="ellipsis-v"/>
            </div>
          </div>
        </div>
      )}
      <div className="circleButton">
        <FontAwesomeIcon icon="plus-circle" />
      </div>
    </div>
  );
}

export default Items;