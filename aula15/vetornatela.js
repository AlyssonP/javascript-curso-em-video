let valores = [8,1,7,4,2,9] 

valores.sort()

/*
console.log(valores)


console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


for (let p = 0; p < valores.length; p++){
    console.log(`A posição ${p} tem o valor ${valores[p]}`)
}
*/

for ( let p in valores){
    console.log(`A posição ${p} tem o valor ${valores[p]}`)
}