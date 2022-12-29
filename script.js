const panels = document.querySelectorAll('.panel')

panels.forEach((p) => {
    p.addEventListener('click', ()=> {
        removeActive()
        p.classList.add('active')
    })
})

function removeActive(classe) {
    panels.forEach(p => {
        p.classList.remove('active')
    })
}