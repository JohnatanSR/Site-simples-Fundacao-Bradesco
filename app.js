'use strict'
const switcher = document.querySelector('.botao');
console.log(switcher)
switcher.addEventListener('click', function() {   
    console.log(switcher)
    var className = document.body.className;
    console.log(className);

    if(className == "tema-escuro"){
        console.log(className);
        document.body.classList.toggle('tema-claro')
        this.textContent = "Escuro";
    }
    else{
        this.textContent = "Claro";
        document.body.classList.toggle('tema-claro')
        console.log('classe atual do tema: ' + className);

    }
})