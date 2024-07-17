import React from 'react'
import styles from "./Transactions.module.css"
import Image from 'next/image'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ultimos movimientos</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nombre banner</td>
            <td>Estado</td>
            <td>Fecha de actualizacion</td>
            <td>Formato</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/images/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Usuario
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pendiente
              </span>
            </td>
            <td>14.02.2024</td>
            <td>.png</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/images/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Usuario 2
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Subido</span>
            </td>
            <td>14.02.2024</td>
            <td>.png</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/images/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Usuario 3
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelado
              </span>
            </td>
            <td>14.02.2024</td>
            <td>.jpeg</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/images/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Usuario 4
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pendiente
              </span>
            </td>
            <td>14.02.2024</td>
            <td>.jpg</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions