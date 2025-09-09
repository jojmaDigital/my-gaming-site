'use client'

export default function VideoPlayer() {
  return (
    <div className="swiper thumbs-carousel-container mb-30p" data-carousel-name="home-hero-slider" data-slides-per-view="4">
      <div className="swiper thumbs-gallery-main">
        <div className="swiper-wrapper">
          <div className="swiper-slide rounded-12 overflow-hidden">
            <div className="w-full">
              <div className="plyr__video-embed player relative">
                <span className="absolute sm:left-5 left-2 sm:top-5 top-2 badge badge-smm badge-danger font-normal z-[4]">
                  24K Watching
                </span>
                <img className="plyr_custom_poster" src="/assets/images/photos/trendingPlayerThumb.png" alt="poster" />
                <iframe
                  src="https://www.youtube.com/embed/mUxzKVrSAjs"
                  allowFullScreen
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Add more slides as needed */}
        </div>
      </div>
      <div className="thumbs-gallery pt-30p">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="overflow-hidden cursor-pointer rounded-16">
              <img className="w-full xxl:h-[200px] lg:h-[160px] md:h-[140px] sm:h-25 h-18 object-cover hover:scale-110 transition-1" src="/assets/images/photos/trendingPlayerThumb.png" alt="library" />
            </div>
          </div>
          {/* Add more thumbnails */}
        </div>
      </div>
    </div>
  )
}
