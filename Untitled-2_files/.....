<!DOCTYPE html>
<!-- saved from url=(0057)file:///C:/Users/Susan/Documents/SURPRISE/Untitled-2.html -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Happy 1st Monthsary!</title>
<link href="./Untitled-2_files/css2" rel="stylesheet">
<style>
 *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

 body {
   font-family: 'Quicksand', sans-serif;
   background: #f5f0e8;
   min-height: 100vh;
 }

 /* ── HERO ── */
 .hero {
   background: #a8c8e8;
   padding: 40px 20px 50px;
   text-align: center;
   position: relative;
 }
 .hero::after {
   content: '';
   display: block;
   position: absolute;
   bottom: -24px; left: 0; right: 0;
   height: 50px;
   background: #f5f0e8;
   clip-path: ellipse(55% 100% at 50% 100%);
 }
 .bow {
   font-size: 2.2rem;
   line-height: 1;
   margin-bottom: 6px;
   filter: drop-shadow(0 2px 4px rgba(0,0,0,.15));
 }
 .hero h1 {
   font-family: 'Dancing Script', cursive;
   font-size: clamp(2.4rem, 8vw, 4rem);
   color: #fff;
   text-shadow: 2px 3px 8px rgba(100,140,180,.5);
   line-height: 1.15;
 }
 .hero-photo {
   margin: 24px auto 0;
   width: 130px; height: 130px;
   border-radius: 8px;
   overflow: hidden;
   transform: rotate(-4deg);
   box-shadow: 4px 6px 18px rgba(0,0,0,.25);
   border: 5px solid #fff;
   background: #ddd;
   display: flex; align-items: center; justify-content: center;
   color: #aaa; font-size: .75rem;
 }
 .hero-photo img { width: 100%; height: 100%; object-fit: cover; }

 /* ── ENVELOPE SECTION ── */
 .envelope-section {
   padding: 60px 20px 40px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 12px;
 }
 .to-label {
   font-family: 'Dancing Script', cursive;
   font-size: 1.6rem;
   color: #7a9bbf;
   align-self: flex-start;
   max-width: 600px;
   width: 100%;
   padding-left: 4px;
 }

 /* Envelope */
 .envelope-wrapper { width: 100%; max-width: 600px; }
 .envelope {
   position: relative;
   width: 100%;
   cursor: pointer;
   user-select: none;
 }

 .env-body {
   background: #fff8f0;
   border: 2px solid #d4b8a0;
   border-radius: 4px 4px 8px 8px;
   padding: 0;
   overflow: hidden;
   box-shadow: 0 4px 16px rgba(0,0,0,.12);
 }

 /* Flap */
 .env-flap {
   width: 100%;
   position: relative;
   height: 90px;
   overflow: hidden;
 }
 .env-flap svg { width: 100%; height: 100%; display: block; }

 /* Flap open animation */
 .envelope.open .env-flap-top {
   transform-origin: top center;
   animation: openFlap .5s ease forwards;
 }
 @keyframes openFlap {
   to { transform: rotateX(180deg); }
 }

 /* Letter peek */
 .letter-peek {
   display: none;
   padding: 0 20px;
   transform: translateY(10px);
   transition: transform .4s ease .2s;
 }
 .envelope.open .letter-peek {
   display: block;
   transform: translateY(0);
 }

 /* Letter card */
 .letter-card {
   background: #fffdf7;
   border: 1.5px solid #d4c4a8;
   border-radius: 6px;
   padding: 24px 28px;
   margin: 16px 0 20px;
   box-shadow: 0 2px 10px rgba(0,0,0,.08);
   font-family: 'Caveat', cursive;
   font-size: 1.15rem;
   line-height: 1.75;
   color: #4a3a2a;
   position: relative;
 }
 .letter-card::before {
   content: '💌';
   position: absolute;
   top: 12px; right: 16px;
   font-size: 1.4rem;
 }
 .letter-card p { margin-bottom: .5rem; }
 .letter-card .letter-body { font-style: italic; }

 .env-bottom-strip {
   background: #f0e8d8;
   border-top: 2px dashed #d4b8a0;
   padding: 10px;
   text-align: center;
   font-size: .78rem;
   color: #a08878;
   letter-spacing: .05em;
 }

 /* hint */
 .env-hint {
   font-size: .8rem;
   color: #a08878;
   text-align: center;
   margin-top: 6px;
 }

 /* ── PHOTO GRID SECTION ── */
 .section {
   padding: 30px 20px 20px;
   max-width: 760px;
   margin: 0 auto;
 }

 .photo-grid {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 16px;
 }

 /* Polaroid card */
 .polaroid {
   background: #fff;
   border: 1.5px solid #ddd;
   border-radius: 4px;
   padding: 10px 10px 28px;
   box-shadow: 2px 3px 10px rgba(0,0,0,.12);
   cursor: pointer;
   transition: transform .2s, box-shadow .2s;
   position: relative;
 }
 .polaroid:hover { transform: scale(1.04) rotate(1deg); box-shadow: 4px 6px 18px rgba(0,0,0,.2); }
 .polaroid:nth-child(even):hover { transform: scale(1.04) rotate(-1deg); }

 .polaroid-img {
   width: 100%;
   aspect-ratio: 1;
   background: #e8e0d8;
   border-radius: 2px;
   overflow: hidden;
   display: flex; align-items: center; justify-content: center;
   color: #bbb; font-size: .7rem;
 }
 .polaroid-img img { width: 100%; height: 100%; object-fit: cover; }

 .polaroid-label {
   position: absolute;
   bottom: 7px; left: 0; right: 0;
   text-align: center;
   font-family: 'Caveat', cursive;
   font-size: .85rem;
   color: #888;
 }

 .bow-deco {
   text-align: center;
   font-size: 1rem;
   margin-top: 4px;
   color: #a8c8e8;
 }

 /* ── LIGHTBOX ── */
 .lightbox {
   display: none;
   position: fixed;
   inset: 0;
   background: rgba(0,0,0,.82);
   z-index: 1000;
   align-items: center;
   justify-content: center;
   padding: 20px;
 }
 .lightbox.active { display: flex; }
 .lightbox-inner {
   background: #fff;
   border-radius: 8px;
   padding: 14px 14px 36px;
   max-width: 480px;
   width: 100%;
   position: relative;
   box-shadow: 0 8px 40px rgba(0,0,0,.5);
   animation: popIn .25s ease;
 }
 @keyframes popIn { from { transform: scale(.85); opacity: 0; } to { transform: scale(1); opacity: 1; } }
 .lightbox-img {
   width: 100%;
   border-radius: 4px;
   display: block;
   background: #ddd;
   min-height: 200px;
 }
 .lightbox-caption {
   text-align: center;
   font-family: 'Caveat', cursive;
   font-size: 1.1rem;
   color: #888;
   margin-top: 10px;
 }
 .lightbox-close {
   position: absolute;
   top: -14px; right: -14px;
   background: #fff;
   border: 2px solid #ddd;
   border-radius: 50%;
   width: 32px; height: 32px;
   font-size: 1.1rem;
   cursor: pointer;
   display: flex; align-items: center; justify-content: center;
   box-shadow: 0 2px 8px rgba(0,0,0,.2);
 }

 /* ── BLUE ENVELOPE (Video) ── */
 .video-section {
   padding: 20px 20px 50px;
   display: flex;
   flex-direction: column;
   align-items: center;
 }
 .video-section h2 {
   font-family: 'Dancing Script', cursive;
   font-size: 1.8rem;
   color: #5585a5;
   margin-bottom: 18px;
   letter-spacing: .04em;
 }

 .blue-envelope-wrapper { width: 100%; max-width: 580px; }
 .blue-envelope {
   cursor: pointer;
   width: 100%;
 }
 .blue-env-body {
   background: #d0e8f8;
   border: 2px solid #7aaece;
   border-radius: 4px 4px 10px 10px;
   overflow: hidden;
   box-shadow: 0 4px 20px rgba(100,160,210,.3);
 }
 .blue-env-flap {
   width: 100%;
   height: 80px;
   position: relative;
   overflow: hidden;
 }
 .blue-env-flap svg { width: 100%; height: 100%; display: block; }

 .video-peek {
   display: none;
   padding: 0 16px 16px;
 }
 .blue-envelope.open .video-peek { display: block; }

 .video-frame {
   background: #0a0a0a;
   border-radius: 6px;
   overflow: hidden;
   margin-top: 12px;
   border: 3px solid #7aaece;
   aspect-ratio: 16/9;
   display: flex; align-items: center; justify-content: center;
 }
 .video-frame video {
   width: 100%;
   height: 100%;
   object-fit: contain;
 }
 .video-placeholder {
   color: #aaa;
   text-align: center;
   font-size: .85rem;
   padding: 20px;
 }
 .video-placeholder .play-icon { font-size: 3rem; display: block; margin-bottom: 8px; }

 .blue-env-bottom {
   background: #b8d8f0;
   border-top: 2px dashed #7aaece;
   padding: 10px;
   text-align: center;
   font-size: .78rem;
   color: #5580a0;
   letter-spacing: .05em;
 }

 .blue-env-hint {
   font-size: .8rem;
   color: #7aaece;
   text-align: center;
   margin-top: 6px;
 }

 /* ── RESPONSIVE ── */
 @media (max-width: 480px) {
   .photo-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
   .hero h1 { font-size: 2rem; }
 }
