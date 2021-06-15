import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/ClothesStore.png';
import Search from '../../assets/img/Icon-ionic-ios-search.png';
import Cart from '../../assets/img/icon-cart.png';
import User from '../../assets/img/icon-user.png';
import './header.css';

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-white bg-white">
        <div className="input-group divNavbarUp">
          <Link to="/">
            <img src={Logo} alt="Responsive" className="logo img-fluid" title="CLOTHESSTORE"></img>
          </Link>
        
          
          <div className="input-group-append">
            <input className="form-control inputSearch" type="search" placeholder="Buscar aquí producto" aria-label="Search" aria-describedby="basic-addon1"></input>
            <span className="input-group-text spanSearch" id="basic-addon1">
              <img src={Search} alt="" className="imgSearch" title="search" ></img>
            </span>
          </div>
          
          <div>
            <img src={Cart} alt="" className="imgCart" title="Carrito de compras" ></img>
          </div>

          <div>
            <img src={User} alt="" className="imgUser" title="Login de usuarios" ></img>
          </div>

          <div className="divButtonLogin">
            <button className="buttonLogin" type="button" >Iniciar sesión</button>
          </div>
          
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark colorNavbarDown">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse divMenu" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item border-right">
              <Link to="">
                <p className="nav-link textColor" >
                  Hombre
                </p>
              </Link>
            </li>
            
            <li className="nav-item border-right">
              <Link to="">
                <p className="nav-link textColor" >
                  Mujer
                </p>
              </Link>
            </li>
            
            <li className="nav-item border-right">
              <Link to="">
                <p className="nav-link textColor" >
                  Junior
                </p>
              </Link>
            </li>
            
            <li className="nav-item border-right">
              <Link to="">
                <p className="nav-link textColor" >
                  Niños
                </p>
              </Link>
            </li>
            
            <li className="nav-item border-right">
              <Link to="">
                <p className="nav-link textColor" >
                  Accesorios
                </p>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="">
                <p className="nav-link textColor" >
                  Ofertas
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
