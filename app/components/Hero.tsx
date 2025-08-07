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
    <section className="mt-10">
  <div className="container">
    <h3>🎮 Welcome to Retros Game Online – Your Favorite Place to Play Classic Games!</h3>
    <p>
      <a href="https://retrosgame.com/" target="_blank" rel="noopener noreferrer">RetrosGame</a> Online, you can enjoy your favorite retro games anytime, anywhere—no downloads or sign-ups needed! Our name says it all: we bring you the best old-school video games, all playable online for free. Whether you love Mario, Sonic, Pac-Man, or Street Fighter, we’ve got something fun for everyone. Just click, play, and start your adventure! It’s easy, safe, and perfect for kids of all ages. Come have fun and discover 
    </p>

    <h3>🕹️ What Are Retro Games?</h3>
    <p>
      Classic consoles decades ago, but today, you can enjoy them right in your browser—no installs, no waiting. These games are colorful, easy to control, and packed with action, making them perfect for young players or parents seeking safe entertainment.
    </p>
    <p>
      With just one click, your screen becomes a playground of adventure. Jump in now and rediscover the magic of retro gaming, exclusively on Retro Game Online.
    </p>

    <h3>🌟 Why Choose RetrosGame?</h3>
    <ul className="list-disc pl-6">
      <li>✅ Huge collection of browser-based classics.</li>
      <li>✅ No sign-up or download required.</li>
      <li>✅ Ad-free experience for smooth gameplay.</li>
      <li>✅ New titles added every week.</li>
      <li>✅ Playable on PC, tablet, or mobile 📱.</li>
    </ul>

    <h3>📂 Popular Categories</h3>
    <ul className="list-disc pl-6">
      <li>🎯 Platform Games</li>
      <li>🤜 Fighting Games</li>
      <li>🧠 Puzzle Games</li>
      <li>🏁 Racing Games</li>
      <li>🕹️ Arcade Challenges</li>
      <li>👬 Multiplayer Classics</li>
    </ul>

    <h3>🎯 Play Without Download</h3>
    <p>
      There is no need to install anything—click and play! At Retros Game Online, all our retro games work directly in your browser. That means no waiting, no setup, and no risk to your device. It’s the fastest way for kids to jump into classic fun, whether you're on a computer, tablet, or phone. Safe, smooth, and always ready—our games are made to start instantly.
    </p>
    <p>
      Try one now and enjoy quick, worry-free gaming in just one tap!
    </p>

    <h3>🎮The Benefits of Playing Retro Games Online</h3>
    <p>
      Retro games offer more than just fun—they create a playful way for children to learn, imagine, and think fast. With bright visuals, catchy sounds, and simple controls, these games help develop focus, memory, and coordination without feeling like work.
    </p>
    <p>
      Since everything is online, there’s no need to install apps or worry about updates. Just one click, and kids are ready to explore. It’s safe, fast, and perfect for families who want screen time to be meaningful. Retro games bring smiles and learning together—anytime, anywhere.
    </p>

    <h3>🎯 Play Our Best Retro Games</h3>
    <p>
      🌟 Ready for some real fun? Explore our best retro games—all carefully chosen for their excitement, creativity, and kid-friendly gameplay. From fast races to epic adventures, there's something here for every young gamer.
    </p>
    <p>
      🎮 No downloads needed—just click and play your favorites right in your browser. Whether you're new to retro games or a fan of the classics, you’ll find non-stop fun waiting for you. Start playing now and see which game becomes your new favorite! 🚀
    </p>

    <h3>🎮 Explore by Genre</h3>
    <p>
      At RetrosGame, finding your favorite classic game is super easy! We’ve grouped all our retro games into fun categories, so kids (and parents!) can quickly jump into the type of game they love most. Choose from:
    </p>
    <ul className="list-disc pl-6">
      <li>🕹️ Platformer Retro Games</li>
      <li>👾 Arcade Classics</li>
      <li>🧩 Puzzle & Brain Games</li>
      <li>🎯 Shooting Retro Games</li>
      <li>🚗 Retro Racing Games</li>
      <li>🦸‍♂️ Action & Adventure Games</li>
      <li>⚔️ Fighting & Battle Games</li>
      <li>👻 Retro Horror Games (kid-friendly!)</li>
      <li>👨‍👩‍👧‍👦 2 Player Retro Games</li>
      <li>🧒 Games for Younger Kids</li>
      <li>🧙‍♂️ Fantasy & Magic Retro Games</li>
    </ul>
    <p>
      Just pick a genre and start playing right away—no downloads, no waiting, just classic fun in every click!
    </p>

    <h3>🎲 Suggest a Game</h3>
    <p>
      Is there a retro game you love but can’t find on RetrosGame? We’d love to hear from you! 😊 Whether it’s an old favorite from your childhood or a fun classic you want to share with your kids, just let us know.
    </p>
    <p>
      Our team is always adding new games, and your suggestions help us make the site even more awesome. Use the contact form to suggest a title, and you might see it added next time you visit! 💌
    </p>

    <h3>👨‍👩‍👧‍👦 RetrosGame for Everyone</h3>
    <p>
      RetrosGame is made for all generations. Kids 👧 can enjoy educational and fun games, while adults 👨‍💻 rediscover old favorites. The clean, ad-light interface ensures a smooth experience for casual and passionate players alike.
    </p>

    <h3>🤝 Developer Partnership</h3>
    <p>
      Are you a developer with a retro-style game? We'd love to feature your work! 🧩 Reach out to us and share your creation with a global audience of retro fans.
    </p>

    <h3>🚀 Get Started</h3>
    <p>
      Ready to play? 🕹️ Browse the latest releases on <a href="https://retrosgame.com/" target="_blank" rel="noopener noreferrer">retrosgame.com</a> and jump right into the action. No limits, just pure fun!
    </p>

    <h3>🏆 About RetrosGame</h3>
    <p>
      RetrosGame is where timeless games come to life for a new generation. We've built a fun and safe space where kids can enjoy legendary video games—right in their browser, with no downloads or sign-ups required. It's quick, easy, and designed for young players to jump in and start playing instantly.
    </p>
    <p>
      Each game is carefully chosen for its simplicity, creativity, and age-appropriate gameplay. Whether you're trying retro games for the first time or sharing your childhood favorites with your family, RetrosGame makes classic gaming exciting all over again. Just click, play, and let the fun begin!
    </p>

    <h3>🛍️ Retro Game Store</h3>
    <p>
      Looking for something special to take your retro fun to the next level? Visit our Retro Game Store! 🎮 From cool game-themed T-shirts and posters to collectible items and classic game downloads, there’s something for every fan.
    </p>
    <p>
      It’s a great place for parents to find gifts and for kids to collect fun retro gear. Everything is kid-friendly, easy to order, and full of nostalgia. Start exploring now and bring the retro world home! 🎁
    </p>
  </div>
</section>

    </div>
    </>
  );
}
