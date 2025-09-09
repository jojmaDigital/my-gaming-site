'use client'

export default function RelatedTrending() {
  return (
    <section className="section-py">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap gap-24p">
          <h2 className="heading-2 text-w-neutral-1 text-split-left">
            Related Trending
          </h2>
          <form className="select-1 shrink-0">
            <select className="select w-full sm:py-3 py-2 px-24p rounded-full">
              <option value="popular">Popular</option>
              <option value="new-releases">New Releases</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="sports">Sports</option>
            </select>
          </form>
        </div>
        <div
          className="swiper two-card-carousel mt-40p"
          data-carousel-name="related-trending"
          data-aos="fade-up"
        >
          <div className="swiper-wrapper pb-15" data-carousel-reverse="true">
            <div className="swiper-slide">
              <div className="w-full bg-b-neutral-3 p-24p rounded-24 grid 4xl:grid-cols-2 grid-cols-1 items-center gap-24p group" data-aos="zoom-in">
                <div className="overflow-hidden rounded-24">
                  <img
                    className="w-full xxl:h-[304px] xl:h-[280px] md:h-[260px] h-[240px] object-cover group-hover:scale-110 transition-1"
                    src="/assets/images/games/game1.png"
                    alt="img"
                  />
                </div>
                <div>
                  <div className="flex-y flex-wrap gap-2">
                    <span className="badge badge-neutral-2 badge-smm">Strategy</span>
                    <span className="badge badge-danger badge-smm">Live</span>
                    <span className="badge badge-neutral-2 badge-smm">Shooter</span>
                  </div>
                  <a href="/live-stream" className="heading-3 text-w-neutral-1 4xl:line-clamp-2 line-clamp-1 link-1 my-16p text-split-left">
                    Neo Frontiers: Build Rule Prosper
                  </a>
                  <div className="flex-y flex-wrap *:py-2 *:px-3 mb-20p">
                    <div className="flex-y gap-2.5">
                      <span className="badge badge-secondary size-3 badge-circle"></span>
                      <p className="text-base text-neutral-100">
                        <span className="span">4.7k</span> Viewers
                      </p>
                    </div>
                    <div className="flex-y gap-2.5">
                      <span className="badge badge-primary size-3 badge-circle"></span>
                      <p className="text-base text-neutral-100">
                        <span className="span">4 days ago</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex-y flex-wrap gap-3">
                    <img className="size-60p rounded-full shrink-0" src="/assets/images/users/user4.png" alt="user" />
                    <div>
                      <a href="/profile" className="text-l-medium link-1 text-w-neutral-1 mb-1">
                        David Smith
                        <i className="ti ti-circle-check-filled text-secondary icon-24"></i>
                      </a>
                      <span className="text-s-medium text-w-neutral-4">Leader</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more slides as needed */}
          </div>
          <div className="swiper-pagination pagination-one related-trending-carousel-pagination flex-c gap-2.5"></div>
        </div>
      </div>
    </section>
  )
}
