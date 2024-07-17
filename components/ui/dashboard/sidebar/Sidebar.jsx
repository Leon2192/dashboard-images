import React, { useContext } from 'react'
import styles from './Sidebar.module.css'
import {
  MdDashboard,
  MdOutlineSettings,
  MdLogout,
} from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { FaUpload, FaUser } from "react-icons/fa";
import MenuLink from './menuLink/MenuLink';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';


const menuItems = [
  {
    title: "Dashboard",
    list: [
      {
        title: "Cargar banner",
        path: "/banners",
        icon: <FaUpload />,
      },
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Usuarios",
        path: "/dashboard/users",
        icon: <FaUser />,
      },
      {
        title: "Historial",
        path: "/dashboard/products",
        icon: <LuHistory />,
      },
    ],
  },
  {
    title: "Admin",
    list: [
      {
        title: "Configuracion",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
    ],
  },
];

const Sidebar = () => {
  const { user, handleLogout } = useAuth();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/images/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          {user && "Hola"}
          <span className={styles.userTitle}>{user ? user.email : "Rol"}</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button onClick={handleLogout} type="submit" className={styles.logout}>
        <MdLogout />
        Cerrar sesion
      </button>
    </div>
  )
}

export default Sidebar