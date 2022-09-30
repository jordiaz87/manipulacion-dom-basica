const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event) {
//     console.log({event});
//     event.preventDefault()
//     let in1 = Number(input1.value);
//     let in2 = Number(input2.value);
//     let suma = in1 + in2 ;
//     pResult.innerHTML = "Resultado: " + suma;
// }


btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
    // console.log({event});
    // event.preventDefault()
    let in1 = Number(input1.value);
    let in2 = Number(input2.value);
    let suma = in1 + in2 ;
    pResult.innerHTML = "Resultado: " + suma;
}