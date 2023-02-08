import styles from "./home.module.scss";
import Spline from '@splinetool/react-spline';import 'animate.css';

function Home() {

  return (

      <div className={styles.Home} style={{ backgroundImage: `url("./background.svg")`}}>
         <Spline scene="https://prod.spline.design/KRh24sNsD39JSLwE/scene.splinecode" />         
         <div className={styles.containerSpan}  id="text"><h1>BENVENUTI</h1></div>
      </div>

  );
}

export default Home;