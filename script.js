document.addEventListener("DOMContentLoaded", function(){

// NAV
function next(id){
 document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
 document.getElementById(id).classList.add("active");
}
window.next = next;

// STAR
let stars = document.getElementById("stars");
for(let i=0;i<20;i++){
 let s=document.createElement("img");
 s.src="https://cdn-icons-png.flaticon.com/512/616/616490.png";
 s.className="starfish";
 s.style.top=Math.random()*100+"%";
 s.style.left=Math.random()*100+"%";
 stars.appendChild(s);
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

// ================= COUNTDOWN =================
let birthday = new Date().getTime() + 5000;

let interval = setInterval(()=>{
 let now = new Date().getTime();
 let d = birthday - now;

 let days = Math.floor(d/(1000*60*60*24));
 let hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
 let minutes = Math.floor((d%(1000*60*60))/(1000*60));
 let seconds = Math.floor((d%(1000*60))/1000);

 document.getElementById("countdown").innerHTML =
  days+"h "+hours+"j "+minutes+"m "+seconds+"d";

 if(d <= 0){
  clearInterval(interval);

  document.getElementById("countdown").innerHTML = "🎉 Sudah waktunya!";
  
  let btn = document.getElementById("startBtn");
  btn.disabled = false;
  btn.onclick = ()=>next('p1b');

  document.getElementById("lockMessage").innerHTML="💖 Sekarang sudah bisa dibuka!";
 }
},1000);

// ================= FOTO STACK (FIX FINAL) =================
setTimeout(()=>{

 let photos = document.querySelectorAll(".photo");

 photos.forEach((photo, index) => {

  photo.style.zIndex = index + 1;

  photo.onclick = function(e){
    e.stopPropagation();

    photos.forEach(p=>{
      p.classList.remove("active");
      p.style.zIndex = 1;
    });

    this.classList.add("active");
    this.style.zIndex = 9999;
  };

 });

},300);

// ================= VIDEO FIX =================
let video = document.querySelector("video");
if(video){
 video.addEventListener("error", ()=>{
   alert("Video tidak ditemukan / format salah ❌");
 });
}

});