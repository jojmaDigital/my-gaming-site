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
    </>
  )
}
