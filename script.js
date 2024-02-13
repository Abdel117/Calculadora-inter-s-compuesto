const eDepositoInicial = document.getElementById("initial-deposit");
const ePorcentajeInferior = document.getElementById("inferior-percentage");
const ePorcentajeSuperior = document.getElementById("superior-percentage");
const eAnios = document.getElementById("years");
const eCalcular = document.getElementById("calculate");
const ePlusAnual = document.getElementById("anual-plus");
const eResultados = document.getElementById("final");

function calcularInteresCompuesto(depositoInicial, porcentajeInferior, porcentajeSuperior, anios, plusAnual) {
    let cantidadFinal = depositoInicial;
    
    for (let i = 0; i < anios; i++) {
        let porcentajeAnual = porcentajeInferior + Math.floor(Math.random() * (porcentajeSuperior - porcentajeInferior + 1));
        cantidadFinal = cantidadFinal * (1 + (porcentajeAnual / 100)) + plusAnual;
    }

    return cantidadFinal;
}

function mostrarResultados(depositoInicial, porcentajeInferior, porcentajeSuperior, anios, plusAnual){
    let totalFinal = calcularInteresCompuesto(depositoInicial, porcentajeInferior, porcentajeSuperior, anios, plusAnual);
    totalFinal = totalFinal.toFixed(2);
    eResultados.value = totalFinal;
}

function main(){
    let depositoInicial = parseFloat(eDepositoInicial.value);
    let porcentajeInferior = parseFloat(ePorcentajeInferior.value);
    let porcentajeSuperior = parseFloat(ePorcentajeSuperior.value);
    let anios = parseInt(eAnios.value);
    let plusAnual = parseFloat(ePlusAnual.value);
    mostrarResultados(depositoInicial, porcentajeInferior, porcentajeSuperior, anios, plusAnual);
}

eCalcular.addEventListener('click', () => {
    main();
});
