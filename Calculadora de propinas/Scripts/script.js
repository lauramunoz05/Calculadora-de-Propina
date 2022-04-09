// let btnCalcular = document.getElementById('calcular');
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let totalCuenta = document.getElementById('totalCuenta').value;
    let totalPropina = Number(document.getElementById('totalPropina').value);
    let resultCuenta = document.getElementById('resultCuenta');
    let resultPropina = document.getElementById('resultPropina');
    let resultTotalCuenta = document.getElementById('resultTotalCuenta');

    const totalCuentaSinPuntos = totalCuenta.replace(/\./g, "");

    let porcentajePropina = (totalCuentaSinPuntos * totalPropina) / 100;
    let totalPagar = Number(totalCuentaSinPuntos) + porcentajePropina;

    resultCuenta.value = totalCuentaSinPuntos;
    resultPropina.value = porcentajePropina;
    resultTotalCuenta.value = totalPagar;
})