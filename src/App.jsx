import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import IntroOverlay from './components/IntroOverlay';
import Hero from './components/Hero';
import Stream from './components/Stream';
import Gallery from './components/Gallery';
import Subscribe from './components/Subscribe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // === Config: set your token when ready ===
    const TOKEN_MINT = '';
    const RAYDIUM_PAIR = '';

    const chart = document.getElementById('chartFrame');
    const pumpLink = document.getElementById('pumpLink');
    const pumpswapLink = document.getElementById('pumpswapLink');
    const dexsLink = document.getElementById('dexscreenerLink');

    function wireToken(){
      if(!TOKEN_MINT) return;
      chart.src = `https://birdeye.so/tv-widget/${TOKEN_MINT}?chain=solana&viewMode=pair&chartInterval=15&chartType=CANDLE&theme=dark`;
      pumpLink.href = `https://pump.fun/coin/${TOKEN_MINT}`;
      pumpswapLink.href = `https://pump.fun/coin/${TOKEN_MINT}`;
      if (RAYDIUM_PAIR) {
        dexsLink.href = `https://dexscreener.com/solana/${RAYDIUM_PAIR}?embed=1&info=0&theme=dark`;
      }
    }
    wireToken();

    // Toggle chart providers
    const useBirdeye = document.getElementById('useBirdeye');
    const useDex = document.getElementById('useDex');
    if (useBirdeye && useDex) {
      useBirdeye.addEventListener('click', ()=>{
        if (TOKEN_MINT) {
          chart.src = `https://birdeye.so/tv-widget/${TOKEN_MINT}?chain=solana&viewMode=pair&chartInterval=15&chartType=CANDLE&theme=dark`;
        }
      });
      useDex.addEventListener('click', ()=>{
        if (RAYDIUM_PAIR) {
          chart.src = `https://dexscreener.com/solana/${RAYDIUM_PAIR}?embed=1&info=0&theme=dark`;
        } else {
          alert('Add RAYDIUM_PAIR to enable Dexscreener embed.');
        }
      });
    }
  }, []);

  const handleEnter = () => {
    console.log('handleEnter');
    const menuMusic = document.getElementById('menuMusic');
    try { 
      menuMusic.volume = 0.25; 
      menuMusic.play().catch(()=>{}); 
    } catch(e){
      console.log('error', e);
    }
    setShowIntro(false);
  };

  return (
    <>
      <div className="noise"></div>

      {/* Faint PS2-style menu music (click to enable) */}
      <audio id="menuMusic" src="/src/assets/audio/ps2-menu.mp3" loop></audio>

      {/* Intro Overlay */}
      {showIntro && <IntroOverlay onEnter={handleEnter} />}

      {/* Main Content */}
      <Header />
      <Hero />
      <Stream />
      <Gallery />
      <Subscribe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;