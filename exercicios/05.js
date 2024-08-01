//distancia  d= raiz(x2 - x1)2 + (y2 - y1)2

const x1 = 1
const y1 = 1

const x2 = 3
const y2 = 3


const delta1 = Math.pow(x2 - x1, 2) 
const delta2 = Math.pow(y2 - y1, 2) 
const deltaFinal = delta1 + delta2
const distancia = Math.sqrt(deltaFinal)

console.log("Adistancia entre dois ponstos é " + distancia)
