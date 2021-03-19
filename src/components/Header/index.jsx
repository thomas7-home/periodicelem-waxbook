import React from "react";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { Footer } from "../Footer";
import { Link } from "react-router-dom";

function Header({ setUser, user, getUser }) {
  return (
    <header>
      <div className='header--logo'>
        <Link to='/' className='menu--link'>
          <img
            src='../../assets/periodicelem-logo.jpg'
            width='120'
            alt='periodicelem logo'
          />
        </Link>
      </div>
      <div className='input--user'>
        {window.location.pathname !== "/suggestion" ? (
          <form className='input--user__form'>
            <input
              type='text'
              onChange={(e) =>
                setUser((data) => ({ ...data, ...{ user: e.target.value } }))
              }
              placeholder='Input your WAX account (.wam or .waa)'
              value={user?.user}
            />
            <button type='submit' className='input--button' onClick={getUser}>
              <span aria-label='search user' role='img'>
                🔍
              </span>
            </button>
          </form>
        ) : (
          <Link to='/' className='menu--link'>
            <span role='img' aria-label='back to index'>
              👈
            </span>
          </Link>
        )}
      </div>
      <div>
        <label htmlFor={"open"}>
          <Menu
            width={25}
            height={35}
            style={{ paddingTop: "8px" }}
            fill={"#ad514d"}
          />
        </label>
        <input type='checkbox' id='open' className='menu--check' />
        <MenuHeader />
      </div>
    </header>
  );
}

function MenuHeader() {
  return (
    <nav className='menu--aside'>
      <ul className='menu--aside__block'>
        <li>
          <Link to='/suggestion'>Click here to tell us about your suggestions</Link>
        </li>
        <li>
          <Footer />
        </li>
      </ul>
    </nav>
  );
}

export default Header;
