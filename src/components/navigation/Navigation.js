import React, { useState, useCallback } from 'react';
import logo from '../../images/icon.png'
import { Link } from "react-router-dom";
import ActiveLink from './ActiveLink';
import BurgerButton from './BurgerButton';
const NavBar = () => {
  const [isActive, setActive] = useState(false);
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];
  const toggleNav = useCallback(() => {
    setActive(!isActive)
  }, [isActive])

  const closeNav = useCallback(() => {
    setActive(false)
  }, [])
  return (
    <div className="h-[68px] ">
      <header className="font-sans w-full bg-dark-grey z-2000 fixed">
        <div className="container mx-auto px-5 lg:px-40">
          <nav className="flex flex-col justify-between md:flex-row">
            <div className="flex justify-center px-2 py-4">
              <div className="flex justify-between w-full">
                <Link to="/" className="flex">
                  <img src={logo} width="30" height="30" className="rounded-full cursor-pointer" alt="avatar" />
                  <span className="flex flex-col py-4 px-4 text-yellow text-xl font-extrabold h-8 justify-center cursor-pointer">Thanh Nguyen</span>
                </Link>
              <BurgerButton isActive={isActive} toggle={toggleNav} /> 
              </div>
            </div>
            <div className="flex flex-col text-center justify-center font-semibold text-xl nav-items md:border-none md:flex-row md:max-h-300 py-4">
            {/* <div className={`flex flex-col text-center justify-center font-semibold text-xl nav-items md:border-none md:flex-row md:max-h-300 py-4 ${!isActive ? 'show' : ''}`}> */}
              {navigation.map((item) => (
                <ActiveLink href={item.href} onClick={closeNav}>
                  {item.name}
                </ActiveLink>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
export default NavBar;