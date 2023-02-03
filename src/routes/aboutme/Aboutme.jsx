import styles from "./aboutme.module.scss";

function Aboutme() {

  return (

      <div className={styles.Aboutme} style={{ 
        backgroundImage: `url("./background.gif")` 
      }}>
          <p>Su di me</p>
      </div>

  );
}

export default Aboutme;