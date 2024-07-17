import React, { createContext, useContext, useState } from 'react';
import { auth } from '@/libs/firebase/firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack'

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();

    const handleLogin = async () => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            console.log("User logged in successfully");
            enqueueSnackbar('Bienvenido', {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
                autoClose: 1000,
            });
            router.push("/banners");
        } catch (error) {
            console.error("Error during login:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async () => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            console.log("User registered successfully");
            enqueueSnackbar('Usuario regstrado. Bienvenido!', {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
                autoClose: 1000,
            });
            router.push("/banners");
        } catch (error) {
            console.error("Error during registration:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            setUser(null);
            console.log("User signed out successfully");
            enqueueSnackbar('Sesion cerrada correctamente.', {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
                autoClose: 1000,
            });
            router.push("/login");
        } catch (error) {
            console.error("Error during sign out:", error);
        } finally {
            setLoading(false);
        }
    };

    const value = {
        email,
        setEmail,
        password,
        setPassword,
        isLogin,
        setIsLogin,
        loading,
        user,
        handleLogin,
        handleRegister,
        handleLogout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
