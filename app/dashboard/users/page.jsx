import React from 'react'
import styles from "@/components/ui/dashboard/users/Users.module.css"
import Search from '@/components/ui/dashboard/search/Search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/components/ui/dashboard/pagination/Pagination'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Busca un usuario..."} />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
      <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
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
                className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>Test@gmail.com</td>
            <td>12/1/2023</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/test`}>
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