import styles from "./contatti.module.scss";

function Contatti() {

  return (

      <div className={styles.Contatti} style={{ backgroundImage: `url("./background.svg")`}}>
          
          <img src="./contact.png" alt="" /><p>Contatti</p>
      </div>

  );
}

export default Contatti;