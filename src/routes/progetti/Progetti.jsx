import styles from "./progetti.module.scss";
import Spline from '@splinetool/react-spline';


function Progetti() {

  return (

      <div className={styles.Progetti}>
          <p>Progetti</p>    
          <Spline scene="https://prod.spline.design/i8Vjn4rypOdoJc4i/scene.splinecode" />
          <Spline scene="https://prod.spline.design/XlJVSXRjOGULldPl/scene.splinecode" />
      </div>

  );
}

export default Progetti;