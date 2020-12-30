const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const recipes = document.querySelectorAll('.recipes')

for(let card of cards){
    card.addEventListener("click", function(){
        const receitaId = card.getAttribute("id")
        window.location.href = `/recipes?id=${receitaId}`
    })
}

function mostrarIngredientes() {
    const btn = document.getElementById('btnIngre')
    const div = document.querySelector('.lista__ingredientes');

    if(btn.textContent == 'MOSTRAR') {
        div.classList.add('active')
        btn.innerHTML = "ESCONDER"
    } else {
        div.classList.remove('active')
        btn.innerHTML = "MOSTRAR"
    }
}

function mostrarPreparo() {
    const btn = document.getElementById('btnPreparo')
    const div = document.querySelector('.lista__preparo');

    if(btn.textContent == 'MOSTRAR') {
        div.classList.add('active')
        btn.innerHTML = "ESCONDER"
    } else {
        div.classList.remove('active')
        btn.innerHTML = "MOSTRAR"
    }
}

function mostrarInfoAdicionais() {
    const btn = document.getElementById('btnAdicionais')
    const div = document.querySelector('.lista__informacoes');

    if(btn.textContent == 'MOSTRAR') {
        div.classList.add('active')
        btn.innerHTML = "ESCONDER"
    } else {
        div.classList.remove('active')
        btn.innerHTML = "MOSTRAR"
    }
}

/* -- Para abrir com No modal
for(let card of cards) {
    card.addEventListener("click", function() {
        const title = card.querySelector(".card-title").innerHTML
        const author = card.querySelector(".author").innerHTML
        const imgId = card.getAttribute("id")

        modalOverlay.classList.add("active")
        modalOverlay.querySelector("img").src = `./assets/${imgId}.png`

        modalOverlay.querySelector(".modal-title").innerHTML = title
        modalOverlay.querySelector(".modal-author").innerHTML = author
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})
*/