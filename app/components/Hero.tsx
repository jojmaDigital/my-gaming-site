'use client';

import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import gamesData from '../data/games.json';

export default function Hero() {
  const router = useRouter();

  // Get featured games for banners
  const featuredGames = gamesData.sections.featured.map((key: string) => ({
    key,
    ...(gamesData.games as any)[key]
  }));

  // Get trending games for gallery
  const trendingGames = gamesData.sections.trending.map((key: string) => ({
    key,
    ...(gamesData.games as any)[key]
  }));

  // Get hot games (using trending as hot)
  const hotGames = trendingGames;

  // Divise les jeux en groupes de 6
  const allGames = Object.keys(gamesData.games).map((key: string) => ({
    key,
    ...(gamesData.games as any)[key]
  }));
  const chunkedGames = [];
  for (let i = 0; i < allGames.length; i += 6) {
    chunkedGames.push(allGames.slice(i, i + 6));
  }

  // Divise les jeux hot en groupes de 3 pour le slider
  const chunkedHotGames = [];
  for (let i = 0; i < hotGames.length; i += 3) {
    chunkedHotGames.push(hotGames.slice(i, i + 3));
  }

  const handleGameClick = (gameKey: string) => {
    router.push(`/game?key=${gameKey}`);
  };

  return (
     <div className="min-h-screen lg:ml-[240px] bg-black text-white">
      {/* ================== HÉRO + GALERIE ================== */}
      <section className="section-pt overflow-visible py-6">
        <div className="container relative px-4">
          <div className="grid grid-cols-12 items-center gap-6">
            {/* --- CARROUSEL GAUCHE --- */}
            <div className="xxl:col-span-8 col-span-12">
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className="one-card-carousel rounded-12"
              >
                {featuredGames.map((game, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      className="w-full rounded-16 overflow-hidden relative cursor-pointer"
                      onClick={() => handleGameClick(game.key)}
                    >
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full lg:h-[506px] md:h-[440px] h-[380px] object-cover"
                      />
                      <div className="absolute inset-0 z-[2] p-30p">
                        <h1 className="display-100 text-w-neutral-1 stroked-text-1 mb-30p">
                          Play. Win. Repeat
                        </h1>
                      </div>
                      <div className="overlay-1" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* --- TRENDING GAMES RIGHT --- */}
            <div className="xxl:col-span-4 col-span-12">
              <div className="grid grid-cols-2 gap-4">
                {trendingGames.slice(0, 4).map((game, index) => (
                  <div
                    key={game.key}
                    className="gallery-items relative rounded-16 overflow-hidden group cursor-pointer"
                    onClick={() => handleGameClick(game.key)}
                  >
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-1"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-1">
                      <h3 className="text-white text-sm font-bold">{game.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================== SLIDER JEUX HOT ================== */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-6">🔥 Hot Games Slider</h2>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="hot-games-slider"
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {chunkedHotGames.map((gameGroup, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              <div className="grid grid-cols-3 gap-4">
                {gameGroup.map((game: any) => (
                  <div
                    key={game.key}
                    className="game-card group cursor-pointer"
                    onClick={() => handleGameClick(game.key)}
                  >
                    <span className="tag hot">Hot</span>
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-36 object-cover"
                    />
                    <h2>{game.title}</h2>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================== GRILLE DE JEUX ================== */}
      <section  className="mb-6">
        <h2 className="text-2xl font-bold mb-6">🔥 Popular Online Games</h2>
        {chunkedGames.map((gameRow, rowIndex) => (
          <div key={rowIndex} className="game-row mb-6">
            {gameRow.map((game) => (
              <div
                  key={game.key}
                  className="game-card group cursor-pointer mb-6"
                  onClick={() => handleGameClick(game.key)}
                >
                <span className="tag hot">Hot</span>
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-36 object-cover"
                />
                <h2>{game.title}</h2>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* ================== TEXTE D'ACCUEIL ================== */}
      <section className="mt-8">
        <h3 className="text-2xl font-bold mb-4">🎮 Welcome to Retros Game Online</h3>
        <p>
          <a href="https://retrosgame.com/" target="_blank" className="text-blue-400 hover:underline">
            RetrosGame
          </a> Online, you can enjoy your favorite retro games anytime, anywhere—no downloads or sign-ups needed!
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">🌟 Why Choose RetrosGame?</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>✅ Huge collection of browser-based classics.</li>
          <li>✅ No sign-up or download required.</li>
          <li>✅ Ad-free experience for smooth gameplay.</li>
          <li>✅ New titles added every week.</li>
          <li>✅ Playable on PC, tablet, or mobile 📱</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">📂 Popular Categories</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>🎯 Platform Games</li>
          <li>🤜 Fighting Games</li>
          <li>🧠 Puzzle Games</li>
          <li>🏁 Racing Games</li>
          <li>🕹️ Arcade Challenges</li>
          <li>👬 Multiplayer Classics</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">🎯 Play Without Download</h3>
        <p>
          There is no need to install anything—click and play! All games work directly in your browser. Safe, fast, and always ready.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">🎮 The Benefits of Playing Retro Games</h3>
        <p>
          Retro games help develop focus, memory, and coordination in a fun way. Perfect for kids and nostalgic adults alike.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">🎲 Suggest a Game</h3>
        <p>
          Missing a classic? Let us know! We're always adding new games based on user suggestions.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">🚀 Get Started</h3>
        <p>
          Ready to play?{' '}
          <a href="https://retrosgame.com/" target="_blank" className="text-blue-400 hover:underline">
            Browse now
          </a>{' '}
          and jump into the action!
        </p>
      </section>

      {/* ================== STYLES GLOBAUX (Tailwind + Custom) ================== */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Arial', sans-serif;
          background-color: #000;
          color: white;
        }

        /* Grille de jeux */
        .game-row {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 15px;
        }

        .game-card {
          position: relative;
          background-color: #262626;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }
        .game-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
        }
        .game-card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }
        .game-card h2 {
          padding: 10px;
          font-size: 14px;
          color: white;
          letter-spacing: 0.8px;
        }

        /* Tags */
        .tag {
          position: absolute;
          top: 10px;
          left: 10px;
          color: white;
          font-size: 12px;
          font-weight: bold;
          padding: 4px 8px;
          border-radius: 4px;
          z-index: 10;
        }
        .tag.hot {
          background-color: #ff5722;
        }
        .tag.updated {
          background-color: #2ecc71;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .game-row {
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
          .game-card h2 {
            font-size: 13px;
          }
        }
        @media (max-width: 600px) {
          .game-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }
        @media (max-width: 400px) {
          .game-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
