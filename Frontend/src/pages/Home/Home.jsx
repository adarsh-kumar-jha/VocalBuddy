import React from 'react'
import styles from './Home.module.css';
import { Link,useNavigate } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

export const Home = () => {
  const signInLinkStyle = {
    color: '#0077ff',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px',
  };
const navigate= useNavigate();

  function startRegister() {
    navigate('/register');
          
  }

  return (
    
   <div className={styles.cardWrapper}>
    <Card title="Welcome to VocalBuddy!!!" icon="logo">
    
    
   <p className={styles.text}>
        VocalBuddy is a platform that helps you improve
         your Communication skills , By not only learning
         But also allowing you to share your knowledge with others 
         in a single platform.We use the latest technology to
        help you deliver a lecture to your friends.You can learn to Speak English as well as several other 
        languages, We Got Everything to boost Your Communcication!! 
        Let's Get started!!
         
   </p>
   <div>
   <Button onClick={startRegister} text="Get Your Username"/>
   </div>
   
   <div className={styles.signinWrapper}>
   <span className={styles.hasInvite}>Have An Invite Text ?</span>
   <Link style={signInLinkStyle} to="/login">Sign in</Link>
   </div>

   </Card>
</div> 
         
  )
};
export default Home;
 