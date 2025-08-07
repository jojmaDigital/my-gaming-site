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
                  <Link href="/" className="shrink-0">
                    <Image
                      src="/assets/images/icons/logo.png"
                      alt="brand"
                      width={170}
                      height={50}
                      className="xl:w-[170px] sm:w-36 w-30 h-auto shrink-0"
                    />
                  </Link>
                  
                  {/* Search Form */}
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
                
                {/* REST OF YOUR MENU HERE */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
