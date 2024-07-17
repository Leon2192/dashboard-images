import Image from "next/image";
import styles from "./Card.module.css";

const Card = ({ name, data, lastModified, contentType, status }) => {
  const imageSrc = `data:${contentType};base64,${data}`;

  return (
    <div className={styles.container}>
      <Image
        src={imageSrc}
        alt={name}
        width={100}
        height={100}
        className={styles.image}
      />
      <div className={styles.texts}>
        <span className={styles.title}>{name}</span>
        <span className={styles.number}>{new Date(lastModified).toLocaleDateString()}</span>
        <span className={styles.detail}>
          <span className={styles.positive}>{status}</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
