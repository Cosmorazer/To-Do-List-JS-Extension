const save = document.getElementById("save-btn")
let notes = []
const list = document.getElementById("list")
const input = document.getElementById("input")
const clear = document.getElementById("clear-btn")
const notes_from_storage = JSON.parse(localStorage.getItem("notes"))

if (notes_from_storage) {
    notes = notes_from_storage
    renderNotes()
}
save.addEventListener("click", function () {
    if (input.value != "") {
        notes.push(input.value)
        input.value = ""
        localStorage.setItem("notes", JSON.stringify(notes))
        renderNotes()
    }
})
clear.addEventListener("click", function () {
    localStorage.clear()
    notes = []
    renderNotes()
})

function renderNotes() {
    let list_items = ""
    for (let i = 0; i < notes.length; i++) {
        list_items += `
        <li>
        ${notes[i]}
        </li>
        `
    }
    list.innerHTML = list_items
}

var inputtext = document.querySelector('input'); // get the input element
input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(inputtext); // immediately call the function

function resizeInput() {
    this.style.width = this.value.length + "chr";
}