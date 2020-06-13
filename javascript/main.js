const firstName = 'Adrian';
const age = '30';


console.log(firstName)
console.log(age)
console.log(`Mam na imie ${firstName} i mam ${age} lat.`)


const emptyParagraph = document.querySelector('.title-head__text--js');

emptyParagraph.innerHTML = 'Juz wydawalo mi sie ze juz cos wiem i przyszedl javascript...';




const button = document.querySelector('.action--js');

console.log(button)

    
button.addEventListener('click', () => {
    const heading = document.querySelector(".main__heading--js");
    heading.innerHTML = 'Witaj, mam na imie Adrian. Jestem kierowca autobusow/frontendowcem mieszkajacym w Brighton, UK.';
});


const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('.navigation--open');
});