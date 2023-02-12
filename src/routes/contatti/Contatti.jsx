import styles from "./contatti.module.scss";


function Contatti() {

  return (

      <div className={styles.Contatti} style={{ backgroundImage: `url("./green.svg")`}}>
          <div className={styles.ImageDiv}><img className={styles.Image} src="./contact.png" alt="" /></div>
          
          <div className={styles.Links}>
          <a target="blank" href="https://wa.me/3404898158?"><img src="./whatsapp.png" alt="contatti" /></a>
          <a target="blank" href="https://github.com/JessicaVitanza"><img src="./github.png" alt="contatti" /></a>
          <a target="blank" href="https://www.linkedin.com/in/jessica-vitanza-2b53b1208/"><img src="./linkedin.png" alt="contatti" /></a>
          <a target="blank" href="https://www.instagram.com/jessica.vitanza/"><img src="./instagram.png" alt="contatti" /></a>
          </div>
      </div>

  );
}

export default Contatti;