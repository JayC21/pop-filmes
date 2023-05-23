// esse é pro botão menu
function clickMenu() {
    if (lista.style.display == 'none'){
        lista.style.display = 'block'
    } else{
        lista.style.display = 'none'
    }
}


//função para sessão selecionada do header para navegação
const botao = document.querySelectorAll('.page');
botao.forEach((tab, index)=>{
    tab.addEventListener('click', ()=>{
        botao.forEach(tab=>{tab.classList.remove('active')})
        tab.classList.add('active');
    })
})

// submit no formulário de cadastro
function alerta(){
    alert("Confira seu email e configure uma senha de acesso.");
}
