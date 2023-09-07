const cat = document.querySelector('.cat');
const block = document.querySelector('.block');

//jump
const jump = () => {

    cat.classList.add('jump');

    setTimeout(() => {

        cat.classList.remove('jump');

    }, 500);
}

document.addEventListener('keydown', jump);

//colision
const loop = setInterval(() => {

    const blockPosition = block.offsetLeft;
    const catPosition = +window.getComputedStyle(cat).bottom.replace
    ('px', '');

    if (blockPosition <= 75 && blockPosition > 0 && catPosition < 10) {

        block.style.animation = 'none';
        block.style.left = `${blockPosition}px`;

        cat.style.animation = 'none';
        cat.style.bottom = `${catPosition}px`;
        
        cat.src = '';
        cat.style.width = '';

        clearInterval(loop);
        clearInterval(scoreInterval);
    } 
}, 10);

//score
let displayscore = document.getElementById('score');
let score = 0;

function showscore(){
    score++;
    displayscore.innerText = score;
}

const scoreInterval = setInterval(showscore, 100);

//button
const jup = (jup) => {

    cat.classList.add('jump');

    setTimeout(() => {

        cat.classList.remove('jump');

    }, 500);
}

 // Selecione o botão pelo ID
 const reloadButton = document.getElementById('reloadButton');

 // Adicione um ouvinte de evento para o clique no botão
 reloadButton.addEventListener('click', function() {
     // Recarregue a página
     location.reload();
 });



