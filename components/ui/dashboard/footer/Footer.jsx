import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Footer</div>
      <div className={styles.text}>contenido del footer.</div>
    </div>
  );
};

export default Footer;