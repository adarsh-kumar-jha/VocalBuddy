import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navigation.module.css';
export const navigation = () => {
    const brandstyle={
        color:'#fff',
        textDecoration:'none',
        fontweight:'bold',
        fontsize:'22px',
        display: 'flex',
        alignItems: 'center',
    };

    const logoText = {
       marginLeft: '10px',
    };

  return (
    <nav className={`${styles.navbar} container`}>
        <Link style={brandstyle} to="/">
            <img src="/images/logo.png" alt="logo" />
            <span style={logoText}>VocalBuddy</span>
        </Link>
    </nav>
  )
}
export default navigation;
