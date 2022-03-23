let btnCalcular = document.getElementById('calcular')

btnCalcular.addEventListener('click', e => {
    e.preventDefault()
    let totalCuenta = Number(document.getElementById('totalCuenta').value);
    let totalPropina = Number(document.getElementById('totalPropina').value);
    let resultCuenta = document.getElementById('resultCuenta').value = totalCuenta;
    let resultPropina = document.getElementById('resultPropina');
    let resultTotalCuenta = document.getElementById('resultTotalCuenta');

    let porcentajePropina = (totalCuenta * totalPropina) / 100;
    let totalPagar = resultCuenta + porcentajePropina;

    resultPropina.value = porcentajePropina;
    resultTotalCuenta.value = totalPagar;
})