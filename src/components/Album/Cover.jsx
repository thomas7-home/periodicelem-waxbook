import React from "react";

export const Cover = ({ user, data }) => {
  return (
    <>
      <h1 className='cover__green--title'>Periodic Elements Collection Book</h1>
      <img
        src={`../../assets/periodicelem-logo.jpg`}
        className='cover__green--image'
        alt='logo'
      />
      {user.data.length > 0 && (
        <section>
          <p>of {user.user}</p>
        </section>
      )}
    </>
  );
};
