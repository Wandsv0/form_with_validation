const inputText = document.querySelectorAll(".input")
const form = document.getElementById("form")
const btn = document.getElementById("button")
const inputName = document.getElementById("name")
const inputEmail = document.getElementById("email")
const inputPhone = document.getElementById("phone")
const inputArea = document.getElementById("message")
const small = document.getElementsByTagName("small")
const camp = document.getElementsByClassName("camp")


inputText.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add('full')
        } else if (input.value === "") {
            input.classList.remove('full')
        }
    })
})

function checkName() {
    if (inputName.value === "") {
        small[0].classList.remove("required")
        camp[0].classList.remove("margin")
        inputName.classList.add("empty")
    } else {
        small[0].classList.add('required')
        camp[0].classList.add('margin')
    }
}

function checkEmail() {
    if (inputEmail.value === "") {
        small[1].classList.remove("required")
        camp[1].classList.remove("margin")
        inputEmail.classList.add("empty")
    } else {
        small[1].classList.add('required')
        camp[1].classList.add('margin')
    }
}


function checkPhone() {
    if (inputPhone.value === "") {
        small[2].classList.remove("required")
        camp[2].classList.remove("margin")
        inputPhone.classList.add("empty")
    }
    else {
        small[2].classList.add('required')
        camp[2].classList.add('margin')
    }
}


function checkText() {
    if (inputArea.value === '') {
        small[3].classList.remove('required')
        camp[3].classList.remove('margin')
        inputArea.classList.add('empty')
    } else {
        small[3].classList.add('required')
        camp[3].classList.add('margin')
    }
}




btn.addEventListener('click', (i) => {
    i.preventDefault()
    checkName()
    checkEmail()
    checkPhone()
    checkText()

})

