
function logar(){


}


document.addEventListener("keypress" , function(e){


    if (e.key === "Enter") {

        const btn = document.querySelector('#enviar')
        btn.click()
        alert('Enviado com Sucesso')
        
    }
})
