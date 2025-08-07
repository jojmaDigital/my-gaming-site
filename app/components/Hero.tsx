'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Hero() {
  const banners = ['heroBanner7', 'heroBanner8', 'heroBanner9']; // fichiers placés dans /public/assets/images/photos/

  return (
    <>
    
    <div className="min-h-screen lg:ml-[240px] lg:mr-[136px]">
    <section className="section-pt overflow-visible">
      <div className="container relative pt-[30px]">
        <div className="grid grid-cols-12 items-center gap-30p">
          {/* ------------------------------------------------------------------ */}
          {/* Banner gauche */}
          {/* ------------------------------------------------------------------ */}
          <div className="xxl:col-span-8 col-span-12 relative">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              className="one-card-carousel rounded-12"
            >
              {banners.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-full rounded-16 overflow-hidden relative">
                    <img
                      src={`/assets/images/photos/${img}.webp`}          /*  <── /public  */
                      alt="Hero banner"
                      className="w-full lg:h-[506px] md:h-[440px] h-[380px] object-cover"
                    />

                    {/* ---------- couche d’effets ---------- */}
                    <div className="absolute inset-0 z-[2] p-30p">
                      {/* icônes, titre, avatars…  ⇣  exemple minimal */}
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

          {/* ------------------------------------------------------------------ */}
          {/* Galerie droite                                                     */}
          {/* ------------------------------------------------------------------ */}
          <div className="xxl:col-span-4 col-span-12">
            <div id="gallery-container" className="grid grid-cols-4 gap-24p">
              {/* full-width */}
              <div className="col-span-4">
                <div className="gallery-items relative rounded-32 overflow-hidden group">
                  <img
                    src="/assets/images/photos/heroBanner4.webp"
                    alt="Gallery"
                    className="w-full xl:h-[312px] md:h-[280px] h-[220px] object-cover group-hover:scale-110 transition-1"
                  />
                  <div className="overlay-3" />
                </div>
              </div>

              {/* deux tuiles  */}
              {['heroBanner10', 'heroBanner11'].map((img, i) => (
                <div className="col-span-2" key={img}>
                  <div className="gallery-items relative rounded-32 overflow-hidden group">
                    <img
                      src={`/assets/images/photos/${img}.webp`}
                      alt="Gallery"
                      className="w-full md:h-[170px] h-[140px] object-cover group-hover:scale-110 transition-1"
                    />
                    <div className="overlay-3" />
                    {i === 1 && (
                      <div className="photo-counter">
                        <h4>+270</h4>
                        <h4>Photos</h4>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </section>
    
     <style jsx global>{`
        /* Reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Arial', sans-serif;
          background-color: #1a1a1a;
          color: white;
          padding: 20px;
        }

        header {
          text-align: center;
          margin-bottom: 30px;
        }

        h1 {
          font-size: 28px;
          color: white;
          font-weight: bold;
          text-align: left;
        }

        /* Grille fixe : 6 colonnes */
        .game-row {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 15px;
          margin-bottom: 25px;
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
          font-size: 15px;
          font-weight: bold;
          color: white;
          letter-spacing: 0.5px;
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
        }

        .tag.hot {
          background-color: #ff5722;
        }

        .tag.updated {
          background-color: #2ecc71;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .game-row {
            gap: 12px;
          }
          .game-card h2 {
            font-size: 14px;
          }
        }

        @media (max-width: 900px) {
          .game-row {
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }
          .game-card h2 {
            font-size: 13px;
          }
        }

        @media (max-width: 600px) {
          .game-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .game-card {
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          }
          .game-card h2 {
            font-size: 13px;
            padding: 8px;
          }
        }

        @media (max-width: 400px) {
          .game-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      {/* ------------------------- LIGNE 1 ------------------------- */}
    <section className="mt-10"> {/* <-- réduit l'espace, ajuste si tu veux */}
          <header>
            <h1></h1>
          </header>
          <div className="game-row">
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game20.png" alt="Escape Road" />
          <h2>ESCAPE ROAD</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game42.png" alt="Chess" />
          <h2>CHESS</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game43.png" alt="Boom Slingers" />
          <h2>BOOM SLINGERS</h2>
        </div>
        <div className="game-card">
          <span className="tag updated">Updated</span>
          <img src="assets/images/games/game44.png" alt="Bullet Storm" />
          <h2>BULLET STORM</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game45.png" alt="Kick Loser" />
          <h2>KICK LOSER</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game46.png" alt="2048" />
          <h2>2048</h2>
        </div>
      </div>

      {/* ------------------------- LIGNE 2 ------------------------- */}
      <div className="game-row">
        <div className="game-card">
          <span className="tag updated">Updated</span>
          <img src="assets/images/games/game47.png" alt="Snake" />
          <h2>SNAKE</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game48.png" alt="Pacman" />
          <h2>PACMAN</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game49.png" alt="Tetris" />
          <h2>TETRIS</h2>
        </div>
        <div className="game-card">
          <span className="tag updated">Updated</span>
          <img src="assets/images/games/game50.png" alt="Flappy Bird" />
          <h2>FLAPPY BIRD</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game48.png" alt="Solitaire" />
          <h2>SOLITAIRE</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game49.png" alt="Zuma" />
          <h2>ZUMA</h2>
        </div>
      </div>

      {/* ------------------------- LIGNE 3 ------------------------- */}
      <div className="game-row">
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game42.png" alt="Subway Surfers" />
          <h2>SUBWAY SURF</h2>
        </div>
        <div className="game-card">
          <span className="tag updated">Updated</span>
          <img src="assets/images/games/game43.png" alt="Temple Run" />
          <h2>TEMPLE RUN</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game44.png" alt="Angry Birds" />
          <h2>ANGRY BIRDS</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game45.png" alt="Candy Crush" />
          <h2>CANDY CRUSH</h2>
        </div>
        <div className="game-card">
          <span className="tag updated">Updated</span>
          <img src="assets/images/games/game46.png" alt="Plants vs Zombies" />
          <h2>PLANTS VS ZOMBIES</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game47.png" alt="Clash Royale" />
          <h2>CLASH ROYALE</h2>
        </div>
      </div>

      {/* ------------------------- LIGNE 4 (duplicat Ligne 2) ------------------------- */}
      <div className="game-row">
        <div className="game-card">
          <span className="tag updated">Updated</span>
          <img src="assets/images/games/game47.png" alt="Snake" />
          <h2>SNAKE</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game48.png" alt="Pacman" />
          <h2>PACMAN</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game49.png" alt="Tetris" />
          <h2>TETRIS</h2>
        </div>
        <div className="game-card">
          <span className="tag updated">Updated</span>
          <img src="assets/images/games/game50.png" alt="Flappy Bird" />
          <h2>FLAPPY BIRD</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game48.png" alt="Solitaire" />
          <h2>SOLITAIRE</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game49.png" alt="Zuma" />
          <h2>ZUMA</h2>
        </div>
      </div>

      {/* ------------------------- LIGNE 5 (duplicat Ligne 3) ------------------------- */}
      <div className="game-row">
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game42.png" alt="Subway Surfers" />
          <h2>SUBWAY SURF</h2>
        </div>
        <div className="game-card">
          <span className="tag updated">Updated</span>
          <img src="assets/images/games/game43.png" alt="Temple Run" />
          <h2>TEMPLE RUN</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game44.png" alt="Angry Birds" />
          <h2>ANGRY BIRDS</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game45.png" alt="Candy Crush" />
          <h2>CANDY CRUSH</h2>
        </div>
        <div className="game-card">
          <span className="tag updated">Updated</span>
          <img src="assets/images/games/game46.png" alt="Plants vs Zombies" />
          <h2>PLANTS VS ZOMBIES</h2>
        </div>
        <div className="game-card">
          <span className="tag hot">Hot</span>
          <img src="assets/images/games/game47.png" alt="Clash Royale" />
          <h2>CLASH ROYALE</h2>
        </div>
      </div>
       
     </section>
    </div>
    </>
  );
}
