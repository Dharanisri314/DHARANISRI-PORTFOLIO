// let cap=["A","B","C","a","b","c"];
// for(i=0;i>cap.length;i++){
//     if(cap==0){
//         console.log(cap);
//     }
// }

// let a=10;
// let b=80;
// for(i=a;i<=b;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
const whatsappButton = document.querySelector('.whatsapp-button');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    whatsappButton.style.display = 'block';
  } else {
    whatsappButton.style.display = 'none';
  }
});




















