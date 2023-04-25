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
        <section className="header relative pt-8 items-center flex flex-col h-screen max-h-860-px">
          <div className="container mt-6 mx-auto flex flex-wrap items-center justify-center">
            <AnimateIn>
              <div className="w-3/4 px-4 h-56 relative float-right my-96 phonesm:h-56 phonesm:min-h-fit">
                <div className="phonesm:flex phonesm:flex-col">
                  <div className="phonesm:pt-0 tablet:pt-32">
                    <img
                      className="relative float-right max-h-[260px] phonesm:h-[80px] phonesm:w-[120px] tablet:h-[260px] tablet:w-6/12"
                      src="/img/timeline-2021-medium.png"
                      alt="..."
                    />
                  </div>
                  <div className="phonesm:pt-0 tablet:pt-32">
                    <div className="w-full relative">
                      <h2 className="font-sans font-thin text-blueGray-600 phonesm:text-xl tablet:text-4xl">
                        Timeline Music
                      </h2>
                    </div>
                    <div className="w-full relative">
                      <p className="mt-1 leading-relaxed font-sans text-blueGray-500 phonesm:text-xs tablet:text-lg">
                        Sonic visions of futures, and futures passed.
                        Documenting forward thinking music from yesteryear,
                        today, and all of the tomorrows.
                      </p>
                    </div>

                    <div className="phonesm:pt-0 tablet:mt-12">
                      <Link
                        href="/main-feed"
                        className="get-started text-white font-sans font-thin rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase shadow hover:shadow-lg ease-linear transition-all duration-150 phonesm:text-xs phonesm:px-3 phonesm:py-2 tablet:text-sm tablet:px-6 tablet:py-4 z-10"
                      >
                        Main Feed
                      </Link>
                      <Link
                        href="/magazine"
                        className="github-star ml-1 text-white font-sans font-thin rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase shadow hover:shadow-lg phonesm:text-xs phonesm:px-3 phonesm:py-2 tablet:text-sm tablet:px-6 tablet:py-4 z-10"
                      >
                        Magazine
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
            {/*  <AnimateIn>
              <div className="w-3/4 px-4 h-96 relative float-left my-8 phonesm:h-56 phonesm:min-h-fit">
                <div className="flex flex-col">
                  <div className="phonesm:pt-0 tablet:pt-32">
                    <img
                      className="relative float-left max-h-[260px] phonesm:h-[80px] phonesm:w-[120px] tablet:h-[260px] tablet:w-6/12"
                      src="/img/timeline-2021-medium.png"
                      alt="..."
                    />
                  </div>
                  <div className="phonesm:pt-0 tablet:pt-32">
                    <div className="w-full relative">
                      <h2 className="font-sans font-thin text-blueGray-600 phonesm:text-xl tablet:text-4xl">
                        Timeline Music
                      </h2>
                    </div>
                    <div className="w-full relative">
                      <p className="mt-1 leading-relaxed font-sans text-blueGray-500 phonesm:text-xs tablet:text-lg">
                        Sonic visions of futures, and futures passed.
                        Documenting forward thinking music from yesteryear,
                        today, and all of the tomorrows.
                      </p>
                    </div>

                    <div className="phonesm:pt-0 tablet:mt-12">
                      <Link
                        href="/main-feed"
                        className="get-started text-white font-sans font-thin rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase shadow hover:shadow-lg ease-linear transition-all duration-150 phonesm:text-xs phonesm:px-3 phonesm:py-2 tablet:text-sm tablet:px-6 tablet:py-4"
                      >
                        Main Feed
                      </Link>
                      <Link
                        href="/magazine"
                        className="github-star ml-1 text-white font-sans font-thin rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase shadow hover:shadow-lg phonesm:text-xs phonesm:px-3 phonesm:py-2 tablet:text-sm tablet:px-6 tablet:py-4"
                      >
                        Magazine
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn> */}
            {/* <AnimateIn>
              <div className="w-3/4 px-4 h-96 relative float-right my-8 phonesm:h-56 phonesm:min-h-fit">
                <div className="phonesm:flex phonesm:flex-col">
                  <div className="phonesm:pt-0 tablet:pt-32">
                    <img
                      className="relative float-right max-h-[260px] phonesm:h-[80px] phonesm:w-[120px] tablet:h-[260px] tablet:w-6/12"
                      src="/img/timeline-2021-medium.png"
                      alt="..."
                    />
                  </div>
                  <div className="phonesm:pt-0 tablet:pt-32">
                    <div className="w-full relative">
                      <h2 className="font-sans font-thin text-blueGray-600 phonesm:text-xl tablet:text-4xl">
                        Timeline Music
                      </h2>
                    </div>
                    <div className="w-full relative">
                      <p className="mt-1 leading-relaxed font-sans text-blueGray-500 phonesm:text-xs tablet:text-lg">
                        Sonic visions of futures, and futures passed.
                        Documenting forward thinking music from yesteryear,
                        today, and all of the tomorrows.
                      </p>
                    </div>

                    <div className="phonesm:pt-0 tablet:mt-12">
                      <Link
                        href="/main-feed"
                        className="get-started text-white font-sans font-thin rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase shadow hover:shadow-lg ease-linear transition-all duration-150 phonesm:text-xs phonesm:px-3 phonesm:py-2 tablet:text-sm tablet:px-6 tablet:py-4"
                      >
                        Main Feed
                      </Link>
                      <Link
                        href="/magazine"
                        className="github-star ml-1 text-white font-sans font-thin rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase shadow hover:shadow-lg phonesm:text-xs phonesm:px-3 phonesm:py-2 tablet:text-sm tablet:px-6 tablet:py-4"
                      >
                        Magazine
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn>
              <div className="w-3/4 px-4 h-96 relative float-left my-8 phonesm:h-56 phonesm:min-h-fit">
                <div className="flex flex-col">
                  <div className="phonesm:pt-0 tablet:pt-32">
                    <img
                      className="relative float-left max-h-[260px] phonesm:h-[80px] phonesm:w-[120px] tablet:h-[260px] tablet:w-6/12"
                      src="/img/timeline-2021-medium.png"
                      alt="..."
                    />
                  </div>
                  <div className="phonesm:pt-0 tablet:pt-32">
                    <div className="w-full relative">
                      <h2 className="font-sans font-thin text-blueGray-600 phonesm:text-xl tablet:text-4xl">
                        Timeline Music
                      </h2>
                    </div>
                    <div className="w-full relative">
                      <p className="mt-1 leading-relaxed font-sans text-blueGray-500 phonesm:text-xs tablet:text-lg">
                        Sonic visions of futures, and futures passed.
                        Documenting forward thinking music from yesteryear,
                        today, and all of the tomorrows.
                      </p>
                    </div>

                    <div className="phonesm:pt-0 tablet:mt-12">
                      <Link
                        href="/main-feed"
                        className="get-started text-white font-sans font-thin rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase shadow hover:shadow-lg ease-linear transition-all duration-150 phonesm:text-xs phonesm:px-3 phonesm:py-2 tablet:text-sm tablet:px-6 tablet:py-4"
                      >
                        Main Feed
                      </Link>
                      <Link
                        href="/magazine"
                        className="github-star ml-1 text-white font-sans font-thin rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase shadow hover:shadow-lg phonesm:text-xs phonesm:px-3 phonesm:py-2 tablet:text-sm tablet:px-6 tablet:py-4"
                      >
                        Magazine
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn>
              <div className="w-3/4 px-4 h-96 relative float-right my-8 phonesm:h-56 phonesm:min-h-fit">
                <div className="phonesm:flex phonesm:flex-col">
                  <div className="phonesm:pt-0 tablet:pt-32">
                    <img
                      className="relative float-right max-h-[260px] phonesm:h-[80px] phonesm:w-[120px] tablet:h-[260px] tablet:w-6/12"
                      src="/img/timeline-2021-medium.png"
                      alt="..."
                    />
                  </div>
                  <div className="phonesm:pt-0 tablet:pt-32">
                    <div className="w-full relative">
                      <h2 className="font-sans font-thin text-blueGray-600 phonesm:text-xl tablet:text-4xl">
                        Timeline Music
                      </h2>
                    </div>
                    <div className="w-full relative">
                      <p className="mt-1 leading-relaxed font-sans text-blueGray-500 phonesm:text-xs tablet:text-lg">
                        Sonic visions of futures, and futures passed.
                        Documenting forward thinking music from yesteryear,
                        today, and all of the tomorrows.
                      </p>
                    </div>

                    <div className="phonesm:pt-0 tablet:mt-12">
                      <Link
                        href="/main-feed"
                        className="get-started text-white font-sans font-thin rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase shadow hover:shadow-lg ease-linear transition-all duration-150 phonesm:text-xs phonesm:px-3 phonesm:py-2 tablet:text-sm tablet:px-6 tablet:py-4"
                      >
                        Main Feed
                      </Link>
                      <Link
                        href="/magazine"
                        className="github-star ml-1 text-white font-sans font-thin rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase shadow hover:shadow-lg phonesm:text-xs phonesm:px-3 phonesm:py-2 tablet:text-sm tablet:px-6 tablet:py-4"
                      >
                        Magazine
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn>
              <div className="w-3/4 px-4 h-96 relative float-left my-8 phonesm:h-56 phonesm:min-h-fit">
                <div className="flex flex-col">
                  <div className="phonesm:pt-0 tablet:pt-32">
                    <img
                      className="relative float-left max-h-[260px] phonesm:h-[80px] phonesm:w-[120px] tablet:h-[260px] tablet:w-6/12"
                      src="/img/timeline-2021-medium.png"
                      alt="..."
                    />
                  </div>
                  <div className="phonesm:pt-0 tablet:pt-32">
                    <div className="w-full relative">
                      <h2 className="font-sans font-thin text-blueGray-600 phonesm:text-xl tablet:text-4xl">
                        Timeline Music
                      </h2>
                    </div>
                    <div className="w-full relative">
                      <p className="mt-1 leading-relaxed font-sans text-blueGray-500 phonesm:text-xs tablet:text-lg">
                        Sonic visions of futures, and futures passed.
                        Documenting forward thinking music from yesteryear,
                        today, and all of the tomorrows.
                      </p>
                    </div>

                    <div className="phonesm:pt-0 tablet:mt-12">
                      <Link
                        href="/main-feed"
                        className="get-started text-white font-sans font-thin rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase shadow hover:shadow-lg ease-linear transition-all duration-150 phonesm:text-xs phonesm:px-3 phonesm:py-2 tablet:text-sm tablet:px-6 tablet:py-4"
                      >
                        Main Feed
                      </Link>
                      <Link
                        href="/magazine"
                        className="github-star ml-1 text-white font-sans font-thin rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase shadow hover:shadow-lg phonesm:text-xs phonesm:px-3 phonesm:py-2 tablet:text-sm tablet:px-6 tablet:py-4"
                      >
                        Magazine
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn> */}
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
}
