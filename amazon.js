let prev = document.getElementById("leftbutton");
let next = document.getElementById("rightbutton");
let herosec= document.getElementById("herosection");
const images = document.querySelectorAll('img');

images.forEach((img) => {
  const currentSrc = img.getAttribute('src');
  img.src = 'Images/' + currentSrc;
  console.log('Updated src:', img.src);
});


const img=['linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, rgb(211, 202, 202) 100%), url(Images/bgimage.jpg)',
'linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, rgb(211, 202, 202) 100%), url(Images/bgimage2.jpg)',
'linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, rgb(211, 202, 202) 100%), url(Images/bgimage3.jpg)']

let curr=0;
function updatebackground(num){
    herosec.style.backgroundImage=img[num];
}

prev.addEventListener("click",()=>{
   if(curr!=0){
    curr=curr-1;
    updatebackground(curr);
   }
   else{
    updatebackground(2);
    curr=2;
   }
}) 
next.addEventListener("click",()=>{
    if(curr!=2){
        curr=curr+1;
        updatebackground(curr);
       }
       else{
        curr=0;
        updatebackground(0);
       }
    })
    let s2_prev = document.getElementById("left");
let s2_next = document.getElementById("right");
let container1 = document.getElementById("first");

s2_prev.addEventListener("click", () => {
    container1.scrollLeft -= 200; 
});

s2_next.addEventListener("click", () => {
    container1.scrollLeft += 200; 
});

let s3_prev = document.getElementById("left1");
let s3_next = document.getElementById("right1");
let container2 = document.getElementById("second");

s3_prev.addEventListener("click", () => {
    container2.scrollLeft -= 200; 
});

s3_next.addEventListener("click", () => {
    container2.scrollLeft += 200; 
});