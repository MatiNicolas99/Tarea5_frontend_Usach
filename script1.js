//FIBONACCI ENTRE 1 y 1000 MOSTRANDO NUMEROS PARES, PUEDES PROBAR CON OTRO VALOR DISTINTO A 1000

let arr = [0,1];

function fibonacciPares(limit) {
    for (let i of arr) {
        let contador =  arr.every(result => result < limit);

        if (contador) {

            i = parseInt(arr[arr.length - 1]) + parseInt(arr[arr.length -2]);
            arr.push(i); 
            resultado =  arr.filter(result => result % 2 == 0 && result >= 0 && result < limit);
           
        }
    } console.log(`Fibonacci para números pares entre 1 y ${limit}: `, resultado);
}
fibonacciPares(1000);