</style>
</head>
<body>

<!-- HERO -->
<div class="hero">
 <div class="bow">🎀</div>
 <h1>HAPPY 1<sup style="font-size:.55em">ST</sup><br>MONTHSARY!</h1>
 <div class="hero-photo">
   <img src="./Untitled-2_files/Image (29).jpg" alt="favorite picture">
      <span class="polaroid-label">favorite picture</span>
 </div>


<!-- LETTER ENVELOPE -->
<!-- LETTER ENVELOPE -->
<div class="envelope-section">
 <div class="to-label">To : Peks!</div>

 <div class="envelope-wrapper">
   <div class="envelope open" id="letterEnvelope" onclick="toggleEnvelope(&#39;letterEnvelope&#39;)">
     <div class="env-body">
       <!-- Flap -->
       <div class="env-flap">
         <svg viewBox="0 0 600 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
           <polygon points="0,0 600,0 300,90" fill="#f5efe0" stroke="#d4b8a0" stroke-width="1.5"></polygon>
         </svg>
       </div>

       <!-- Letter -->
       <div class="letter-peek">
         <div class="letter-card">
           <p><strong>Happy happy first monthsary, Peksss!!</strong></p>
           <p class="letter-body">
             AHH! It's our first monthsary already—it feels like just yesterday when I was only
             admiring you from afar, but God, it's our first monthsary now.
             Meeting you was the best thing in my life, and choosing to love you was the best
             decision I've ever made. Thank you for choosing me as well. I'll always be by your
             side, or even right behind you, supporting you. 
           </p>
         </div>
       </div>


       <div class="env-bottom-strip">TO BE CONTINUE……</div>
     </div>
   </div>
   <p class="env-hint">🎀 Click the envelope to read the letter</p>
 </div>
