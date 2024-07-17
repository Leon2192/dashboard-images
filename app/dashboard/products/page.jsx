import React from 'react'
import styles from "@/components/ui/dashboard/products/Products.module.css"
import Search from '@/components/ui/dashboard/search/Search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/components/ui/dashboard/pagination/Pagination'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {/* <Search placeholder={"Busca un usuario..."} /> */}
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Agregar nuevo</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Descripcion</td>
            <td>Formato</td>
            <td>Ultima act</td>
            <td>Estado</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/images/noavatar.png"
                  alt=''
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                banner hp aruba
              </div>
            </td>
            <td>test descripcion</td>
            <td>.jpg</td>
            <td>10-02-2024</td>
            <td>Aprobado</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/products/test`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    Ver
                  </button>
                </Link>
                {/* <form action={deleteUser}> */}
                <input type="hidden" name="id" />
                <button className={`${styles.button} ${styles.delete}`}>
                  Eliminar
                </button>
                {/* </form> */}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default page