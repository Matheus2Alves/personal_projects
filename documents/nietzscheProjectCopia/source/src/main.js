 //modo escuro
 document.querySelector('.btn ').addEventListener('click', function() {
    let  hedd = document.querySelectorAll('.darkk')
    let gray = document.querySelectorAll('.grayy')
    let hardgray = document.querySelectorAll('.hardgray')
    let pp = document.querySelectorAll('.white')
    this.classList.toggle('active');
    hedd.forEach(x => x.classList.toggle('active'));
    gray.forEach(x => x.classList.toggle('active'));
    hardgray.forEach(x => x.classList.toggle('active'));
    pp.forEach(x => x.classList.toggle('active'));
});

 //abrir menu do navbar para telas menores
 document.getElementById('burguer').addEventListener('click', function() {
    event.stopPropagation(); 
    document.querySelector('header').classList.toggle('menu-open');
    });
document.addEventListener('click', function(event) {
var menu = document.querySelector('header');
var target = event.target;
if (!menu.contains(target)) { // Verifica se o clique ocorreu fora do menu
    menu.classList.remove('menu-open');
}
});
