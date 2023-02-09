import styles from "./aboutme.module.scss";
import 'animate.css';

function Aboutme() {

  return (

      <div className={styles.Aboutme} style={{ backgroundImage: `url("./background.svg")`}}>
          <p class="animate__animated animate__backInDown">
         Ciao! Mi chiamo <span>jessica vitanza</span>,<br />
          Sono nata a Palermo il 28/07/1995 e attualmente vivo in Liguria a Cairo Montenotte (SV). <br/>
            Sono una persona determinata, testarda e precisa; <br/>
            In tutto ciò che faccio metto testa e cuore fino al raggiungimento dell'obiettivo. <br/>
            Sono una persona socielove, lavoro bene in gruppo e tendo a volere il controllo della situazione senza perdere nessun dettaglio. <br/>
            Mi piace esplorare, dalla natura agli sport; <br/>
    Spesso mi metto alla prova per scoprire ed eventualmente superare i miei limiti mentali e fisici. <br/>
    Pratico diverse discipline che mi avvicinano molto alla natura, come Surf e Snowboard. <br/>
    Amo e rispetto il mondo che mi circonda e da qualche anno ho intrapreso uno stile di vita più green e sostenibile che include
    alimentazione solo a base vegetale (Vegan), attività di volontariato quali pulizia di spiaggia dai rifiuti o portare da mangiare ai rifugi di animali 
    e in generale provo ad avere uno stile di vita che sia il meno inquinante possibile sia in casa che fuori nei mei spostamenti.

          </p>
      </div>

  );
}

export default Aboutme;