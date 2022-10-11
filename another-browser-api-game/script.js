const stars = document.querySelectorAll('.star');

console.log(stars);
for(let i = 0; i < stars.length; i++){
    console.log(stars[i]);
    stars[i].classList.add('orange');
}