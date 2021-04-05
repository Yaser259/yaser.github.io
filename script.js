var images = [
    "https://images.unsplash.com/photo-1553260188-75a8d6205b6c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dGVzbGF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1572191267783-5618f992aff5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8dGVzbGF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1591134106085-8bbdc61a2ab5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHRlc2xhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
];
var i = 0;
var time = 5000;
function setImage(){
    document.slide.src = images[i];
}
function slideImg(){
    if(i < images.length-1){
        i++;
    }else{
        i=0;
    }
    setImage();
    setTimeout('slideImg()',time);
}
window.onload = slideImg;
var rightBtn = document.getElementById('right');
rightBtn.addEventListener('click',function(){
    if(i < images.length-1){
        i++;
    }else{
        i=0;
    }
    setImage();
})
var leftBtn = document.getElementById('left');
leftBtn.addEventListener('click',function(){
    if(i>0){
        i--;
    }else{
        i = images.length-1;
    }
    setImage();
})
