import styles from "./aboutme.module.scss";
import 'animate.css';

function Aboutme() {

  return (

      <div className={styles.Aboutme} style={{ backgroundImage: `url("./background.svg")`}}>
          <p class="animate__animated animate__backInDown">Aboutme</p>
      </div>

  );
}

export default Aboutme;