function calculadoraLitros() {
    console.log("Hola mundo! Simulador Interactivo")

    alert("Calculadora de litros de pintura: ")

    let continuar = true;

    while (continuar){
        const areaPared = parseFloat(prompt("Ingrese el área total de paredes a pintar en metros cuadrados:"));
        const manosPintura = parseInt(prompt("Ingrese la cantidad de manos de pintura que desea aplicar:"));

        if (isNaN(areaParedes) || isNaN(capasPintura) || areaParedes <= 0 || capasPintura <= 0) {
            alert("Por favor, ingrese valores numéricos válidos y mayores que cero.");
            continue;
        }

        const rendimiento = 10;

        let totalLitros = areaPared * manosPintura / rendimiento;

        alert("Para pintar " + areaPared + " metros cuadrados, se necesitan " + totalLitros.toFixed(2) + " litros de pintura, aplicando " + manosPintura + " manos de pintura.");

        let respuesta = prompt("Calcular de nuevo?");
        if (respuesta !== "si") {
            continuar = false;
        }
    }
}

calculadoraLitros();