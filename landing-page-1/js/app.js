const nav_bar =document.getElementById('navbar__list');

const section1 =document.createElement('li');
const text1 = document.createTextNode('section 1');
section1.appendChild(text1);
nav_bar.appendChild(section1);

section1.addEventListener('click', ()=>{
    const sec1 =document.getElementById('section1');
    sec1.scrollIntoView();
});

const section2 =document.createElement('li');
const text2 = document.createTextNode('section 2');
section2.appendChild(text2);
nav_bar.appendChild(section2);
section2.addEventListener('click', ()=>{
    const sec1 =document.getElementById('section2');
    sec1.scrollIntoView();
});


const section3 =document.createElement('li');
const text3 = document.createTextNode('section 3');
section3.appendChild(text3);
nav_bar.appendChild(section3);
section3.addEventListener('click', ()=>{
    const sec1 =document.getElementById('section3');
    sec1.scrollIntoView();
});

const section4 =document.createElement('li');
const text4 = document.createTextNode('section 4');
section4.appendChild(text4);
nav_bar.appendChild(section4);
section4.addEventListener('click', ()=>{
    const sec1 =document.getElementById('section4');
    sec1.scrollIntoView();
});