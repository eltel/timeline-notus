import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import IndexNavbar from "app/components/Navbars/IndexNavbar.js";
// const inter = Inter({ subsets: ["latin"] });
import Footer from "app/components/Footers/Footer.js";

export default function Home() {
  return (
    <>
      <IndexNavbar fixed />
      <main className={styles.main}>
        <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
          <div className="container mx-auto items-center flex flex-wrap">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
              <div className="pt-32 sm:pt-0">
                <h2 className="font-semibold text-4xl text-blueGray-600">
                  Timeline Music
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Sonic visions of futures, and futures passed. Documenting
                  forward thinking music from yesteryear, today, and all of the
                  tomorrows.
                </p>
                <div className="mt-12">
                  <Link
                    href="/main-feed"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Main Feed
                  </Link>
                  <Link
                    href="/magazine"
                    className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  >
                    Magazine
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
            src="/img/timeline-2021-medium.png"
            alt="..."
          />
        </section>
        <Footer />
      </main>
    </>
  );
}
