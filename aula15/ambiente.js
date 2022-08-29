let nums = [5,8,2,9,3]
console.log(`Os elemtos do vetor é ${nums}`)
nums.push(1)
nums.sort()
console.log(`os elementos ordenados ${nums}`)
console.log(`O vetor tem ${nums.length} posições`)
let n = 3
let pos = nums.indexOf(n)
if (pos == -1){
    console.log(`O valor ${n} não foi encontrado`)
} else {
    console.log(`O valor ${n} está na posição ${pos}`)
}
