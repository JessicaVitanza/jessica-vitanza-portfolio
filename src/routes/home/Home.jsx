import styles from "./home.module.scss";
import Spline from '@splinetool/react-spline';

function Home() {

  return (

      <div className={styles.Home} 
      
      style={{ 
        backgroundImage: `url("./background.gif")` 
      }}>
         <Spline scene="https://prod.spline.design/n58qGHBAX5FaUtaD/scene.splinecode" />
       
          <img src="./intro.png" alt="contatti" />
          
      </div>

  );
}

export default Home;