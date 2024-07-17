import React from 'react'
import styles from "@/components/ui/dashboard/users/singleUser/SingleUser.module.css"
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/images/noavatar.png" fill alt='' />
        </div>
        Nombre de usuario
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="">Username</label>
          <input type="text" name='username' placeholder='Username...' />
          <label htmlFor="">Email</label>
          <input type="email" name='email' placeholder='john@gmail.com' />
          <label htmlFor="">Password</label>
          <input type="password" name='password' placeholder='Password...' />
          <label htmlFor="">Phone</label>
          <input type="number" name='phone' placeholder='+1234566' />
          <label htmlFor="">Address</label>
          <input type="text" name='address' placeholder='Address...' />
          <label htmlFor="">Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label htmlFor="">Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>

    </div>
  )
}

export default SingleUserPage