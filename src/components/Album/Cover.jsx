import React from "react";
import logoImage from "../../assets/pixellogo.png";

export const Cover = ({ user, data }) => {
  return (
    <>
      <h1 className='cover__green--title'>Pixel Heroes 1st Edition Collection Book</h1>
      <img src={logoImage} className='cover__green--image' alt='logo' />
      {user.data.length > 0 && (
        <section>
          <p>of {user.user}</p>
        </section>
      )}
    </>
  );
};
