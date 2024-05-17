let celsius = document.querySelector('#celsius')
let fahrenheit = document.querySelector('#fahrenheit')
let kelvin = document.querySelector('#kelvin')
let submit = document.querySelector('#submit')
let resert = document.querySelector('#resert')

submit.addEventListener('click',()=>{
    submit.value = eval(`${celsius.value}`)
})