window.addEventListener('load', () => {
  textAnim();
  smallHeartAnim();

  // ✅ same as setTimeout but via GSAP
  gsap.delayedCall(22, () => window.location.href = NEXT_PAGE);
});

// birthday/Dist/script.js
const NEXT_PAGE = "../../page2.html";   // ✅ correct relative path
// or "/birthday/dist/index.html"


// Insert smallHearts element
const total = 13;
const container = document.querySelector('.smallHearts');
for (var i = 0, span; i < total; i++) {
  span = document.createElement('span');
  span.className = 'smallHeart';
  container.appendChild(span);
}

// Text animation
function textAnim() {
  const tl = gsap.timeline();
  tl.set('.s', {
    opacity: 1 }).

  from('.s', {
    duration: 0.4,
    delay: '3',
    ease: 'power1.inOut',
    scale: 0,
    y: 40,
    stagger: 0.04 });

}

// Small hearts animation
function smallHeartAnim() {
  const tl = gsap.timeline();
  tl.set('.smallHeart', {
    opacity: 1 }).

  fromTo(
  '.smallHeart',
  {
    scale: 0,
    rotate: '-=25',
    y: '+=70' },

  {
    duration: 3.4,
    delay: '3.6',
    ease: 'slow.out',
    rotate: 'random(-20, 20)',
    scale: 'random(0.5, 1.5)',
    y: '0',
    x: Math.PI * 4,
    modifiers: {
      x: function (x) {
        return Math.sin(parseFloat(x)) * 15 + 'px';
      } },

    stagger: {
      each: 0.08,
      from: 'random' } });
  (function () {
  const audio = document.getElementById('bg-music');
  if (!audio) return;

  // Ensure it starts
  const start = () => audio.play().catch(()=>{});
  if (audio.readyState >= 2) start();
  else audio.addEventListener('canplay', start, { once: true });

  // Try to unmute after a short delay (works on many desktop/mobile browsers)
  setTimeout(() => {
    try {
      audio.muted = false;              // attempt unmute
      if (audio.paused) audio.play();   // kick it again just in case
    } catch (e) {}
  }, 1200);

  // Also retry unmute on visibility/focus changes (helps some browsers)
  const retry = () => {
    try {
      audio.muted = false;
      if (audio.paused) audio.play();
    } catch (e) {}
  };
  document.addEventListener('visibilitychange', retry);
  window.addEventListener('focus', retry);
})();




}
