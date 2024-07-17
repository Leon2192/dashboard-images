import Image from "next/image";
import styles from "./Rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Nuevo</span>
          <h3 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus quibusdam possimus facilis quae aspernatur ea consequatur debitis veritatis, atque placeat fugiat cumque mollitia, ipsa adipisci ipsam sint. Blanditiis, quasi!
          </h3>
          <span className={styles.subtitle}>Hace 15 minutos</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Ver
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Proximamente</span>
          <h3 className={styles.title}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur illo saepe possimus voluptas ad iste ex. Veritatis corrupti ad, soluta quam, quis doloremque impedit ea unde tempore laudantium quas asperiores?
          </h3>
          <span className={styles.subtitle}>Aproximadamente en 1 semana</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;