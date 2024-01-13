const menuBar = document.querySelector('#bar');
const navBar = document.querySelector('#navbar');
const navClose = document.querySelector('#close')

function openClose(){
    return navBar.style.right = (navBar.style.right) === ('0px') ? '-350px' : '0px';
}

menuBar.addEventListener('click' , (event)=>{
    openClose();
});

navClose.addEventListener('click' , function(){
    openClose();
})