</div>

<!-- PHOTO GRID -->
 <div class="section">
 <div class="photo-grid" id="photoGrid">


    <div class="polaroid" onclick="openLightbox(0)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (16).jpg" alt="first lean ;)">
      </div>
      <span class="polaroid-label">first lean ;)</span>
    </div>

    <div class="polaroid" onclick="openLightbox(1)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (18).jpg" alt="first holding hands">
      </div>
      <span class="polaroid-label">first holding hands</span>
    </div>

    <div class="polaroid" onclick="openLightbox(2)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (28).jpg" alt="first dinner date (Puso Village)">
      </div>
      <span class="polaroid-label">first dinner date (Puso Village)</span>
    </div>

    <div class="polaroid" onclick="openLightbox(3)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (15).jpg" alt="first meet (Chung Hua)">
      </div>
      <span class="polaroid-label">first meet (Chung Hua)</span>
    </div>

    <div class="polaroid" onclick="openLightbox(4)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (23).jpg" alt="first pic sa acquaintance (NAS)">
      </div>
      <span class="polaroid-label">first pic sa acquaintance (NAS)</span>
    </div>

    <div class="polaroid" onclick="openLightbox(5)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (29).jpg" alt="first gift from me">
      </div>
      <span class="polaroid-label">first gift from me</span>
    </div>

    <div class="polaroid" onclick="openLightbox(6)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (28).jpg" alt="first pasakay">
      </div>
      <span class="polaroid-label">first pasakay</span>
    </div>

    <div class="polaroid" onclick="openLightbox(7)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (19).jpg" alt="first pastel date">
      </div>
      <span class="polaroid-label">first pastel date</span>
    </div>

    <div class="polaroid" onclick="openLightbox(8)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (20).jpg" alt="first lunch date (mall)">
      </div>
      <span class="polaroid-label">first lunch date (mall)</span>
    </div>

    <div class="polaroid" onclick="openLightbox(9)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (21).jpg" alt="Pekson’s birthday celebration">
      </div>
      <span class="polaroid-label">Pekson’s birthday celebration</span>
    </div>

    <div class="polaroid" onclick="openLightbox(10)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (25).jpg" alt="first photobooth">
      </div>
      <span class="polaroid-label">first photobooth</span>
    </div>

    <div class="polaroid" onclick="openLightbox(11)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (29).jpg" alt="favorite picture">
      </div>
      <span class="polaroid-label">favorite picture</span>
    </div>

    <div class="polaroid" onclick="openLightbox(12)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (27).jpg" alt="first visit sa condo">
      </div>
      <span class="polaroid-label">first visit sa condo</span>
    </div>

    <div class="polaroid" onclick="openLightbox(13)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (11).jpg" alt="first arcade date">
      </div>
      <span class="polaroid-label">first arcade date</span>
    </div>

    <div class="polaroid" onclick="openLightbox(14)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (12).jpg" alt="first gift from Peks">
      </div>
      <span class="polaroid-label">first gift from Peks</span>
    </div>

    <div class="polaroid" onclick="openLightbox(15)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (14).jpg" alt="first drawing">
      </div>
      <span class="polaroid-label">first drawing</span>
    </div>

    <div class="polaroid" onclick="openLightbox(16)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (28).jpg" alt="last date">
      </div>
      <span class="polaroid-label">last date</span>
    </div>

    <div class="polaroid" onclick="openLightbox(17)">
      <div class="polaroid-img">
        <img src="./Untitled-2_files/Image (24).jpg" alt="officially na">
      </div>
      <span class="polaroid-label">officially na</span>
    </div>

  </div>
