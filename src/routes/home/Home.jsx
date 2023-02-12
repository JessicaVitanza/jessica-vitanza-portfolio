import styles from "./home.module.scss";
import Spline from '@splinetool/react-spline';
import 'animate.css';
import { useState, useEffect } from "react";

function Home() {

  const [isFetching, setIsFetching] = useState(true); 

  useEffect(() => {
    setTimeout(function () {
      console.log("Delayed for 5 second."); 
      setIsFetching(false); 
    }, 5000);
  }, []);

  if (isFetching) {
    return (
      <div className={styles.Loading}style={{ backgroundImage: `url("./green.svg")`}}>
      <h1>Loading...</h1>
     <span className={styles.loader}></span>
      </div>
    );
  }

  return (

      <div className={styles.Home} style={{ backgroundImage: `url("./green.svg")`}}>
         <Spline scene="https://prod.spline.design/KRh24sNsD39JSLwE/scene.splinecode" />         
         <div className={styles.containerSpan}  id="text"><h1>BENVENUTI</h1></div>
      </div>

  );
}

export default Home;