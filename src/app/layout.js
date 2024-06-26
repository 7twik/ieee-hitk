
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@com/header/Header"; 
import Footer from "@com/footer/Footer";
import Loader from "./loading"
const inter = Inter({ className:"scrollbar" , subsets: ["latin"] });
import React from "react";
import { UserProvider } from '@auth0/nextjs-auth0/client';
export const metadata = {
  title: "IEEE-HITK",
  description: "A not-for-profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. © .. .",
};

export default function RootLayout({ children }) {   
  return (
    <html lang="en">
      <UserProvider>
      <body className={inter.className}>
        
        <div className="wrapper overflow-y-scroll  no-scrollbar">
        
        {/* <Suspense fallback={<Loader />}> */}
          <Header />
            {children}
          <Footer />
          {/* </Suspense> */}
        </div>
      
      </body>
      </UserProvider>
    </html>
  );
}
