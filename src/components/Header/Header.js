import React from 'react'

import classes from './Header.module.css'
import logo from '../../assets/logo.png'
import userDp from '../../assets/dp.png'

const Header = () => {
  return (
    <div className={classes.header}>
        <img className={classes.logo} src={logo} alt="whatbytes"/>
        <div className={classes.user}>
            <img className={classes.userDp} src={userDp} alt="user profile"/>
            <span className={classes.username}>Adithya Kammati</span>
        </div>
    </div>
  )
}

export default Header