'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <>
      {/* Preloader */}
      <div className="preloader">
        <div className="loader"></div>
      </div>

      {/* Scroll to Top */}
      <button className="scroll-to-top show" id="scrollToTop">
        <i className="ti ti-arrow-up"></i>
      </button>

      {/* Header */}
      <header id="header" className="absolute w-full z-[999]">
        <div className="mx-auto relative">
          <div id="header-nav" className="w-full px-24p bg-b-neutral-3 relative">
            <div className="flex items-center justify-between gap-x-2 mx-auto py-20p">
              <nav className="relative xl:grid xl:grid-cols-12 flex justify-between items-center gap-24p text-semibold w-full">
                <div className="3xl:col-span-6 xl:col-span-5 flex items-center 3xl:gap-x-10 gap-x-5">
                  <Link href="/">
                    <img
                      className="xl:w-[170px] sm:w-36 w-30 h-auto shrink-0"
                      src="/assets/images/icons/logo.png"
                      alt="brand"
                    />
                  </Link>
                  <form className="hidden lg:flex items-center sm:gap-3 gap-2 min-w-[300px] max-w-[670px] w-full px-20p py-16p bg-b-neutral-4 rounded-full">
                    <span className="flex-c icon-20 text-white">
                      <i className="ti ti-search"></i>
                    </span>
                    <input
                      autoComplete="off"
                      className="bg-transparent w-full"
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search..."
                    />
                  </form>
                </div>
                <div className="3xl:col-span-6 xl:col-span-7 flex items-center xl:justify-between justify-end w-full">
                  <Link
                    href="#"
                    className="hidden xl:inline-flex items-center gap-3 pl-1 py-1 pr-6 rounded-full bg-[rgba(242,150,32,0.10)] text-w-neutral-1 text-base"
                  >
                    <span className="size-48p flex-c text-b-neutral-4 bg-primary rounded-full icon-32">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-speakerphone"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 8a3 3 0 0 1 0 6" />
                        <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
                        <path d="M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
                      </svg>
                    </span>
                    News For You
                  </Link>
                  <div className="flex items-center lg:gap-x-32p gap-x-2">
                    <div className="hidden lg:flex items-center gap-1 shrink-0">
                      <Link href="/shopping-cart.html" className="btn-c btn-c-lg btn-c-dark-outline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                          <path d="M17 17h-11v-14h-2" />
                          <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
                      </Link>
                    </div>
                    <button className="lg:hidden btn-c btn-c-lg btn-c-dark-outline nav-toggole shrink-0">
                      <i className="ti ti-menu-2"></i>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* End Header */}
      <div>
      {/* Left Sidebar */}
      <div className="fixed top-0 left-0 lg:translate-x-0 -translate-x-full h-screen z-10 pt-32 transition-1">
        <div className="overflow-y-auto scrollbar-0 max-h-svh px-[18px] w-full h-full">
          <div className="grid grid-cols-1 gap-20p divide-y divide-shap mb-40p">
            {/* Navigation Section */}
            <div className="small-nav">
              <span className="text-s-medium text-w-neutral-1 mb-20p">Navigate</span>
              <ul className="grid grid-cols-1 gap-y-3">
                <li className="sub-menu mobail-submenu border-none pb-0">
                  <span className="mobail-submenu-btn flex-y justify-between px-3 py-16p bg-primary text-l-regular rounded-12 w-full transition-1">
                    <span className="submenu-btn text-b-neutral-4 flex-y gap-3">
                      <span className="icon-28">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-home">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                        </svg>
                      </span> Home
                    </span>
                    <span className="collapse-icon mobail-submenu-icon">
                      <i className="ti ti-chevron-down !text-b-neutral-4"></i>
                    </span>
                  </span>
                  <ul className="grid gap-y-2 px-16p">
                    <li className="pt-2"><Link className="text-base hover:text-primary transition-1" href="/">- Home One</Link></li>
                    <li><Link className="text-base hover:text-primary transition-1" href="/home-two">- Home Two</Link></li>
                    <li><Link className="text-base hover:text-primary transition-1" href="/home-three">- Home Three</Link></li>
                    <li><Link className="text-base hover:text-primary transition-1" href="/home-four">- Home Four</Link></li>
                  </ul>
                </li>
                <li>
                  <Link href="/tournaments" className="flex-y gap-3 px-3 py-16p hover:bg-primary text-l-regular text-w-neutral-1 hover:text-b-neutral-4 rounded-12 justify-normal w-full transition-1">
                    <span className="icon-28">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-gamepad-2">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z" />
                        <path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232" />
                        <path d="M8 9v2" />
                        <path d="M7 10h2" />
                        <path d="M14 10h2" />
                      </svg>
                    </span> Tournaments
                  </Link>
                </li>
                 <li>
                                <a href="./leaderboard.html" className="flex-y gap-3 px-3 py-16p hover:bg-primary text-l-regular text-w-neutral-1 hover:text-b-neutral-4 rounded-12 justify-normal w-full transition-1">
                                <span className="icon-28">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-trophy">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M8 21l8 0" />
                                        <path d="M12 17l0 4" />
                                        <path d="M7 4l10 0" />
                                        <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                                        <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                    </svg>
                                </span>
                                Leaderboards
                            </a>
                            </li>
              </ul>
            </div>
            <div className="pt-20p">
                        <span className="text-s-medium text-w-neutral-1 mb-20p">
                        Navigate
                    </span>
                        <ul className="grid grid-cols-1 gap-y-3">
                            <li>
                                <a href="./user-achievements.html" className="flex-y gap-3 px-3 py-16p hover:bg-primary text-l-regular text-w-neutral-1 hover:text-b-neutral-4 rounded-12 justify-normal w-full transition-1">
                                <span className="icon-28">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-flame">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.621 -2.333 5.588c0 3.704 3.134 6.706 7 6.706s7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235" />
                                    </svg>
                                </span>
                                Rewards
                            </a>
                            </li>
                            <li>
                                <a href="./marketplace-two.html" className="flex-y gap-3 px-3 py-16p hover:bg-primary text-l-regular text-w-neutral-1 hover:text-b-neutral-4 rounded-12 justify-normal w-full transition-1">
                                <span className="icon-28">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-diamond">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />
                                        <path d="M10 12l-2 -2.2l.6 -1" />
                                    </svg>
                                </span>
                                Marketplace
                            </a>
                            </li>
                            <li>
                                <a href="./library.html" className="flex-y gap-3 px-3 py-16p hover:bg-primary text-l-regular text-w-neutral-1 hover:text-b-neutral-4 rounded-12 justify-normal w-full transition-1">
                                <span className="icon-28">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-bookmark">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                                    </svg>
                                </span>
                                My Library
                            </a>
                            </li>
                        </ul>
                    </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
