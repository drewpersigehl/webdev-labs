adjustment = 0;

const makeBigger = () => {
   adjustment += 0.1;
   document.querySelector("h1").style.fontSize = `${2 + adjustment}em`;
   document.querySelector(".content").style.fontSize = `${1.4 + adjustment}em`;
   alert('make bigger!');
};

const makeSmaller = () => {
   adjustment -= 0.1;
   document.querySelector("h1").style.fontSize = `${2 + adjustment}em`;
   document.querySelector(".content").style.fontSize = `${1.4 + adjustment}em`;
   alert('make smaller!');
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

