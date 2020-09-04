document.addEventListener('DOMContentLoaded',()=>{
  moreBtnToggle(); 
})

function moreBtnToggle(){
  const moreBtn=document.querySelector('.title_and_btn .vid_more_btn');
  const videoTitle=document.querySelector('.title_and_btn .vid_title');
  moreBtn.addEventListener('click',()=>{
    moreBtn.classList.toggle('clicked');
    videoTitle.classList.toggle('clamp');
  })
}