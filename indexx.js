const yes = document.querySelector('#yesbtn');
yes.addEventListener('click', ()=> alert('gracias'))


const nop = document.querySelector('#nobtn');
nop.addEventListener('mouseover', ()=> 
{const  randomx = Math.random()*100
const  randomy = Math.random()*100
nop.style.position='absolute'
nop.style.top = randomy+'%'
nop.style.left = randomx+'%'
nop.style.transform = 'translate(-'
-`${randomy}%)`

})
