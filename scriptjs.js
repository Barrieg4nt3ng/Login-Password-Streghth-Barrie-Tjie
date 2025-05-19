// - link video tutorial: https://youtu.be/8YoTHyUyZJs?si=UJ4PITEoapBdntHC - //
const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input',(e)=>{
const input=e.target.value;
const length=input.length;
const blurValue = 20 - length * 2
background.style.filter=`blur(${blurValue}px)`;





})

Swal.fire({
  imageUrl: "file:///C:/Users/DAVID/Downloads/20250505_223119.jpg",
  imageAlt: "muka barrie",
  imageWidth: 300,
  imageHeight: 258,
  title: "Barrie Tjie",
  position: "center",
  html: `
   <h1 style="font-size: 24px; font-weight: bold; font-family: Italic ;"><i><b>Homo Sine Amore Vivere Nequit</b></i></h1>

   <h2 style="font-size: 18px; "><i>"Seorang Pria Tanpa Cinta Tidak Bisa Hidup"</i></h2>

    <p style="font-size: 17px; font-weight: bold; font-family: Arial">Sir Nuel ganteng banget sampe bikin aku muntah 🤮</p>

  `,
  confirmButtonText: "Tutup",
  showCloseButton: true,


});
