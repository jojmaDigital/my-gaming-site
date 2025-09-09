'use client'

import { useState } from 'react'
import VideoPlayer from '../components/VideoPlayer'
import LiveChat from '../components/LiveChat'
import RelatedTrending from '../components/RelatedTrending'

export default function LiveStreamPage() {
  return (
    <main>
      {/* Breadcrumb */}
      <section className="pt-30p">
        <div className="section-pt">
          <div className="relative bg-[url('/assets/images/photos/breadcrumbImg.png')] bg-cover bg-no-repeat rounded-24 overflow-hidden">
            <div className="container">
              <div className="grid grid-cols-12 gap-30p relative xl:py-[130px] md:py-30 sm:py-25 py-20 z-[2]">
                <div className="lg:col-start-2 lg:col-end-12 col-span-12">
                  <h2 className="heading-2 text-w-neutral-1 mb-3">Live Stream</h2>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/" className="breadcrumb-link">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <span className="breadcrumb-icon">
                        <i className="ti ti-chevrons-right"></i>
                      </span>
                    </li>
                    <li className="breadcrumb-item">
                      <span className="breadcrumb-current">Live Stream</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="overlay-11"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-60p relative overflow-visible">
        <div className="container">
          <div className="grid grid-cols-12 gap-24p">
            <div className="xxl:col-span-8 xl:col-span-7 col-span-12 relative">
              <div className="xl:sticky xl:top-30">
                <VideoPlayer />
                <AboutSection />
              </div>
            </div>
            <div className="xxl:col-span-4 xl:col-span-5 col-span-12 relative">
              <div className="xl:sticky xl:top-30">
                <LiveChat />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Trending */}
      <RelatedTrending />
    </main>
  )
}

function AboutSection() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <h4 className="heading-4 text-w-neutral-1 mb-16p">
        About Trending Game
      </h4>
      <div className="grid grid-cols-1 gap-16p">
        <p className="text-m-regular text-w-neutral-3">
          Our vision is to create a welcoming, inclusive, and supportive environment where gamers of all backgrounds and skill levels can come together. We believe in the power of gaming to foster camaraderie, creativity, and personal growth. Whether you're a solo player, a competitive gamerstreamer, or a game developer, you have a place here.
        </p>
        <p className="text-m-regular text-w-neutral-3">
          We're a diverse group of gamers, ranging from casual players to hardcore enthusiasts, spanning various platforms and genres. What unites us is our belief that gaming is not just a pastime but an art form, a form of storytelling, and a means of forging connections with people from all walks of life
        </p>
        <p className="text-m-regular text-w-neutral-3">
          As a result the villagers began invading one another, which in turn led to an ultimate war. Wild Ninnekos are born with to help the Ninnekos conquer the entire forest, build new villages, and establish a strong empire.
        </p>
        {open && (
          <div className="grid grid-cols-1 gap-16p">
            <p className="text-m-regular text-w-neutral-3">
              We're a diverse group of gamers, ranging from casual players to hardcore enthusiasts, spanning various platforms and genres. What unites us is our belief that gaming is not just a pastime but an art form, a form of storytelling, and a means of forging connections with people from all walks of life
            </p>
            <p className="text-m-regular text-w-neutral-3">
              As a result the villagers began invading one another, which in turn led to an ultimate war. Wild Ninnekos are born with to help the Ninnekos conquer the entire forest, build new villages, and establish a strong empire.
            </p>
          </div>
        )}
      </div>
      <button onClick={() => setOpen(!open)} className="inline-flex items-center text-base font-poppins font-semibold gap-2 mt-40p">
        Read More
        <i className={`ti ti-chevron-down icon-24 transition-1 ${open ? 'rotate-180' : ''}`}></i>
      </button>
    </div>
  )
}
