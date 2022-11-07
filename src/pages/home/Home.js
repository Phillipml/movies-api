import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        <li>
          <img
            src="https://assets1.ignimgs.com/2017/03/24/2007-spider-man3-8-1490395333224.jpg"
            alt="Spider-Man"
            className={styles.img}
          />
          <span>Spider-Man</span>
        </li>
        <li>
          <img
            src="https://sm.ign.com/t/ign_br/screenshot/s/spider-man/spider-man-3-2007-the-greatest-battle-lies-within-poster_8vhf.620.jpg"
            alt="Spider-Man"
            className={styles.img}
          />
          <span>Spider-Man</span>
        </li>
        <li>
          <img
            src="https://sm.ign.com/t/ign_br/screenshot/s/spider-man/spider-man-3-2007-the-greatest-battle-lies-within-poster_8vhf.620.jpg"
            alt="Spider-Man"
            className={styles.img}
          />
          <span>Spider-Man</span>
        </li>
      </ul>
    </div>
  );
}
export default Home;
