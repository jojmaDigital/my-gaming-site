import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'GameCo - ',
  description: 'Gaming website built with Next.js ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/images/icons/favicon.ico" />
        <link rel="stylesheet" href="/assets/styles/app.css" />
        <script defer src="/assets/js/app.js"></script>
      </head>

      <Navbar />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
        <footer className="section-pt overflow-hidden bg-b-neutral-3">
            <div className="min-h-screen lg:ml-[240px] lg:mr-[136px]">
  <div className="container relative">
    <div className="relative z-10 lg:mx-60p">
      <div className="grid grid-cols-12 gap-24p">
        <div className="xl:col-span-5 col-span-12">
          <div className="max-w-[364px]">
            <a href="/index.html" className="heading-4 text-w-neutral-1 inline-flex gap-20p mb-24p">
              <img src="/assets/images/icons/brand.svg" alt="logo" />
              Get In Touch
            </a>
            <h2 className="display-4 text-w-neutral-1 mb-16p">Subscribe Now.</h2>
            <p className="text-base text-w-neutral-3">
              Become visionary behind a sprawling metropolis. Metropolis Tycoon.
            </p>
          </div>
        </div>
        <div className="xl:col-span-7 col-span-12 flex items-end">
          <form className="w-full flex items-end gap-24p">
            <div className="w-full">
              <label htmlFor="subscribeEmail" className="heading-4 text-w-neutral-1 mb-24p">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="subscribeEmail"
                id="subscribeEmail"
                required
                className="w-full bg-transparent border-b border-shap pb-16p text-base text-w-neutral-1 placeholder:text-w-neutral-3"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 xl:size-[140px] md:size-30 size-28 rounded-full sm:flex-c hidden text-m-medium btn-primary"
            >
              <span>
                Now
                <i className="ti ti-arrow-up-right icon-24"></i>
                Subscribe
              </span>
            </button>
          </form>
        </div>
      </div>

      <div className="grid xl:grid-cols-4 xsm:grid-cols-2 grid-cols-1 gap-x-30p gap-y-40p border-b-2 border-dashed border-shap py-60p">
        {/* Quick Link */}
        <div>
          <h4 className="heading-4 text-w-neutral-1 mb-32p">Quick Link</h4>
          <ul className="grid grid-cols-1 sm:gap-y-16p gap-y-2 gap-x-32p *:flex *:items-center text-base font-poppins">
            <li className="group hover:translate-x-0 -translate-x-5 inline-flex items-center gap-1 hover:text-primary transition-1 max-w-fit">
              <i className="ti ti-chevron-right group-hover:visible invisible text-primary group-hover:opacity-100 opacity-0 transition-1"></i>
              <a href="/library.html" className="text-w-neutral-3 group-hover:text-primary transition-1">
                My Library
              </a>
            </li>
            <li className="group hover:translate-x-0 -translate-x-5 inline-flex items-center gap-1 hover:text-primary transition-1 max-w-fit">
              <i className="ti ti-chevron-right group-hover:visible invisible text-primary group-hover:opacity-100 opacity-0 transition-1"></i>
              <a href="/leaderboard.html" className="text-w-neutral-3 group-hover:text-primary transition-1">
                Leaderboards
              </a>
            </li>
            <li className="group hover:translate-x-0 -translate-x-5 inline-flex items-center gap-1 hover:text-primary transition-1 max-w-fit">
              <i className="ti ti-chevron-right group-hover:visible invisible text-primary group-hover:opacity-100 opacity-0 transition-1"></i>
              <a href="/trending.html" className="text-w-neutral-3 group-hover:text-primary transition-1">
                Trending
              </a>
            </li>
            <li className="group hover:translate-x-0 -translate-x-5 inline-flex items-center gap-1 hover:text-primary transition-1 max-w-fit">
              <i className="ti ti-chevron-right group-hover:visible invisible text-primary group-hover:opacity-100 opacity-0 transition-1"></i>
              <a href="/shop.html" className="text-w-neutral-3 group-hover:text-primary transition-1">
                Shop
              </a>
            </li>
            <li className="group hover:translate-x-0 -translate-x-5 inline-flex items-center gap-1 hover:text-primary transition-1 max-w-fit">
              <i className="ti ti-chevron-right group-hover:visible invisible text-primary group-hover:opacity-100 opacity-0 transition-1"></i>
              <a href="/marketplace-two.html" className="text-w-neutral-3 group-hover:text-primary transition-1">
                Marketplace
              </a>
            </li>
          </ul>
        </div>
        {/* EXPLORE */}
        <div>
          <h4 className="heading-4 text-w-neutral-1 mb-32p">EXPLORE</h4>
          <ul className="grid grid-cols-1 sm:gap-y-16p gap-y-2 gap-x-32p *:flex *:items-center text-base font-poppins">
            <li className="group hover:translate-x-0 -translate-x-5 inline-flex items-center gap-1 hover:text-primary transition-1 max-w-fit">
              <i className="ti ti-chevron-right group-hover:visible invisible text-primary group-hover:opacity-100 opacity-0 transition-1"></i>
              <a href="/trending.html" className="text-w-neutral-3 group-hover:text-primary transition-1">
                Trending
              </a>
            </li>
            <li className="group hover:translate-x-0 -translate-x-5 inline-flex items-center gap-1 hover:text-primary transition-1 max-w-fit">
              <i className="ti ti-chevron-right group-hover:visible invisible text-primary group-hover:opacity-100 opacity-0 transition-1"></i>
              <a href="/chat.html" className="text-w-neutral-3 group-hover:text-primary transition-1">
                Chat
              </a>
            </li>
            <li className="group hover:translate-x-0 -translate-x-5 inline-flex items-center gap-1 hover:text-primary transition-1 max-w-fit">
              <i className="ti ti-chevron-right group-hover:visible invisible text-primary group-hover:opacity-100 opacity-0 transition-1"></i>
              <a href="/shop.html" className="text-w-neutral-3 group-hover:text-primary transition-1">
                Shop
              </a>
            </li>
            <li className="group hover:translate-x-0 -translate-x-5 inline-flex items-center gap-1 hover:text-primary transition-1 max-w-fit">
              <i className="ti ti-chevron-right group-hover:visible invisible text-primary group-hover:opacity-100 opacity-0 transition-1"></i>
              <a href="/news.html" className="text-w-neutral-3 group-hover:text-primary transition-1">
                News
              </a>
            </li>
          </ul>
        </div>
        {/* Follow Us */}
        <div>
          <h4 className="heading-4 text-w-neutral-1 mb-32p">Follow Us</h4>
          <ul className="grid grid-cols-1 sm:gap-y-16p gap-y-2 gap-x-32p *:flex *:items-center text-base font-poppins">
            <li className="group hover:translate-x-0 -translate-x-5 inline-flex items-center gap-1 hover:text-primary transition-1 max-w-fit">
              <i className="ti ti-chevron-right group-hover:visible invisible text-primary group-hover:opacity-100 opacity-0 transition-1"></i>
              <a href="/tournaments.html" className="text-w-neutral-3 group-hover:text-primary transition-1">
                Tournaments
              </a>
            </li>
            <li className="group hover:translate-x-0 -translate-x-5 inline-flex items-center gap-1 hover:text-primary transition-1 max-w-fit">
              <i className="ti ti-chevron-right group-hover:visible invisible text-primary group-hover:opacity-100 opacity-0 transition-1"></i>
              <a href="/community.html" className="text-w-neutral-3 group-hover:text-primary transition-1">
                Community
              </a>
            </li>
            <li className="group hover:translate-x-0 -translate-x-5 inline-flex items-center gap-1 hover:text-primary transition-1 max-w-fit">
              <i className="ti ti-chevron-right group-hover:visible invisible text-primary group-hover:opacity-100 opacity-0 transition-1"></i>
              <a href="#" className="text-w-neutral-3 group-hover:text-primary transition-1">
                Notifications
              </a>
            </li>
            <li className="group hover:translate-x-0 -translate-x-5 inline-flex items-center gap-1 hover:text-primary transition-1 max-w-fit">
              <i className="ti ti-chevron-right group-hover:visible invisible text-primary group-hover:opacity-100 opacity-0 transition-1"></i>
              <a href="/contact-us.html" className="text-w-neutral-3 group-hover:text-primary transition-1">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Adresse & Social */}
        <div>
          <h4 className="heading-4 text-w-neutral-1 mb-32p">Follow Us</h4>
          <p className="text-base text-w-neutral-3 mb-3 max-w-[230px] w-full">
            4517 Washington Ave. Manchester, Kentucky 39495
          </p>
          <span className="text-m-medium text-primary mb-60p">#London</span>
          <div className="flex items-center gap-3 mt-2">
            <a href="#" className="btn-socal-primary"><i className="ti ti-brand-facebook"></i></a>
            <a href="#" className="btn-socal-primary"><i className="ti ti-brand-twitch"></i></a>
            <a href="#" className="btn-socal-primary"><i className="ti ti-brand-instagram"></i></a>
            <a href="#" className="btn-socal-primary"><i className="ti ti-brand-discord"></i></a>
            <a href="#" className="btn-socal-primary"><i className="ti ti-brand-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-center flex-wrap gap-y-3 py-30p">
        <p className="text-base text-w-neutral-3">
          Copyright © <span>{new Date().getFullYear()}</span>
        </p>
        <div className="w-1px h-4 bg-shap mx-3"></div>
        <p className="text-base text-w-neutral-3">
          Designed By
          <a href="https://themeforest.net/user/uiaxis/portfolio" className="text-primary hover:underline ml-1">
            UIAXIS
          </a>
        </p>
      </div>
    </div>
  </div>
  </div>
</footer>

      </body>

    </html>
  );
}
