import styles from "./home.module.scss";
import Spline from '@splinetool/react-spline';

function Home() {

  return (

      <div className={styles.Home}>
         <Spline scene="https://prod.spline.design/n58qGHBAX5FaUtaD/scene.splinecode" />

      </div>

  );
}

export default Home;