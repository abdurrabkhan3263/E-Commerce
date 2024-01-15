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


// OPENING THE PRODUCT;
const product = document.querySelectorAll('.pro');

function productOpen(){
    window.location.href = 'sproduct.html'
}

function cartOpen(event){
    event.target.parentNode.href = 'cart.html'
}

product.forEach((value)=>{
    value.addEventListener('click' , (event)=>{
        if(event.target.tagName === 'IMG' || event.target.tagName === 'H5'){
            let name = value.querySelector('.des')
            let img = value.firstElementChild.src;
            let proName = name.firstElementChild.nextElementSibling.innerHTML;
            let price = name.querySelector('h4').innerHTML;
            productOpen();
            let arr = [{
                img : img,
                proName : proName,
                price : price,
            }]
            localStorage.setItem('data' , JSON.stringify(arr))
        }
        if(event.target.tagName === 'I'){
            cartOpen(event);
        }
    })
})

