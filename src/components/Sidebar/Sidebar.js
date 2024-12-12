import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css';
import dash from '../../assets/side bar/dash.png';
import award from '../../assets/side bar/award.png';
import intern from '../../assets/side bar/intern-icon.png';
import { TypesItem } from '../TypesItem/TypesItem';

export const Sidebar = () => {
  const types = [
    { 
      img: dash,
      type: "Dashboard",
      link: "/dashboard"
    },
    { 
      img: award,
      type: "Skill Test",
      link: "/"
    },
    { 
      img: intern,
      type: "Internships",
      link: "/internships"
    },
  ];

  return (
    <div className={classes.sidebar}>
      {types.map((type, index) => (
        <NavLink 
          key={`${type.type} ${index}`} 
          to={type.link} 
          className={({ isActive }) => isActive ? classes.active : ''}
        >
          <TypesItem img={type.img} typeName={type.type} />
        </NavLink>
      ))}        
    </div>
  );
};