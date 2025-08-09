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

// Intro: enable audio on click and fade out overlay
const intro = document.getElementById('introOverlay');
const enterBtn = document.getElementById('enterBtn');
const menuMusic = document.getElementById('menuMusic');
enterBtn.addEventListener('click', ()=>{
  try { menuMusic.volume = 0.15; menuMusic.play().catch(()=>{}); } catch(e){}
  intro.classList.add('opacity-0','pointer-events-none');
  setTimeout(()=> intro.remove(), 350);
});

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


