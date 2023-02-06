import styles from "./home.module.scss";
import Spline from '@splinetool/react-spline';

function Home() {

  return (

      <div className={styles.Home} 
      
      style={{ 
        backgroundImage: `url("./background.gif")` 
      }}>
        <Spline scene="https://prod.spline.design/n58qGHBAX5FaUtaD/scene.splinecode" />
       
        <div className={styles.containerSpan}  id="text"><h1>BENVENUTI</h1></div>
          
      </div>

  );
}

export default Home;