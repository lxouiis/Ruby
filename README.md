A Little Letter Sealed With Sunshine 🌻

A playful, mobile-first mini-site built with HTML/CSS/JS that reveals a surprise journey for a friend’s birthday. Tap the sunflower → watch a short intro video → land on a Happy Birthday screen with animated hearts and text (GSAP). More screens can be chained afterward (card page, hearts, second video, final message).

✨ Features

Sunflower cover with ribbon artwork and a subtle sunflower pattern background

In-page popup video (autoplays on user gesture) with Skip/Close

Auto navigation to the next scene when the video ends

GSAP animation page (Happy Birthday) ready in /birthday/dist

Phone-first layout with smooth, simple CSS transitions


/
├─ index.html                 # Sunflower landing page (plays video, then go to /birthday/dist)
├─ Video-709.mp4              # First video (can be moved to /assets; update path in JS)
├─ page2.html                 # (optional next) Card page – to be wired later
├─ video2.html                # (optional next) Second video – to be wired later
├─ final.html                 # (optional next) Final message – to be wired later
├─ css/
│  └─ main.css                # Global styles + overlay styles
├─ js/
│  └─ index.js                # Popup video + navigation logic
├─ assets/
│  ├─ titlebg.png             # Ribbon/title decorative image
│  ├─ ribbon.png              # Sunflower “seal” image
│  └─ sunflower-bg.png        # Repeating background pattern
└─ birthday/
   └─ dist/
      ├─ index.html           # Happy Birthday page (GSAP)
      ├─ style.css            # HB styles
      └─ script.js            # HB animations (requires GSAP)
