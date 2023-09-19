
function contar() {
    const button = document.querySelector(".button");
    const count = document.querySelector(".contador");
    button.addEventListener('click', () => {
        count.innerHTML = Number.parseInt(count.innerHTML) + 1
    })
}
contar();



