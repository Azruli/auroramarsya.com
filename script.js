document.addEventListener("DOMContentLoaded", function(){

// NAV
function next(id){
 document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
 document.getElementById(id).classList.add("active");

 // 🔥 delay lebih lama biar DOM siap
 if(id === "p2"){
   setTimeout(spreadPhotos, 200);
 }
}
window.next = next;

// STAR
var stars = document.getElementById("stars");
if(stars && stars.children.length === 0){
 for(let i=0;i<20;i++){
  let s=document.createElement("img");
  s.src="https://cdn-icons-png.flaticon.com/512/616/616490.png";
  s.className="starfish";
  s.style.top=Math.random()*100+"%";
  s.style.left=Math.random()*100+"%";
  stars.appendChild(s);
 }
}

// MUSIC
function toggleMusic(){
 let m=document.getElementById("music");
 if(m.paused){
   m.play().catch(()=>alert("Klik lagi untuk memutar musik 🎵"));
 } else {
   m.pause();
 }
}
window.toggleMusic = toggleMusic;

// JAWAB
function jawab(res){
 let j = document.getElementById("jawaban");
 if(res){
  j.innerHTML="💖 Aku juga sayang kamu!";
 } else {
  j.innerHTML="😢 Jangan gitu... pilih yang atas ya 💕";
 }
}
window.jawab = jawab;

var targetDate = new Date("2026-04-23 00:00:00");

var interval = setInterval(()=>{
 let now = new Date().getTime();
 let distance = targetDate - now;

 let days = Math.floor(distance/(1000*60*60*24));
 let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
 let minutes = Math.floor((distance%(1000*60*60))/(1000*60));
 let seconds = Math.floor((distance%(1000*60))/1000);

 document.getElementById("days").innerText = days;
 document.getElementById("hours").innerText = hours;
 document.getElementById("minutes").innerText = minutes;
 document.getElementById("seconds").innerText = seconds;

 if(distance <= 0){
  clearInterval(interval);

  document.getElementById("countdown").innerHTML = "🎉 Sudah waktunya!";
  document.getElementById("lockMessage").innerHTML = "💖 Sekarang sudah bisa dibuka!";

  let btn = document.getElementById("startBtn");
  btn.disabled = false;
  btn.onclick = () => next('p1b');
 }
},1000);
next('p2');
}

// 🔥 FOTO BERSEBARAN
function spreadPhotos(){
 let photos = document.querySelectorAll(".photo");

 photos.forEach((photo)=>{

  let x = Math.random() * (window.innerWidth - 150);
  let y = Math.random() * (window.innerHeight - 200);
  let rotate = (Math.random() * 60) - 30;

  photo.style.position = "fixed";
  photo.style.left = x + "px";
  photo.style.top = y + "px";
  photo.style.transform = "rotate("+rotate+"deg)";
  photo.style.zIndex = Math.floor(Math.random() * 100);

  photo.onclick = function(){
    photos.forEach(p=>p.classList.remove("active"));
    this.classList.add("active");
    this.style.zIndex = 9999;
    this.style.transform = "scale(1.3) rotate(0deg)";
  };

 });
}

);