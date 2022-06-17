//FIBONACCI ENTRE 1 y 1000, PUEDES PROBAR CON OTRO VALOR DISTINTO A 1000

let arr = [0,1];

function fibonacci(limit) {
    for (let i of arr) {
        let contador =  arr.every(result => result < limit);

        if (contador) {

            i = parseInt(arr[arr.length - 1]) + parseInt(arr[arr.length -2]);
            arr.push(i); 
            resultado =  arr.filter(result => result < limit);
           
        }
    } console.log(`Fibonacci del 1 al ${limit}: `, resultado);
}
fibonacci(1000);
