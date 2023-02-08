let array = ["Conrado", "Agustin", "Eric", "Ailen"]
console.log("Original", array)

// Agregar un item al final del array
array.push("Spock")
console.log("Usando push", array)

// Sacar un item al final del array
array.pop()
console.log("Usando pop", array)

// Sacar un item al principio del array
array.shift()
console.log("Usando shift", array)

// Agregar un item al principio del array
array.unshift("Asd")
console.log("Usando unshift", array)

// Separar items desde un inicio hasta un final opcional
const newArray = array.slice(1, 4)
console.log("Usando slice", newArray)