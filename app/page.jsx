import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import IndexNavbar from "app/components/Navbars/IndexNavbar.js";
// const inter = Inter({ subsets: ["latin"] });
import Footer from "app/components/Footers/Footer.js";
import AnimateIn from "app/components/Animations/AnimateIn";

export default function Home() {
  return (
    <>
      <IndexNavbar fixed />
      <main className={styles.main}>
        <section className="header pt-8">
          <div className="container mt-6 mx-auto flex flex-wrap items-center justify-center">
            <AnimateIn>
              <div className="w-3/4 px-4 h-96 relative float-right my-8">
                <img
                  className="relative float-right sm:w-3/12 sm:mt-0 w-6/12 h-[260px] max-h-[260px]"
                  src="/img/timeline-2021-medium.png"
                  alt="..."
                />
                <div className="pt-32 sm:pt-0">
                  <h2 className="font-sans font-thin text-4xl text-blueGray-600">
                    Timeline Music
                  </h2>

                  <p className="mt-12 text-lg leading-relaxed font-sans text-blueGray-500">
                    Sonic visions of futures, and futures passed. Documenting
                    forward thinking music from yesteryear, today, and all of
                    the tomorrows.
                  </p>
                  <div className="mt-12">
                    <Link
                      href="/main-feed"
                      className="get-started text-white font-sans font-thin px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      Main Feed
                    </Link>
                    <Link
                      href="/magazine"
                      className="github-star ml-1 text-white font-sans font-thin px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                    >
                      Magazine
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn>
              <div className="w-3/4 px-4 h-96 relative float-left my-8">
                <img
                  className="relative float-right sm:w-3/12 sm:mt-0 w-6/12 h-[260px] max-h-[260px]"
                  src="/img/timeline-2021-medium.png"
                  alt="..."
                />
                <div className="pt-32 sm:pt-0">
                  <h2 className="font-sans font-thin text-4xl text-blueGray-600">
                    Timeline Music
                  </h2>

                  <p className="mt-12 text-lg leading-relaxed font-sans text-blueGray-500">
                    Sonic visions of futures, and futures passed. Documenting
                    forward thinking music from yesteryear, today, and all of
                    the tomorrows.
                  </p>
                  <div className="mt-12">
                    <Link
                      href="/main-feed"
                      className="get-started text-white font-sans font-thin px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      Main Feed
                    </Link>
                    <Link
                      href="/magazine"
                      className="github-star ml-1 text-white font-sans font-thin px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                    >
                      Magazine
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn>
              <div className="w-3/4 px-4 h-96 relative float-right my-8">
                <img
                  className="relative float-right sm:w-3/12 sm:mt-0 w-6/12 h-[260px] max-h-[260px]"
                  src="/img/timeline-2021-medium.png"
                  alt="..."
                />
                <div className="pt-32 sm:pt-0">
                  <h2 className="font-sans font-thin text-4xl text-blueGray-600">
                    Timeline Music
                  </h2>

                  <p className="mt-12 text-lg leading-relaxed font-sans text-blueGray-500">
                    Sonic visions of futures, and futures passed. Documenting
                    forward thinking music from yesteryear, today, and all of
                    the tomorrows.
                  </p>
                  <div className="mt-12">
                    <Link
                      href="/main-feed"
                      className="get-started text-white font-sans font-thin px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      Main Feed
                    </Link>
                    <Link
                      href="/magazine"
                      className="github-star ml-1 text-white font-sans font-thin px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                    >
                      Magazine
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn>
              <div className="w-3/4 px-4 h-96 relative float-left my-8">
                <img
                  className="relative float-right sm:w-3/12 sm:mt-0 w-6/12 h-[260px] max-h-[260px]"
                  src="/img/timeline-2021-medium.png"
                  alt="..."
                />
                <div className="pt-32 sm:pt-0">
                  <h2 className="font-sans font-thin text-4xl text-blueGray-600">
                    Timeline Music
                  </h2>

                  <p className="mt-12 text-lg leading-relaxed font-sans text-blueGray-500">
                    Sonic visions of futures, and futures passed. Documenting
                    forward thinking music from yesteryear, today, and all of
                    the tomorrows.
                  </p>
                  <div className="mt-12">
                    <Link
                      href="/main-feed"
                      className="get-started text-white font-sans font-thin px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      Main Feed
                    </Link>
                    <Link
                      href="/magazine"
                      className="github-star ml-1 text-white font-sans font-thin px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                    >
                      Magazine
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn>
              <div className="w-3/4 px-4 h-96 relative float-right my-8">
                <img
                  className="relative float-right sm:w-3/12 sm:mt-0 w-6/12 h-[260px] max-h-[260px]"
                  src="/img/timeline-2021-medium.png"
                  alt="..."
                />
                <div className="pt-32 sm:pt-0">
                  <h2 className="font-sans font-thin text-4xl text-blueGray-600">
                    Timeline Music
                  </h2>

                  <p className="mt-12 text-lg leading-relaxed font-sans text-blueGray-500">
                    Sonic visions of futures, and futures passed. Documenting
                    forward thinking music from yesteryear, today, and all of
                    the tomorrows.
                  </p>
                  <div className="mt-12">
                    <Link
                      href="/main-feed"
                      className="get-started text-white font-sans font-thin px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      Main Feed
                    </Link>
                    <Link
                      href="/magazine"
                      className="github-star ml-1 text-white font-sans font-thin px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                    >
                      Magazine
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn>
              <div className="w-3/4 px-4 h-96 relative float-left my-8">
                <img
                  className="relative float-right sm:w-3/12 sm:mt-0 w-6/12 h-[260px] max-h-[260px]"
                  src="/img/timeline-2021-medium.png"
                  alt="..."
                />
                <div className="pt-32 sm:pt-0">
                  <h2 className="font-sans font-thin text-4xl text-blueGray-600">
                    Timeline Music
                  </h2>

                  <p className="mt-12 text-lg leading-relaxed font-sans text-blueGray-500">
                    Sonic visions of futures, and futures passed. Documenting
                    forward thinking music from yesteryear, today, and all of
                    the tomorrows.
                  </p>
                  <div className="mt-12">
                    <Link
                      href="/main-feed"
                      className="get-started text-white font-sans font-thin px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      Main Feed
                    </Link>
                    <Link
                      href="/magazine"
                      className="github-star ml-1 text-white font-sans font-thin px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                    >
                      Magazine
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn>
              <div className="w-3/4 px-4 h-96 relative float-right my-8">
                <img
                  className="relative float-right sm:w-3/12 sm:mt-0 w-6/12 h-[260px] max-h-[260px]"
                  src="/img/timeline-2021-medium.png"
                  alt="..."
                />
                <div className="pt-32 sm:pt-0">
                  <h2 className="font-sans font-thin text-4xl text-blueGray-600">
                    Timeline Music
                  </h2>

                  <p className="mt-12 text-lg leading-relaxed font-sans text-blueGray-500">
                    Sonic visions of futures, and futures passed. Documenting
                    forward thinking music from yesteryear, today, and all of
                    the tomorrows.
                  </p>
                  <div className="mt-12">
                    <Link
                      href="/main-feed"
                      className="get-started text-white font-sans font-thin px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      Main Feed
                    </Link>
                    <Link
                      href="/magazine"
                      className="github-star ml-1 text-white font-sans font-thin px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                    >
                      Magazine
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn>
              <div className="w-3/4 px-4 h-96 relative float-left my-12">
                <img
                  className="relative float-right sm:w-3/12 sm:mt-0 w-6/12 h-[260px] max-h-[260px]"
                  src="/img/timeline-2021-medium.png"
                  alt="..."
                />
                <div className="pt-32 sm:pt-0">
                  <h2 className="font-sans font-thin text-4xl text-blueGray-600">
                    Timeline Music
                  </h2>

                  <p className="mt-12 text-lg leading-relaxed font-sans text-blueGray-500">
                    Sonic visions of futures, and futures passed. Documenting
                    forward thinking music from yesteryear, today, and all of
                    the tomorrows.
                  </p>
                  <div className="mt-12">
                    <Link
                      href="/main-feed"
                      className="get-started text-white font-sans font-thin px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      Main Feed
                    </Link>
                    <Link
                      href="/magazine"
                      className="github-star ml-1 text-white font-sans font-thin px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                    >
                      Magazine
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
