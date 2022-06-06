import React, { useState } from 'react'
import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css";
import CloseIcon from '@mui/icons-material/Close';
import Anchor from "../non-atomic/Anchor";
import List from "../non-atomic/List";

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [main, setMain] = useState(false)
  const [sub, setSub] = useState(false)
  const [style, setStyle] = useState({
    display: 'none',
    transform: 'translateX(100%)',
    transition: '.8s cubic-bezier(.23, 1, .32, 1)'
  })

  return (
    <>
      {/* responsive */}
      {/* <div ></div> */}

      <div className="offCanvas" style={style}>
        <CloseIcon className="close" onClick={() => {
          setStyle({
            display: 'none', transform: 'translateX(100%)',
            transition: '.8s cubic-bezier(.23, 1, .32, 1)'
          })
          setShow(!show)
        }} />
        <ul className="navbar responsive">

          <List className="active">
            <a href="">Home</a>
          </List>
          <List
            className="has-children" >
            <a href="#">Dropdown<i className={`drop fa ${main ? 'fa-angle-up' : 'fa-angle-down'}`} onClick={() => setMain(!main)}></i></a>
            {main
              ? <>
                <ul className="dropdown">
                  <List>
                    <a href="#">Menu One</a>
                  </List>
                  <li className="has-children" onClick={() => {
                    setSub(!sub)
                  }}>
                    <a href="#" >Menu Two<i className={`drop fa ${sub ? 'fa-angle-up' : 'fa-angle-down'}`} ></i></a>
                    {sub
                      ? <>
                        <ul className="dropdown">
                          <div className="submenu">
                            <List>
                              <a href="#">Sub Menu One</a>
                            </List>
                            <List>
                              <a href="#">Sub Menu Two</a>
                            </List>
                            <List>
                              <a href="#">Sub Menu Three</a>
                            </List>
                          </div>
                        </ul>
                      </>
                      : null}

                  </li>
                  <List>
                    <a href="#">Menu Three</a>
                  </List>
                </ul>
              </>
              : null}

          </List>
          <List>
            <a href="services">Services</a>
          </List>
          <List>
            <a href="blog">Blog</a>
          </List>
          <List>
            <a href="about">About</a>
          </List>
          <List>
            <a href="contact">Contact Us</a>
          </List>
        </ul>
      </div>

      <nav className="site-nav ">
        <div className="container">
          <div className="site-navigation">
            <Anchor link="" className="logo m-0">
              Impact
            </Anchor>

            <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-end">
              <List className="active">
                <a href="">Home</a>
              </List>
              <List
                className="has-children"               >
                <a href="#">Dropdown<i className="arrow fa fa-angle-down"></i></a>

                <ul className="dropdown">
                  <List>
                    <a href="#">Menu One</a>
                  </List>
                  <List className="has-children">
                    <a href="#" >Menu Two<i className="arrow fa fa-angle-right"></i></a>

                    <ul className="dropdown">
                      <div className="submenu">
                        <List>
                          <a href="#">Sub Menu One</a>
                        </List>
                        <List>
                          <a href="#">Sub Menu Two</a>
                        </List>
                        <List>
                          <a href="#">Sub Menu Three</a>
                        </List>
                      </div>
                    </ul>
                  </List>
                  <List>
                    <a href="#">Menu Three</a>
                  </List>
                </ul>
              </List>
              <List>
                <a href="services">Services</a>
              </List>
              <List>
                <a href="blog">Blog</a>
              </List>
              <List>
                <a href="about">About</a>
              </List>
              <List>
                <a href="contact">Contact Us</a>
              </List>
            </ul>
          </div>
        </div >
        <div className="burger" onClick={() => {
          setStyle({
            display: 'block', transform: 'translateX(0%)',
            transition: '.8s cubic-bezier(.23, 1, .32, 1)'
          })
          setShow(!show)
        }}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav >
    </>
  );
};

export default Navbar;