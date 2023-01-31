import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.scss";

function App() {

  return (
    <>
      <div className={styles.App}>
          <Link to="/">Home</Link>
          <Link to="aboutme">About me</Link>
          <Link to="esperienze">Esperienze</Link>
          <Link to="formazione">Formazione</Link>
          <Link to="competenze">Competenze</Link>
          <Link to="progetti">Progetti</Link>
          <Link to="contatti">Contatti</Link>
      </div>

      <Outlet />
    </>
  );
}

export default App;