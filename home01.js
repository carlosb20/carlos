import lista_material from "./lista_material.js";

const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menu_a = [...document.querySelectorAll('.menu > ul > li > a')]
const main = document.querySelector('.main_')

console.log(main);


console.log(lista_material)
btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    
});

menu_a.forEach((e)=>{
    e.addEventListener('click',()=>{
        
        window.location.href = `home02.html?nome=${e.textContent}`;
    
    })
})
 
// ----------------- container Muck ---------------------
const muck = 'Guindaste'
const divcont_muck = document.createElement('div')
divcont_muck.style.width = '100%';
divcont_muck.style.display = 'block';
divcont_muck.style.border = '2px solid red'; 


const h1_text = document.createElement('h1')
h1_text.innerHTML = 'Muck'
h1_text.style.padding = '5px'
divcont_muck.appendChild(h1_text) 

const contdiv = document.createElement('div')
contdiv.setAttribute('class','contdiv')
contdiv.style.display = 'flex'
contdiv.style.width = '5000px'
contdiv.style.height = '250px'


divcont_muck.appendChild(contdiv)

lista_material[muck].forEach((e)=>{

    //console.log(e.foto , 'ok')
    const cont_muck = document.createElement('div')
    const img_ = document.createElement('img')
    
    //cont_muck.style.backgroundColor = 'red'
    cont_muck.style.width = '200px'
    cont_muck.style.height = '200px'
    cont_muck.style.boxShadow = '0px 0px 10px -1px black'
    cont_muck.style.margin = '5px'
    

    img_.src = e.foto
    
    //img_.src = 'docs/assets/img/imagem02.jpg'
    img_.style.width = '200px';
    img_.style.height = '200px';
    img_.style.objectFit = 'cover';
    
    
    cont_muck.appendChild(img_)
    contdiv.appendChild(cont_muck)
    

})


main.appendChild(divcont_muck)


// ------------------------------------------------


//main.innerHTML = `${lista_material}`

