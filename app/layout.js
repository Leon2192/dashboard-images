import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from '@/utilities/ClientLayout/ClientLayout'

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Dashboard banners | Solution Box",
  description: "Aplicacion desarrollada para la carga de banners",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={poppins.className}>
          <ClientLayout>
            {children}
          </ClientLayout>
      </body>
    </html>
  );
}
