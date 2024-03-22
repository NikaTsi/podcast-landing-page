let form = document.querySelector("form")
let inpt = document.querySelector("input")
let err = document.querySelector("h3")
let mail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault()
    check()

    if (check()) {
        form.submit()
    }

})

function check() {
    let valid = true;

    if (inpt.value == "" || !mail.test(inpt.value)) {
        err.classList.add("active")
        valid = false
    } else {
        err.classList.remove("active")
    }

    return valid;
}