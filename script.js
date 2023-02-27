// variables
let input = document.getElementById("input");
let boton_buscar = document.getElementById("boton-buscar");
let phrase

// función
function cd() {
    window.location.href = "https://www.google.com/search?q=" + phrase;
}

// evento de buscar
document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        phrase = input.value;
        cd()
    }
});

boton_buscar.addEventListener("click", function(event) {
    phrase = input.value;
    cd()
})