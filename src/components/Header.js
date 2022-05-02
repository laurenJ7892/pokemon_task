import React, { useState, useEffect } from 'react';
import logoImg from '../../images/logo_pokemon_font.png';
import ashPic from '../../images/ash_holding_ball.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  function debounce (fn, ms) {
    let timer;
    return _ => {
      clearTimeout(timer);
      timer = setTimeout(_ => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }
  
  useEffect(() => {
    const deboucedResizeHandler = debounce(() => {
      setWindowWidth(window.innerWidth);
    });

    window.addEventListener('resize', deboucedResizeHandler);
    return () => {
      window.removeEventListener('resize', deboucedResizeHandler);
    };
  }, window.innerWidth);

  const toggleMenu = () => {
    if (!menuOpen) {
      document.getElementsByClassName('content-container')[0].hidden = true;
    }
    else {
      document.getElementsByClassName('content-container')[0].hidden = false;
    }
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="navbar--container">
      <img className="logo--image" src={logoImg}/>
      {( windowWidth >= 550 ?
        <div className="navbar--link--container">
          <NavLink exact className="navbar--links" to="/" activeClassName="navbar--links--active">POKEDEX</NavLink>
          <NavLink exact className="navbar--links" to="/party" activeClassName="navbar--links--active" >PARTY</NavLink>
          <img className="ash_rounded_image" src={ashPic}></img>
        </div>
      : <div className="navbar--link--container--mobile">
          <FontAwesomeIcon className="mobile-hamburger-lines" icon={faGripLines} size={'2x'} onClick={toggleMenu}/>
          { menuOpen && 
          <div class="mobile-menu">
            <div className="mobile-splash-background"></div>
              <FontAwesomeIcon className="mobile-close" size={'2x'} icon={faTimes} onClick={toggleMenu}/>
              <div>
                <div className="mobile--catch-me"> 
                  <div className="mobile-call-out-vector"></div>
                </div>
                <img className="ash_rounded_image_mobile_menu" src={ashPic}></img>
                    <NavLink className="navbar--links--mobile" to="/" onClick={(() => setMenuOpen(!menuOpen))} >POKEDEX</NavLink>
                    <NavLink className="navbar--links--mobile--bottom" to="/party" onClick={(() => setMenuOpen(!menuOpen))}>PARTY</NavLink>
              <img className="logo--image--mobile--menu" src={logoImg}/>
            </div>
          </div>}
        </div>
      )}
    </div>
  )
};

export default Header;