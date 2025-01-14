import React from "react";
import logoImage from "../../assets/pixellogo.png";

export const Cover = ({ user, data }) => {
  return (
    <>
      <h1 className='cover__green--title'></h1>

      {user.data.length > 0 && (
        <section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
          <p>{user.user}</p>
        </section>
      )}
    </>
  );
};
