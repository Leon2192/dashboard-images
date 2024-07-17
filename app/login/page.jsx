"use client"
import React, { useContext } from 'react';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import Loader from "@/components/ui/dashboard/loader/Loader";

const Page = () => {
  const { email, setEmail, password, setPassword, isLogin, setIsLogin, loading, handleLogin, handleRegister } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border-2 border-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-6">
          <Image src="/images/logo.png" alt="Logo" width={200} height={300} />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? "Iniciar sesión" : "Registrar una nueva cuenta"}</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full text-slate-700 p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full text-slate-700 p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              onClick={isLogin ? handleLogin : handleRegister}
              className="w-full bg-rose-600 text-white p-3 rounded-lg mb-4 hover:bg-pink-600 transition-colors"
            >
              {isLogin ? "Iniciar sesión" : "Registrar cuenta"}
            </button>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="w-full bg-sky-600 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
