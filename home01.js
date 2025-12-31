const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menu_a = [...document.querySelectorAll('.menu > ul > li > a')]




var material_json = NaN

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    
});


menu_a.forEach((e)=>{
    e.addEventListener('click',()=>{
        
        window.location.href = `home02.html?nome=${e.textContent}`
        
        
    })
    
})
 

