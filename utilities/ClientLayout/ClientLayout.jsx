"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/ui/dashboard/sidebar/Sidebar";
import Navbar from "@/components/ui/dashboard/navbar/Navbar";
import Footer from "@/components/ui/dashboard/footer/Footer";
import styles from '@/components/ui/dashboard/dashboard.module.css';
import { AuthProvider, useAuth } from "../../context/AuthContext";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { SnackbarProvider } from 'notistack'

// Este layout esta creado porque necesito validar que login (por su path) no este incluido en
// el layout del dashboard, y para hacerlo necesito ejecutarlo desde el lado del cliente
// lo cual no es posible en el layout principal.

export default function ClientLayout({ children }) {
    const pathname = usePathname();
    const isLoginPage = pathname === "/login";

    return (
        <SnackbarProvider>
            <AuthProvider>
                <PrivateRoute>

                    <div className={styles.container}>
                        {!isLoginPage && (
                            <div className={styles.menu}>
                                <Sidebar />
                            </div>
                        )}
                        <div className={styles.content}>
                            {!isLoginPage && <Navbar />}
                            {children}
                            {!isLoginPage && <Footer />}
                        </div>
                    </div>

                </PrivateRoute>
            </AuthProvider>
        </SnackbarProvider >
    );
}
