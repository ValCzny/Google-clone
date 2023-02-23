// variables
let input = document.getElementById("input");
let phrase
function cd() {
    window.location.href = "https://www.google.com/search?q=" + phrase;
}
// evento del Enter
document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        phrase = input.value;
        cd()
    }
});