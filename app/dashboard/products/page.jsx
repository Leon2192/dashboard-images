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
        <Search placeholder={"Busca un usuario..."} />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
      <thead>
          <tr>
          <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
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
               IPhone
              </div>
            </td>
            <td>desc</td>
            <td>usd 100</td>
            <td>10</td>
            <td>Active</td>
            <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/test`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  {/* <form action={deleteUser}> */}
                    <input type="hidden" name="id" />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  {/* </form> */}
                </div>
              </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

export default page