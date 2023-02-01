import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.scss";

function App() {

  return (
    <>
      <div className={styles.App}>
          <Link to="/"><img src="./home.gif" alt="home" /><p>Home</p></Link>
          <Link to="aboutme"><img src="./girl.gif" alt="aboutme" /><p>About me</p></Link>
          <Link to="esperienze"><img src="./work.gif" alt="esperienze" /><p>Esperienze</p></Link>
          <Link to="formazione"><img src="./book.gif" alt="formazione" /><p>Formazione</p></Link>
          <Link to="competenze"><img src="./cloud.gif" alt="competenze" /><p>Competenze</p></Link>
          <Link to="progetti"><img src="./project.gif" alt="progetti" /><p>Progetti</p></Link>
          <Link to="contatti"><img src="./mail.gif" alt="contatti" /><p>Contatti</p></Link>
      </div>

      <Outlet />
    </>
  );
}

export default App;