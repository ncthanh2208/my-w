import React from 'react';
import classnames from "classnames";
import PropTypes from 'prop-types'
import { Link, useLocation } from "react-router-dom";
const ActiveLink = ({ children, href, ...props }) => {
    
    let location = useLocation();
    const isActive = href === location.pathname;
    const classNames = classnames(
      ' py-4 px-2 uppercase transition-colors duration-150',
      {
        'text-yellow': isActive,
        'text-grey text-opacity-90 hover:text-white': !isActive,
      }
    )
    return (
      <Link to= {href}>
        <span className={classNames} >{children}</span>
      </Link>
    )
  }
  ActiveLink.propTypes = {
    children: PropTypes.any,
    href: PropTypes.string.isRequired,
    onClick: PropTypes.func
  }
  export default ActiveLink;