"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono ({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const name = "MACIEJ'S MOVIES";
  const [navbarName, setNavbarName] = useState(name);

  const handleOnMouseEnter = () => {
    console.log('handleOnMouseEnter');
    let iteration = 0;
    const interval = setInterval(() => {
      setNavbarName(name
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return name[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join(""));
      if (iteration >= name.length) {
        clearInterval(interval);
      }
      iteration += 1/2;
    }, 40);
  };

  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-32 my-12`}>
        <div className="my-8">
          <nav className="w-full bg-gray-900 shadow">
            <div className="justify-between px-4 md:items-center md:flex md:px-8">
              <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                  <Link href="/">
                    <h2
                      className={`${mono.className} text-2xl text-white font-bold`}
                      onMouseEnter={handleOnMouseEnter}
                    >
                      {navbarName}
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
