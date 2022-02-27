import React, { useState, useEffect } from "react";

const Card = ({ cardData, userData }) => {
  const [cardUser, setcardUser] = useState([]);
  useEffect(() => {
    setcardUser(
      userData.filter((card) => {
        return card.template_id === cardData.template_id;
      })
    );
  }, [userData, cardData.template_id]);
   if (cardData.immutable_data.img !== "")
    return (
      <div className='card--wrap'>
        <img
          src={`https://images.weserv.nl/?url=https://gateway.ipfs.io/ipfs/${
            cardData.immutable_data.image || null
          }&w=150`}
          width='100'
          alt={cardData.name}
          className={`card--image ${cardUser.length > 0 && `user-have`}`}
        />
        {cardUser.length > 0 && (
          <span className='card--quantity'>x{cardUser[0].assets}</span>
        )}
      </div>
    );
  return null;
};
export default Card;
