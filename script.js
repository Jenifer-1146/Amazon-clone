const images = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.contro_next');

let n = 0; //Meaning : We are on the first image and if we give 1 we are on the secong image like tis it goes on...
function changeSlide(){
    //To hide all the images we use for loop
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    //To display the first image we use 'block'
    images[n].style.display = 'block';
}
changeSlide();

//To change the slide on backwards
prev_btn.addEventListener('click',  (e)=>{
    if(n>0){
        n--;
    }else{
        n = images.length-1;
    }
    changeSlide();
})

//To change the slide forward
next_btn.addEventListener('click', (e)=>{
    if(n<images.length-1){

        n++;
    }else{
        n=0;
    }
    changeSlide()
})