</div>

<!-- LIGHTBOX -->
<div class="lightbox" id="lightbox" onclick="closeLightbox(event)">
 <div class="lightbox-inner">
   <button class="lightbox-close" onclick="closeLightboxBtn()">✕</button>
   <img class="lightbox-img" id="lightboxImg" src="file:///C:/Users/Susan/Documents/SURPRISE/Untitled-2.html" alt="">
   <div class="lightbox-caption" id="lightboxCaption"></div>
 </div>
</div>

<!-- VIDEO BLUE ENVELOPE -->
<div class="video-section">
  <h2 class="section-title">Video Memories</h2>

  <div class="video-grid">

  </div>
</div>




 <h2>✨ FIRST PHOTOBOOTH ✨</h2>

 <div class="blue-envelope-wrapper">
   <div class="blue-envelope" id="videoEnvelope" onclick="toggleEnvelope(&#39;videoEnvelope&#39;)">
     <div class="blue-env-body">
       <!-- Flap -->
       <div class="blue-env-flap">
         <svg viewBox="0 0 600 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
           <polygon points="0,0 600,0 300,80" fill="#a8d0ee" stroke="#7aaece" stroke-width="1.5"></polygon>
         </svg>
       </div>

       <!-- Video -->
      <div class="video-card">
      <video controls="">
        <source src="MicrosoftTeams-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <span class="video-label">first video</span>
    </div>

    <div class="video-card">
      <video controls="">
        <source src="MicrosoftTeams-video (1).mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <span class="video-label">favorite moment</span>
    </div>
           <!--
             TO ADD YOUR VIDEO:
             Replace the div below with:
             <video controls autoplay>
               <source src="your-video.mp4" type="video/mp4" />
             </video>
           -->
           <div class="video-placeholder">
             <span class="play-icon">▶️</span>
             <strong>Add your photobooth video here</strong><br>
             Replace this with a &lt;video&gt; tag pointing to your file.
           </div>
         </div>
       </div>

       <div class="blue-env-bottom">💙 FIRST PHOTOBOOTH MEMORY 💙</div>
     </div>
   </div>
   <p class="blue-env-hint">💙 Click the blue envelope to watch the video</p>
 


<script>
 // Envelope toggle
 function toggleEnvelope(id) {
   const env = document.getElementById(id);
   env.classList.toggle('open');
 }

 // Lightbox
 const captions = [
   'first lean;)', 'first holding hands', ' First dinner date (Puso Village)',
   'first meet (chung hua )', 'first pic sa acquaintance (NAS )', 'First gift from me',
   'first pasakay', 'first pastel date', 'first lunch(mall)date',
   'pekson’s birthday celeb', 'first photobooth', 'fav picture',
   'first visit sa condo', 'first arcade date', 'First gift  from Peks',
   'first drawing', 'last date', 'officially na', 
 ];

 function openLightbox(index) {
   const polaroids = document.querySelectorAll('.polaroid');
   const pol = polaroids[index];
   const img = pol.querySelector('img');
   const lb = document.getElementById('lightbox');
   const lbImg = document.getElementById('lightboxImg');
   const lbCap = document.getElementById('lightboxCaption');

   if (img) {
     lbImg.src = img.src;
     lbImg.style.display = 'block';
   } else {
     lbImg.src = '';
     lbImg.style.display = 'none';
   }
   lbCap.textContent = captions[index] || 'The Party';
   lb.classList.add('active');
 }

 function closeLightbox(e) {
   if (e.target === document.getElementById('lightbox')) {
     document.getElementById('lightbox').classList.remove('active');
   }
 }

 function closeLightboxBtn() {
   document.getElementById('lightbox').classList.remove('active');
 }

 document.addEventListener('keydown', e => {
   if (e.key === 'Escape') document.getElementById('lightbox').classList.remove('active');
 });
</script>


</body></html>
