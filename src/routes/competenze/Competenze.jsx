import styles from "./competenze.module.scss";
import 'animate.css';

function Competenze() {

  return (

      <div className={styles.Competenze} style={{ backgroundImage: `url("./background.svg")`}}>
           <p class="animate__animated animate__backInDown">Competenze</p>
      </div>

  );
}

export default Competenze;