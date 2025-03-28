/*Ejercicio 1: "Calculadora de Potencias"
Implementa una función que calcule potencias usando recursividad.
El programa debe:
- Crear una función que reciba base y exponente
- Usar recursividad para calcular la potencia
- Manejar casos especiales (exponente 0, negativo)

Ejemplo de uso:
calcularPotencia(2, 3);*/

function calculadoraDePotecias (base, exp){
    if (exp == 0) return 1

    if (exp == 1) return base

    if(exp > 0){return base*calculadoraDePotecias(base, exp -1)}

    return (1/base)*calculadoraDePotecias(base, exp -1)}




console.log (calculadoraDePotecias(2,3))





