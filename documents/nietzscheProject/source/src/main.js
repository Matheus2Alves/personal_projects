document.querySelector('.btn ').addEventListener('click', function() {
    let  hedd = document.querySelectorAll('.darkwhite')
    window.alert("bla");
    this.classList.toggle('active');
    hedd.forEach(x => x.classList.toggle('active'));
});