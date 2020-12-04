const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

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